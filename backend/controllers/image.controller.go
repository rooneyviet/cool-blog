package controllers

import (
	"coolblog/models"
	"coolblog/utils"
	"fmt"
	"net/http"
	"time"

	"github.com/disintegration/imaging"
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
	imageId := ctx.Param("id")
	if imageId == "" {
		ctx.JSON(http.StatusBadRequest, gin.H{"result": "fail", "message": "invalid input"})
		return
	}

	var image models.Image
	result := ic.DB.Where("id = ?", imageId).First(&image)
	if result.RowsAffected == 0 {
		ctx.JSON(http.StatusNotFound, gin.H{"result": "fail", "message": "image not found"})
		return
	}

	ctx.JSON(http.StatusOK, image)
}

func (ic *ImageController) AddImage(ctx *gin.Context){
	file, err := ctx.FormFile("image")
	if err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
    return
	}

	thumb, err := imaging.Open("uploads/" + file.Filename)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	const thumbWidth = 100
	thumbHeight := thumbWidth * thumb.Bounds().Dy() / thumb.Bounds().Dx()
	thumbImage := imaging.Resize(thumb, thumbWidth, thumbHeight, imaging.Lanczos)

	prefix, err := utils.RandomString(4)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	newFilename := file.Filename + "_" + prefix

	if err := ctx.SaveUploadedFile(file, "uploads/"+newFilename); err != nil {
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	newFilename = file.Filename + "_thumbnail_" + prefix

	thumbnailFilename := "thumbnails/" + newFilename
	if err := imaging.Save(thumbImage, thumbnailFilename); err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
	}

	result_object := models.Image{
		Url: fmt.Sprintf("upload/%v", file.Filename),
		Thumbnail: fmt.Sprintf("thumbnails/%v", thumbnailFilename),
		CreateAt: time.Now(),
		UpdateAt: time.Now(),
	}

	ctx.JSON(http.StatusOK, result_object)
}

func (ic *ImageController) GetAllImage(ctx *gin.Context){
	var images []models.Image
	ic.DB.Find(&images)

	ret := []models.ImageResponse{}

	for _, item := range images{
		image := models.ImageResponse{
			ID: item.ID,
			Url: item.Url,
			Thumbnail: item.Thumbnail,
		}

		ret = append(ret, image)
	}

	ctx.JSON(http.StatusOK, ret)
}


