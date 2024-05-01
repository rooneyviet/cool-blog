package database

import (
	"coolblog/models"
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)
func ConnectDB(){
	//nV@99trsJ4~JHFd
	dsn := "user=postgres.dqxueefcyuxymzqiyztz password=nV@99trsJ4~JHFd host=aws-0-ap-northeast-1.pooler.supabase.com port=5432 dbname=postgres"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})


	if err != nil {
		panic("Cannot connect to Database")
	}

	db.AutoMigrate(&models.User{}, &models.Role{})
	// db.Create(&models.Role{RoleName: "Admin"})
	// db.Create(&models.User{UserName: "admin", Password:"admin"})
	fmt.Println("Migrated completed")
}


