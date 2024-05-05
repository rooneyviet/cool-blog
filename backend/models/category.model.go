package models

import "time"

type Category struct {
	ID       uint      `json:"id" gorm:"primaryKey;autoIncrement"`
	Name     string    `json:"name" gorm:"type:varchar(50);not null;unique"`
	CreateAt time.Time `json:"create_at" gorm:"not null"`
	UpdateAt time.Time `json:"update_at" gorm:"not null"`
}

type CategoriesResponse struct{
	ID uint `json:"id"`
	Name string `json:"name"`
}

type PostCategoryRequest struct {
	Name string `json:"name" binding:"required"`
}
