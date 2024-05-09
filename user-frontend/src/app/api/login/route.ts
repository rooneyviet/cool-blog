import axios from "axios";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    console.log("username", username);
    console.log("password", password);
    const response = await axios.post("http://localhost:8010/api/user/login", {
      username: username,
      password: password,
    });

    console.log("edfgdg", JSON.stringify(response));

    if (!response.data) {
      return Response.json(
        { error: "An error occurred while logging in" },
        { status: 500 }
      );
      //throw new Error(`HTTP error ${res.status}`);
    }

    return Response.json(response.data);
  } catch (error) {
    console.error("Error in login API:", error);
    return Response.json(
      { error: "An error occurred while logging in" },
      { status: 500 }
    );
  }
}
