package controllers

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type ImageController struct {
	DB *gorm.DB
}

func NewImageController(DB *gorm.DB) ImageController {
	return ImageController{DB}
}

func (ic *ImageController) GetImage(ctx *gin.Context){

}

func (ic *ImageController) AddImage(ctx *gin.Context){

}

func (ic *ImageController) GetAllImage(ctx *gin.Context){

}
