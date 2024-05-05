package routes

import (
	"coolblog/controllers"
	"coolblog/middleware"

	"github.com/gin-gonic/gin"
)

type CategoryRouteController struct {
	categoryController controllers.CategoryController
}

func NewCategoryRouteController(categoryController controllers.CategoryController) CategoryRouteController {
	return CategoryRouteController{categoryController}
}

func (rc *CategoryRouteController) CategoryRoute(routeGroup *gin.RouterGroup) {
	router := routeGroup.Group("category")

	router.Use(middleware.AuthMiddleware)
	router.GET("/", rc.categoryController.GetAllCategory)
	router.GET("/:id", rc.categoryController.GetCategory)
	router.PUT("/:id", rc.categoryController.EditCategory)
	router.POST("/add", rc.categoryController.PostCategory)
	router.DELETE("/:id", rc.categoryController.DeleteCategory)
}
