import React from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ArticleProps {
  image: string;
  title: string;
  description: string;
  date: string;
}

const Article = ({ image, title, description, date }: ArticleProps) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      <Image
        src={image}
        alt="Profile"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-48 object-cover"
      />
      {/* <img src={image} alt={title} className="w-full h-48 object-cover" /> */}
      <div className="p-4">
        <h2 className="text-xl text-gray-600 dark:text-white font-bold mb-2">
          {title}
        </h2>
        <div className="flex items-center mb-4 gap-2">
          <Avatar className="size-[30px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-sm text-center text-gray-500 dark:text-gray-200">
            <span>By </span>
            <span className="text-red-700 text-base font-bold">
              Adriana Martins
            </span>
            <span className="text-gray-500"> ~ </span> October 21, 2023
          </p>
        </div>
        <p className="text-gray-600 dark:text-gray-200 text-sm">
          {description}
        </p>
        <p className="text-gray-500 dark:text-gray-200 text-sm">{date}</p>
      </div>
    </div>
  );
};

export default Article;
