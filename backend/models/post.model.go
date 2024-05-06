package models

import (
	"time"

	"github.com/google/uuid"
)

type Post struct {
	ID       uint      `json:"id" gorm:"primaryKey;autoIncrement"`
	Title     string    `json:"name" gorm:"type:varchar(100);not null"`
	Content string `json:"content" gorm:"type:text;not null"`
	Highlight bool `json:"hightlight" gorm:"default:false"`
	UserID	uuid.UUID
	User User `gorm:"foreignkey:UserID"`
	CreateAt time.Time `json:"create_at" gorm:"not null"`
	UpdateAt time.Time `json:"update_at" gorm:"not null"`
}

type PostInput struct {
	Title     string    `json:"name" binding:"required"`
	Content string `json:"content" binding:"required"`
	Highlight bool `json:"hightlight" binding:"required"`
	UserID uuid.UUID `json:"user_id" binding:"required"`
}

type PostEdit struct {
	Title     string    `json:"name" binding:"required"`
	Content string `json:"content" binding:"required"`
	Highlight bool `json:"hightlight" binding:"required"`
}
