import React from "react";
import LoginButton from "./LoginButton";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, Package2, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";
import { DarkThemeButton } from "../DarkThemeButton";

const NavHeader = () => {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Cool Blog</span>
        </Link>
        <Link
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Home
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Home</span>
            </Link>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground"
            >
              Home
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="ml-auto flex items-center gap-4">
        <form className="">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search posts..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <DarkThemeButton />
        <LoginButton />
      </div>
    </header>
  );
};

export default NavHeader;
