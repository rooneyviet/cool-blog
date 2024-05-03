package database

import (
	"coolblog/models"
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB
func ConnectDB(){
	var err error
	dsn := "host=localhost user=postgres password=mysecretpassword dbname=coolblog port=5432 sslmode=disable TimeZone=Asia/Shanghai"
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})


	if err != nil {
		panic("Cannot connect to Database")
	}

	DB.AutoMigrate(&models.User{}, &models.Role{})
	// db.Create(&models.Role{RoleName: "Admin"})
	// db.Create(&models.User{UserName: "admin", Password:"admin"})
	fmt.Println("Migrated completed")
}


