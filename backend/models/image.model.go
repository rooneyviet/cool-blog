package models

import "time"

type Image struct {
	ID       uint      `json:"id" gorm:"primaryKey;autoIncrement"`
	URL     string    `json:"url" gorm:"type:varchar(200);not null;"`
	THUMBNAIL     string    `json:"thumbnail" gorm:"type:varchar(200);"`
	CreateAt time.Time `json:"create_at" gorm:"not null"`
	UpdateAt time.Time `json:"update_at" gorm:"not null"`
}
