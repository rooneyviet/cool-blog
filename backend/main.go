package main

import (
	"coolblog/controllers"
	"coolblog/database"
	"coolblog/routes"
	"fmt"
	"log"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

var (
	server *gin.Engine

	UserController controllers.UserController
	UserRouteController routes.UserRouteController
)

func init(){
	fmt.Println("start")
	database.ConnectDB()

	UserController = controllers.NewUserController(database.DB)
	UserRouteController = routes.NewUserRouteController(UserController)

	server = gin.Default()

}

func main() {
	corsConfig := cors.DefaultConfig()
	corsConfig.AllowOrigins = []string{"http://localhost:8080"}
	corsConfig.AllowMethods = []string{"GET", "POST", "PUT", "DELETE"}

	server.Use(cors.New(corsConfig))

	router := server.Group("/api")
	UserRouteController.UserRoute(router)
	log.Fatal(server.Run())
}
