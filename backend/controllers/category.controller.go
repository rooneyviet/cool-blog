package controllers

import (
	"coolblog/models"
	"net/http"

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
