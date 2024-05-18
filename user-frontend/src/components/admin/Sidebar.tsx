"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";
import { SideBarParentItemType } from "@/lib/types/SideBarItemType";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [defaultItems, setDefaultItems] = useState<string[]>([]);

  useEffect(() => {
    const newDefaultItems = new Set(defaultItems);

    if (pathname.startsWith("/admin/posts")) {
      newDefaultItems.add("item-1");
    }

    if (pathname.startsWith("/admin/users")) {
      newDefaultItems.add("item-2");
    }
    if (pathname.startsWith("/admin/categories")) {
      newDefaultItems.add("item-3");
    }

    setDefaultItems(Array.from(newDefaultItems));
  }, [pathname]);

  const listItems: SideBarParentItemType[] = [
    {
      id: "item-1",
      name: "Users",
      children: [
        {
          hrefURL: "/admin/users",
          name: "Users",
          icon: "",
          isActive: false,
        },
        {
          hrefURL: "/admin/users/new",
          name: "New User",
          icon: "",
          isActive: false,
        },
      ],
    },
    {
      id: "item-2",
      name: "Posts",
      children: [
        {
          hrefURL: "/admin/posts",
          name: "Posts",
          icon: "",
          isActive: false,
        },
        {
          hrefURL: "/admin/posts/new",
          name: "New Post",
          icon: "",
          isActive: false,
        },
      ],
    },
    {
      id: "item-3",
      name: "Categories",
      children: [
        {
          hrefURL: "/admin/categories",
          name: "Categories",
          icon: "",
          isActive: false,
        },
        {
          hrefURL: "/admin/categories/new",
          name: "New Category",
          icon: "",
          isActive: false,
        },
      ],
    },
  ];

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Accordion
              type="multiple"
              defaultValue={defaultItems}
              //value={["item-1"]}
            >
              <Link href="/admin">
                <div className="font-medium hover:underline">Admin</div>
              </Link>
              {listItems.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.name}</AccordionTrigger>
                  <AccordionContent>
                    {item.children.map((child) => (
                      <Link key={child.hrefURL} href={child.hrefURL}>
                        <Button
                          variant={`${pathname === child.hrefURL ? "secondary" : "ghost"}`}
                          className="w-full justify-start"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-4 w-4"
                          >
                            <rect width="7" height="7" x="3" y="3" rx="1" />
                            <rect width="7" height="7" x="14" y="3" rx="1" />
                            <rect width="7" height="7" x="14" y="14" rx="1" />
                            <rect width="7" height="7" x="3" y="14" rx="1" />
                          </svg>
                          {child.name}
                        </Button>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
