package models

import (
	"time"

	"github.com/google/uuid"
)

type Post struct {
	ID       uint      `json:"id" gorm:"primaryKey;autoIncrement"`
	Title     string    `json:"title" gorm:"type:varchar(100);not null"`
	ShortContent string `json:"short_content" gorm:"type:varchar(200);"`
	Content string `json:"content" gorm:"type:text;not null"`
	Highlight bool `json:"highlight" gorm:"default:false"`
	UserID	uuid.UUID `gorm:"not null"`
	User User `gorm:"foreignkey:UserID"`
	CategoryID uint `gorm:"not null"`
	Category Category `gorm:"foreignkey:CategoryID"`
	ImageID uint `gorm:"not null"`
	Image Image `gorm:"foreignkey:ImageID"`
	CreateAt time.Time `json:"create_at" gorm:"not null"`
	UpdateAt time.Time `json:"update_at" gorm:"not null"`
}

type PostResponse struct {
	ID uint `json:"id"`
	Title     string    `json:"title"`
	ShortContent string `json:"short_content"`
	Content string `json:"content"`
	Highlight bool `json:"highlight"`
	UserID uuid.UUID `json:"user_id"`
	CategotyID uint `json:"category_id"`
	ImageID uint `json:"image_id"`
	CreateAt time.Time `json:"create_at"`
	UpdateAt time.Time `json:"update_at"`
}

type PostInput struct {
	Title     string    `json:"title" binding:"required"`
	ShortContent string `json:"short_content"`
	Content string `json:"content" binding:"required"`
	Highlight bool `json:"highlight" binding:"required"`
	UserID uuid.UUID `json:"user_id" binding:"required"`
	CategotyID uint `json:"category_id" binding:"required"`
	ImageID uint `json:"image_id"`
}

type PostEdit struct {
	Title     string    `json:"title" binding:"required"`
	ShortContent string `json:"short_content"`
	Content string `json:"content" binding:"required"`
	Highlight bool `json:"highlight" binding:"required"`
	CategotyID uint `json:"category_id" binding:"required"`
	ImageID uint `json:"image_id"`
}
