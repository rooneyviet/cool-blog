package controllers

import (
	"coolblog/middleware"
	"coolblog/models"
	"coolblog/utils"
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type UserController struct {
	DB *gorm.DB
}

func NewUserController(DB *gorm.DB) UserController{
	return UserController{DB}
}

func (ac *UserController) RegisterUser(ctx *gin.Context) {
	var payload *models.RegisterRequest

	if err := ctx.ShouldBindJSON(&payload); err != nil{
		ctx.JSON(http.StatusBadRequest, gin.H{"result": "fail", "message":err.Error()})
		return
	}

	if payload.Password != payload.PassWordConfirm {
		ctx.JSON(http.StatusBadRequest, gin.H{"result": "fail", "message":"Password do not match"})
		return
	}

	hashedPassword, err := utils.HashPassword(payload.Password)
	if err != nil{
		ctx.JSON(http.StatusBadGateway, gin.H{"result": "error", "message":err})
		return
	}

	var roleCount int64
	ac.DB.Model(&models.Role{}).Count(&roleCount)
	if roleCount == 0{
		adminRole := models.Role{RoleName: "admin", CreateAt: time.Now(), UpdateAt: time.Now()}
		result := ac.DB.Create(&adminRole)
		if result.Error != nil{
			panic("failed to create admin role")
		}

	}

	var role models.Role
	result := ac.DB.First(&role, "role_name = ?", "admin")

	if result.Error != nil{
		panic("cannot find admin role")
	}

	now := time.Now()
	newUser := models.User{
		UserName: strings.ToLower( payload.UserName),
		Password: hashedPassword,
		RoleID: role.ID,
		CreateAt: now,
		UpdateAt: now,
	}


	result = ac.DB.Create(&newUser)
	if result.Error != nil {
		ctx.JSON(http.StatusConflict, gin.H{"result": "fail", "message": result.Error})
		return
	}

	jwtToken, err := middleware.GenerateJWT(payload.UserName)
	if err != nil{
		ctx.JSON(http.StatusBadRequest, gin.H{"result": "fail", "message": err})
		return
	}

	ctx.JSON(http.StatusCreated, gin.H{"result":"success","token":jwtToken})
}

func (uc *UserController) Login(ctx *gin.Context){

	payload:= &models.LoginInput{}

	if err := ctx.ShouldBindJSON(payload); err != nil  {
		ctx.JSON(http.StatusBadRequest, gin.H{"result":"fail", "message":err})
		return
	}


	var user models.User
	result := uc.DB.First(&user, "user_name = ?", strings.ToLower(payload.UserName))
	if result.Error != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"result":"fail", "message":"Invalid email or password"})
		return
	}

	if err := utils.VerifyPassword(user.Password, payload.Password); err != nil{
		ctx.JSON(http.StatusBadRequest, gin.H{"result":"fail", "message":"Invalid email or password"})
		return
	}
	token, err := middleware.GenerateJWT(payload.UserName)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"result":"fail", "message":err})
		return
	}

	ctx.SetCookie("token", token, 3600, "/", "localhost", false, true)
	ctx.SetCookie("logged_in", "1", 3600, "/", "localhost", false,false)

	ctx.JSON(http.StatusOK, gin.H{"result":"success","token":token})
}

func (uc *UserController) Logout(ctx *gin.Context){
	ctx.SetCookie("token", "", -1, "/", "localhost", false, true)
	ctx.SetCookie("logged_in", "0", -1, "/", "localhost", false,false)

	ctx.JSON(http.StatusOK, gin.H{"status": "success"})
}
