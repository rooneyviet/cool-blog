package routes

import (
	"coolblog/controllers"

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

	router.GET("/", rc.categoryController.GetAllCategory)
}
