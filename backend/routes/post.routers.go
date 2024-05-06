package routes

import (
	"coolblog/controllers"
	"coolblog/middleware"

	"github.com/gin-gonic/gin"
)

type PostRouteController struct {
	PostController controllers.PostController
}

func NewPostRouteController(PostController controllers.PostController) PostRouteController{
	return PostRouteController{PostController}
}

func (rc *PostRouteController) PostRoute(routeGroup *gin.RouterGroup){
	router := routeGroup.Group("post")

	router.Use(middleware.AuthMiddleware)

	router.GET("/:id", rc.PostController.GetOnePost)
	router.POST("/", rc.PostController.AddPost)
	router.PUT("/:id", rc.PostController.EditPost)
	router.DELETE("/:id", rc.PostController.DeletePost)

}
