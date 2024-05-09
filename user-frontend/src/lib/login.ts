"use server";

import axios from "axios";

export default async function loginAction(
  username: string,
  password: string
): Promise<LoginResponse> {
  console.log("loginAction", process.env.API_HOST);
  const response = await axios.post<LoginResponse>(
    `${process.env.API_HOST}/user/login`,
    {
      username: username,
      password: password,
    }
  );

  console.log("loginAction", response.data);
  return response.data;
}
