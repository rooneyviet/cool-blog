package controllers

import (
	"coolblog/models"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type PostController struct {
	DB *gorm.DB
}

func NewPostController(DB *gorm.DB) PostController {
	return PostController{DB}
}

func (pc *PostController) AddPost(ctx *gin.Context){
	var payload *models.PostInput

	if err := ctx.ShouldBindJSON(&payload); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"result": "fail", "message":err.Error()})
		return
	}

	if payload.Title == "" || payload.Content == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"result": "fail", "message":"invalid value"})
		return
	}

	var user models.User
	result := pc.DB.Where("id = ?", payload.UserID).First(&user)
	if result.RowsAffected == 0 {
		ctx.JSON(http.StatusNotFound, gin.H{"result": "fail", "message": "user not found"})
		return
	}

	var category models.Category
	result = pc.DB.Where("id = ?", payload.CategotyID).First(&category)
	if result.RowsAffected == 0 {
		ctx.JSON(http.StatusNotFound, gin.H{"result": "fail", "message": "category not found"})
		return
	}

	var image models.Image
	result = pc.DB.Where("id = ?", payload.ImageID).First(&image)
	if result.RowsAffected == 0 {
		ctx.JSON(http.StatusNotFound, gin.H{"result": "fail", "message": "image not found"})
		return
	}

	newPost := models.Post{
		Title: payload.Title,
		Content: payload.Content,
		ShortContent: payload.ShortContent,
		Highlight: payload.Highlight,
		UserID: payload.UserID,
		CategoryID: payload.CategotyID,
		ImageID: payload.ImageID,
	}

	result = pc.DB.Create(&newPost)
	if result.Error != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"result": "fail", "message": result.Error})
		return
	}

	ctx.JSON(http.StatusCreated, gin.H{"result":"success"})
}

func (pc *PostController) GetOnePost(ctx *gin.Context){
	postId := ctx.Param("id")
	if postId == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"result": "fail", "message": "invalid input"})
		return
	}

	var post models.Post
	result := pc.DB.Where("id = ?", postId).First(&post)
	if result.RowsAffected == 0 {
		ctx.JSON(http.StatusNotFound, gin.H{"result": "fail", "message": "post not found"})
		return
	}

	ret := models.PostResponse{
		ID: post.ID,
		Title: post.Title,
		ShortContent: post.ShortContent,
		Content: post.Content,
		Highlight: post.Highlight,
		UserID: post.UserID,
		CategotyID: post.CategoryID,
		ImageID: post.ImageID,
		CreateAt: post.CreateAt,
		UpdateAt: post.UpdateAt,
	}
	ctx.JSON(http.StatusOK, ret)
}

func (pc *PostController) EditPost(ctx *gin.Context){
	postId := ctx.Param("id")
	if postId == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"result": "fail", "message": "invalid input"})
		return
	}

	var payload *models.PostEdit

	if err := ctx.ShouldBindJSON(&payload); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"result": "fail", "message":err.Error()})
		return
	}

	if payload.Title == "" || payload.Content == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"result": "fail", "message":"invalid value"})
		return
	}

	var post models.Post
	result := pc.DB.Where("id = ?", postId).First(&post)
	if result.RowsAffected == 0 {
		ctx.JSON(http.StatusNotFound, gin.H{"result": "fail", "message": "post not found"})
		return
	}

	var category models.Category
	result = pc.DB.Where("id = ?", payload.CategotyID).First(&category)
	if result.RowsAffected == 0 {
		ctx.JSON(http.StatusNotFound, gin.H{"result": "fail", "message": "category not found"})
		return
	}

	var image models.Image
	result = pc.DB.Where("id = ?", payload.ImageID).First(&image)
	if result.RowsAffected == 0 {
		ctx.JSON(http.StatusNotFound, gin.H{"result": "fail", "message": "image not found"})
		return
	}

	post.Title = payload.Title
	post.ShortContent = payload.ShortContent
	post.Content = payload.Content
	post.Highlight = payload.Highlight
	post.CategoryID = payload.CategotyID
	post.ImageID = payload.ImageID
	post.UpdateAt = time.Now()
	pc.DB.Save(&post)

	ret := models.PostResponse{
		ID: post.ID,
		Title: post.Title,
		ShortContent: post.ShortContent,
		Content: post.Content,
		Highlight: post.Highlight,
		UserID: post.UserID,
		CategotyID: post.CategoryID,
		ImageID: post.ImageID,
		CreateAt: post.CreateAt,
		UpdateAt: post.UpdateAt,
	}

	ctx.JSON(http.StatusOK, ret)
}

func (pc *PostController) DeletePost(ctx *gin.Context){
	postId := ctx.Param("id")
	if postId == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"result": "fail", "message": "invalid input"})
		return
	}

	var post models.Post
	result := pc.DB.Where("id = ?", postId).First(&post)
	if result.RowsAffected == 0 {
		ctx.JSON(http.StatusNotFound, gin.H{"result": "fail", "message": "post not found"})
		return
	}

	result = pc.DB.Delete(&models.Post{}, postId)
	if result.Error != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "failed to delete item"})
		return
	}

	ctx.JSON(http.StatusOK, gin.H{"message": "item deleted successfully"})
}
