package main

import (
	"net/http"

	"coolblog/database"

	"github.com/gin-gonic/gin"
)

func main() {
	database.ConnectDB()
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"data": "Hello World",
		})
	})

	r.Run()
}
