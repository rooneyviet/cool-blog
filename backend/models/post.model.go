package models

import (
	"time"

	"github.com/google/uuid"
)

type Post struct {
	ID       uint      `json:"id" gorm:"primaryKey;autoIncrement"`
	Title     string    `json:"title" gorm:"type:varchar(100);not null"`
	Content string `json:"content" gorm:"type:text;not null"`
	Highlight bool `json:"highlight" gorm:"default:false"`
	UserID	uuid.UUID
	User User `gorm:"foreignkey:UserID"`
	CategoryID uint
	Category Category `gorm:"foreignkey:CategoryID"`
	CreateAt time.Time `json:"create_at" gorm:"not null"`
	UpdateAt time.Time `json:"update_at" gorm:"not null"`
}

type PostResponse struct {
	ID uint `json:"id"`
	Title     string    `json:"title"`
	Content string `json:"content"`
	Highlight bool `json:"highlight"`
	UserID uuid.UUID `json:"user_id" `
	CategotyID uint `json:"category_id" `
	CreateAt time.Time `json:"create_at"`
	UpdateAt time.Time `json:"update_at"`
}

type PostInput struct {
	Title     string    `json:"title" binding:"required"`
	Content string `json:"content" binding:"required"`
	Highlight bool `json:"highlight" binding:"required"`
	UserID uuid.UUID `json:"user_id" binding:"required"`
	CategotyID uint `json:"category_id" binding:"required"`
}

type PostEdit struct {
	Title     string    `json:"title" binding:"required"`
	Content string `json:"content" binding:"required"`
	Highlight bool `json:"highlight" binding:"required"`
	CategotyID uint `json:"category_id" binding:"required"`
}
