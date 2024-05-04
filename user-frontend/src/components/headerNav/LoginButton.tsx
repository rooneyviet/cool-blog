import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { KeyRoundIcon } from "lucide-react";

const LoginButton = () => {
  return (
    <Button asChild size="sm" className="gap-1">
      <Link href="#">
        Login
        <KeyRoundIcon className="h-4 w-4" />
      </Link>
    </Button>
  );
};

export default LoginButton;
