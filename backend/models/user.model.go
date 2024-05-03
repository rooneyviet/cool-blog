package models

import (
	"time"

	"github.com/google/uuid"
)

type User struct {
	ID       uuid.UUID   `gorm:"type:uuid;default:uuid_generate_v4();primary_key"`
	UserName string `gorm:"type:varchar(255);not null"`
	Password string `gorm:"type:varchar(255);not null"`
	RoleID   uint
	Role     Role `gorm:"foreignkey:RoleID"`
	CreateAt time.Time `gorm:"not null"`
	UpdateAt time.Time `gorm:"not null"`
}

type RegisterRequest struct {
	UserName    string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
	PassWordConfirm string `json:"password_confirm" binding:"required"`
}

type LoginResponse struct {
	JWToken string `json:"token"`
}
