package models

import (
	"gorm.io/gorm"
)

type Role struct {
	gorm.Model
	ID       uint   `gorm:"primary_key;autoIncrement"`
	RoleName string `gorm:"type:varchar(50);not null"`
}

type User struct {
	gorm.Model
	ID       uint   `gorm:"primary_key;autoIncrement"`
	UserName string `gorm:"type:varchar(255);not null"`
	Password string `gorm:"not null"`
	RoleID 		uint
	Role     Role		`gorm:"foreignkey:RoleID"`
}

type SignInRequest struct{
	Email string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type SignInResponse struct {
	JWToken string `json:"token"`
}
