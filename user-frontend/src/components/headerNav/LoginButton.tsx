import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { KeyRoundIcon } from "lucide-react";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogClose,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { LoginForm } from "../Login";

const LoginButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <LoginForm />
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  //   return (
  //     <Button asChild size="sm" className="gap-1">
  //       <Link href="#">
  //         Login
  //         <KeyRoundIcon className="h-4 w-4" />
  //       </Link>
  //     </Button>
  //   );
};

export default LoginButton;
