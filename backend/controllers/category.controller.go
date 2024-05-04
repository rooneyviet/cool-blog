package controllers

import (
	"coolblog/models"
	"fmt"
	"net/http"
	"strings"
	"time"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type CategoryController struct {
	DB *gorm.DB
}

func NewCategoryController(DB *gorm.DB) CategoryController {
	return CategoryController{DB}
}

func (cc *CategoryController) GetAllCategory(ctx *gin.Context){
	var categories []models.Category
	cc.DB.Find(&categories)

	ret := []models.CategoriesResponse{}
	for _,item := range categories{
		cat := models.CategoriesResponse{
			ID: item.ID,
			Name: item.Name,
		}

		ret = append(ret, cat)
	}

	ctx.JSON(http.StatusOK, ret)
}

func (cc *CategoryController) PostCategory(ctx *gin.Context){
	var  payload *models.PostCategoryRequest

	if err := ctx.ShouldBindJSON(&payload); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"result": "fail", "message":err.Error()})
		return
	}

	var category models.Category
	result := cc.DB.Where("name = ?", strings.ToLower(payload.Name)).First(&category)
	if result.RowsAffected > 0 {
		ctx.JSON(http.StatusConflict, gin.H{"result": "fail", "message":fmt.Sprintf("category %v has existed", payload.Name)})
		return
	}

	newCategory := models.Category{
		Name: strings.ToLower(payload.Name),
		CreateAt: time.Now(),
		UpdateAt: time.Now(),
	}

	result = cc.DB.Create(&newCategory)
	if result.Error != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"result": "fail", "message": result.Error})
		return
	}

	ctx.JSON(http.StatusCreated, gin.H{"result":"success"})
}
