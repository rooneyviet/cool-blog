package middleware

import (
	"coolblog/env"
	"errors"
	"fmt"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt"
)

var secretKey = []byte("kDxPZFyS0u")

func GenerateJWT(username string) (string, error) {
	config, _ := env.LoadEnv(".")
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)

	claims["authorized"] = true
	claims["username"] = username
	claims["expired"] = time.Now().Add(config.TokenExpired).Unix()

	tokenString, err := token.SignedString([]byte(config.TokenKey))
	if err != nil {
		fmt.Printf("Cannot generate jwt: %s", err.Error())
		return "", err
	}
	return tokenString, err
}

func ValidateToken(w http.ResponseWriter, req *http.Request) (string, error) {
	if req.Header["Token"] == nil {
		fmt.Fprintf(w, "can not find token in header")
		return "", errors.New("can not find token in header")
	}

	token, err := jwt.Parse(req.Header.Get("Token"), func(t *jwt.Token) (interface{}, error) {
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return "", errors.New("there was an error in parsing")
		}
		return secretKey, nil
	})

	if err != nil {
		return "", errors.New("can not parse header")
	}

	if token == nil {
		fmt.Fprintf(w, "invalid token")
		return "", errors.New("token error")
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		fmt.Fprintf(w, "couldn't parse claims")
		return "", errors.New("token error")
	}

	expired := claims["expired"].(float64)
	if int64(expired) < time.Now().Local().Unix() {
		fmt.Fprintf(w, "token expired")
		return "", errors.New("token error")
	}
	return "authorized", nil
}
