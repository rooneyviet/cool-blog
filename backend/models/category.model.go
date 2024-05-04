package models

import "time"

type Category struct {
	ID       uint      `gorm:"primaryKey;autoIncrement"`
	Name 			string    `gorm:"type:varchar(50);not null;unique"`
	CreateAt time.Time `gorm:"not null"`
	UpdateAt time.Time `gorm:"not null"`
}

type CategoriesResponse struct{
	ID uint `json:"id"`
	Name string `json:"name"`
}

type PostCategoryRequest struct {
	Name string `json:"name" binding:"required"`
}
