package middleware

import (
	"coolblog/env"
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
)

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

// func ValidateToken(w http.ResponseWriter, req *http.Request) (string, error) {
// 	if req.Header["Token"] == nil {
// 		fmt.Fprintf(w, "can not find token in header")
// 		return "", errors.New("can not find token in header")
// 	}

// 	token, err := jwt.Parse(req.Header.Get("Token"), func(t *jwt.Token) (interface{}, error) {
// 		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
// 			return "", errors.New("there was an error in parsing")
// 		}
// 		return secretKey, nil
// 	})

// 	if err != nil {
// 		return "", errors.New("can not parse header")
// 	}

// 	if token == nil {
// 		fmt.Fprintf(w, "invalid token")
// 		return "", errors.New("token error")
// 	}

// 	claims, ok := token.Claims.(jwt.MapClaims)
// 	if !ok {
// 		fmt.Fprintf(w, "couldn't parse claims")
// 		return "", errors.New("token error")
// 	}

// 	expired := claims["expired"].(float64)
// 	if int64(expired) < time.Now().Local().Unix() {
// 		fmt.Fprintf(w, "token expired")
// 		return "", errors.New("token error")
// 	}
// 	return "authorized", nil
// }

func ValidateToken(tokenString string) (*jwt.Token, error) {
	config, _ := env.LoadEnv(".")
	token, err := jwt.Parse(tokenString, func(t *jwt.Token) (interface{}, error) {
		if _, ok := t.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", t.Header["alg"])
		}
		return []byte(config.TokenKey), nil
	})

	if err != nil {
		return nil, err
	}

	claims, ok := token.Claims.(jwt.MapClaims)

	if !ok {
		return nil, err
	}

	expired := claims["expired"].(float64)
	if int64(expired) < time.Now().Local().Unix() {
		return nil, err
	}

	return token, nil
}

func AuthMiddleware(ctx *gin.Context) {
	isLogging, err := ctx.Cookie("logged_in")
	if err != nil || isLogging == "0" {
		ctx.JSON(http.StatusUnauthorized, gin.H{
			"result":  "fail",
			"message": "Unauthorized",
		})
		ctx.Abort()
		return
	}

	headerToken := ctx.GetHeader("Authorization")
	if headerToken == "" {
		ctx.JSON(http.StatusUnauthorized, gin.H{
			"result":  "fail",
			"message": "Unauthorized",
		})
		ctx.Abort()
		return
	}

	tokenCookie, err := ctx.Cookie("token")
	if err != nil || headerToken != tokenCookie {
		ctx.JSON(http.StatusUnauthorized, gin.H{
			"result":  "fail",
			"message": "Unauthorized",
		})
		ctx.Abort()
		return
	}

	_, err = ValidateToken(tokenCookie)
	if err != nil {
		ctx.JSON(http.StatusUnauthorized, gin.H{
			"result":  "fail",
			"message": "Token expired or invalid",
		})
		ctx.Abort()
		return
	}
	ctx.Next()
}
