package models

import (
	"time"
)

type User struct {
	ID       uint       `json:"id" gorm:"type:uuid;default:uuid_generate_v4();primary_key"`
	UserName string     `json:"username" gorm:"type:varchar(255);not null;unique"`
	Password string     `json:"password" gorm:"type:varchar(255);not null"`
	RoleID   uint       `json:"role_id"`
	Role     Role       `json:"role" gorm:"foreignkey:RoleID"`
	CreateAt time.Time  `json:"create_at" gorm:"not null"`
	UpdateAt time.Time  `json:"update_at" gorm:"not null"`
}

type RegisterRequest struct {
	UserName    string `json:"username" binding:"required"`
	Password string `json:"password" binding:"required"`
	PassWordConfirm string `json:"password_confirm" binding:"required"`
}

type LoginInput struct {
	UserName string `json:"username"`
	Password string `json:"password"`
}

type LoginResponse struct {
	JWToken string `json:"token"`
}
