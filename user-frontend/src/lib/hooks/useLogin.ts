import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import loginAction from "../login";
import useUserStore from "@/store/userStore";
import { useShallow } from "zustand/react/shallow";
import { toast } from "sonner";

const schema = z.object({
  username: z.string().min(1, { message: "*Please enter a username " }),
  password: z
    .string()
    .min(6, { message: "*Please enter a password more than 8 characters" }),
});

const useLogin = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [isPending, setIsPending] = useState(false);
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const { setAccessToken } = useUserStore((state) => ({
    accessToken: state.accessToken,
    setAccessToken: state.setAccessToken,
  }));

  const username = watch("username", "");
  const password = watch("password", "");

  const login = async () => {
    setIsPending(true);
    setIsLoginFailed(false);
    setIsLoginSuccess(false);

    try {
      const res = await loginAction(username, password);
      console.log(res);
      setAccessToken(res.token);
      setIsLoginSuccess(true);
      toast.success("Login Successful");
    } catch (error) {
      setIsLoginFailed(true);
    }
    setIsPending(false);
  };

  return {
    login,
    register,
    handleSubmit,
    isPending: isPending,
    errors,
    isLoginFailed: isLoginFailed,
    isLoginSuccess: isLoginSuccess,
  };
};

export default useLogin;
