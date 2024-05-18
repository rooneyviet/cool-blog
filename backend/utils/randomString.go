package utils

import (
	"crypto/rand"
	"encoding/hex"
	"strconv"
)

func RandomString(n int) (string, error) {
	bytes := make([]byte, n)
	_, err := rand.Read(bytes)
	if err != nil {
		return "", err
	}
	return hex.EncodeToString(bytes), nil
}

func ConvertToInt(s string) int {
	i := 1
	if n, err := strconv.Atoi(s); err == nil {
		i = n
	}
	return i
}
