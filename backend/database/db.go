package database

import (
	"coolblog/env"
	"coolblog/models"
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	config, _ := env.LoadEnv(".")
	var err error
	dsn := fmt.Sprintf("host=%v user=%v password=%v dbname=%v port=%v sslmode=disable TimeZone=Asia/Shanghai",
		config.DBHost, config.DBUser, config.DBPASSWORD, config.DBName, config.DBPort)

	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		panic("Cannot connect to Database")
	}

	extensionInstall := DB.Exec("CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";")

	if extensionInstall.Error != nil {
		fmt.Println("failed to create uuid extension")
	}

	DB.AutoMigrate(&models.User{}, &models.Role{}, &models.Category{}, &models.Post{}, &models.Image{})

	fmt.Println("Migrated completed")
}
