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

	now := time.Now()
	newUser := models.User{
		UserName: strings.ToLower( payload.UserName),
		Password: hashedPassword,
		RoleID: 0,
		CreateAt: now,
		UpdateAt: now,
	}

	result := ac.DB.Create(&newUser)
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
	result := uc.DB.First(&user, "username = ?", strings.ToLower(payload.UserName))
	if result.Error != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"result":"fail", "message":"Invalid email or password"})
		return
	}

	if err := utils.VerifyPassword(user.Password, payload.Password); err != nil{
		ctx.JSON(http.StatusBadRequest, gin.H{"result":"fail", "message":"Invalid email or password"})
		return
	}
}
