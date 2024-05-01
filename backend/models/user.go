package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	ID       uint   `gorm:"primary_key;autoIncrement"`
	UserName string `gorm:"type:varchar(255);not null"`
	Password string `gorm:"not null"`
	RoleID 		uint
	Role     Role		`gorm:"foreignkey:RoleID"`
}

type Role struct {
	gorm.Model
	ID       uint   `gorm:"primary_key;autoIncrement"`
	RoleName string `gorm:"type:varchar(50);not null"`
}
