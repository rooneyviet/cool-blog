"use client";

import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useLogin from "@/lib/hooks/useLogin";
import { useEffect } from "react";

interface LoginFormProps {
  onLoginSuccess: () => void;
}

export function LoginForm({ onLoginSuccess }: LoginFormProps) {
  const {
    login,
    register,
    handleSubmit,
    errors,
    isPending,
    isLoginFailed,
    isLoginSuccess,
  } = useLogin();

  useEffect(() => {
    if (isLoginSuccess) {
      onLoginSuccess();
    }
  }, [isLoginSuccess]);

  return (
    <div className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(login)}>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Enter your username"
              {...register("username")}
              required
            />
            {errors.username && (
              <p className="py-1 px-2 text-xs text-red-500">
                {errors.username.message as string}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              required
            />
            {errors.password && (
              <p className="py-1 px-2 text-xs text-red-500">
                {errors.password.message as string}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? "Logging in..." : "Sign in"}
          </Button>
        </CardFooter>
        {isLoginFailed && (
          <p className="text-center text-xs text-red-500">
            Login failed. Please try again later.
          </p>
        )}
      </form>
    </div>
  );
}
