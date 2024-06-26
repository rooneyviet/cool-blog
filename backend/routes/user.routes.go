package routes

import (
	"coolblog/controllers"

	"github.com/gin-gonic/gin"
)

type UserRouteController struct {
	userController controllers.UserController
}

func NewUserRouteController(userController controllers.UserController) UserRouteController {
	return UserRouteController{userController}
}

func (rc *UserRouteController) UserRoute(routeGroup *gin.RouterGroup) {
	router := routeGroup.Group("user")

	router.POST("/register", rc.userController.RegisterUser)
	router.POST("/login", rc.userController.Login)
	router.POST("/logout", rc.userController.Logout)
}
