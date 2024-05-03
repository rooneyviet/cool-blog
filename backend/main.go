package main

import (
	"coolblog/controllers"
	"coolblog/database"
	"coolblog/env"
	"coolblog/routes"
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
	database.ConnectDB()

	UserController = controllers.NewUserController(database.DB)
	UserRouteController = routes.NewUserRouteController(UserController)

	server = gin.Default()

}

func main() {
	config, err := env.LoadEnv(".")
	if err != nil {
		log.Fatal("Could not load environment file", err)
	}
	corsConfig := cors.DefaultConfig()
	corsConfig.AllowOrigins = []string{"http://localhost:8080", config.ClientOrigin}
	corsConfig.AllowMethods = []string{"GET", "POST", "PUT", "DELETE"}

	server.Use(cors.New(corsConfig))

	router := server.Group("/api")
	UserRouteController.UserRoute(router)
	log.Fatal(server.Run(":"+config.ServerPort))
}
