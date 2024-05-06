package routes

import (
	"coolblog/controllers"
	"coolblog/middleware"

	"github.com/gin-gonic/gin"
)

type ImageRouteController struct {
	ImageController controllers.ImageController
}

func NewImageRouteController(ImageController controllers.ImageController) ImageRouteController {
	return ImageRouteController{ImageController}
}

func (rc *ImageRouteController) ImageRoute(routeGroup *gin.RouterGroup) {
	router := routeGroup.Group("image")

	router.Use(middleware.AuthMiddleware)
	router.GET("/", rc.ImageController.GetAllImage)
	router.GET("/:id", rc.ImageController.GetImage)
	router.POST("/", rc.ImageController.AddImage)
}
