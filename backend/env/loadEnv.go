package env

import (
	"fmt"
	"os"
	"time"

	"github.com/spf13/viper"
)

type Config struct {
	DBHost     string `mapstructure:"POSTGRES_HOST"`
	DBUser     string `mapstructure:"POSTGRES_USER"`
	DBPASSWORD string `mapstructure:"POSTGRES_PASSWORD"`
	DBName     string `mapstructure:"POSTGRES_DB"`
	DBPort     string `mapstructure:"POSTGRES_PORT"`

	ServerPort   string `mapstructure:"PORT"`
	ClientOrigin string `mapstructure:"CLIENT_ORGIN"`

	TokenKey     string `mapstructure:"TOKEN_KEY"`
	TokenExpired time.Duration `mapstructure:"TOKEN_EXPIRED"`
}

func LoadEnv(path string) (config Config, err error) {
	viper.AddConfigPath(path)
	viper.SetConfigType("env")
	// viper.SetConfigName(".env.local")

	env := os.Getenv("GO_ENV")
	fmt.Println(env)
	switch env {
	case "development":
		viper.SetConfigFile(".env.dev")
	case "local":
		viper.SetConfigFile(".env.local")
	default:
		viper.SetConfigFile(".env.local")
	}

	// viper.AutomaticEnv()

	err = viper.ReadInConfig()
	if err != nil {
		return
	}

	err = viper.Unmarshal(&config)
	fmt.Print(config.DBHost)
	return
}
