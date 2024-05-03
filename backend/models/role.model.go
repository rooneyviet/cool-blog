package models

import (
	"time"
)

type Role struct {
	ID       uint `gorm:"primaryKey;autoIncrement"`
	RoleName string    `gorm:"type:varchar(50);not null"`
	CreateAt time.Time `gorm:"not null"`
	UpdateAt time.Time `gorm:"not null"`
}
