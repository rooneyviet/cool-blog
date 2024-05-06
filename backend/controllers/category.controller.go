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

func (cc *CategoryController) GetCategory(ctx *gin.Context){
	categoryId := ctx.Param("id")
	if categoryId == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"result": "fail", "message": "invalid input"})
		return
	}

	var category models.Category
	result := cc.DB.Where("id = ?", categoryId).First(&category)
	if result.RowsAffected == 0 {
		ctx.JSON(http.StatusNotFound, gin.H{"result": "fail", "message": "category not found"})
		return
	}

	ret := models.CategoriesResponse{ID: category.ID, Name: category.Name}

	ctx.JSON(http.StatusOK, ret)
}

func (cc *CategoryController) EditCategory(ctx *gin.Context) {
	var updatedItem models.PostCategoryRequest
	err := ctx.BindJSON((&updatedItem))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request input"})
		return
	}
	categoryId := ctx.Param("id")
	if categoryId == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"result": "fail", "message": "invalid input"})
		return
	}

	var category models.Category
	result := cc.DB.Where("name = ?", strings.ToLower(updatedItem.Name)).First(&category)
	if result.RowsAffected > 0 {
		ctx.JSON(http.StatusConflict, gin.H{"result": "fail", "message":fmt.Sprintf("category %v has existed", updatedItem.Name)})
		return
	}

	result = cc.DB.Where("id = ?", strings.ToLower(categoryId)).First(&category)
	if result.RowsAffected == 0 {
		ctx.JSON(http.StatusNotFound, gin.H{"result": "fail", "message": "category not found"})
		return
	}

	category.Name = updatedItem.Name
	category.UpdateAt = time.Now()
	cc.DB.Save(&category)
	ctx.JSON(http.StatusOK, category)
}

func (cc *CategoryController) DeleteCategory(ctx *gin.Context){
	categoryId := ctx.Param("id")
	if categoryId == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"result": "fail", "message": "invalid input"})
		return
	}

	var category models.Category
	result := cc.DB.Where("id = ?", strings.ToLower(categoryId)).First(&category)
	if result.RowsAffected == 0 {
		ctx.JSON(http.StatusNotFound, gin.H{"result": "fail", "message": "category not found"})
		return
	}

	result = cc.DB.Delete(&models.Category{}, categoryId)
	if result.Error != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "failed to delete item"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "item deleted successfully"})
}
