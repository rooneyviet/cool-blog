"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

const FormSchema = z.object({
  categories: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  title: z.string().min(1, {
    message: "Title must be at least 1 character.",
  }),
});

const categories = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const;

const NewPostPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      categories: ["recents", "home"],
      title: "",
    },
  });

  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "Welcome to this demo!",
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "You can now toggle ",
            styles: {},
          },
          {
            type: "text",
            text: "blue",
            styles: { textColor: "blue", backgroundColor: "blue" },
          },
          {
            type: "text",
            text: " and ",
            styles: {},
          },
          {
            type: "text",
            text: "code",
            styles: { code: true },
          },
          {
            type: "text",
            text: " styles with new buttons in the Formatting Toolbar",
            styles: {},
          },
        ],
      },
      {
        type: "paragraph",
        content: "Select some text to try them out",
      },
      {
        type: "paragraph",
      },
    ],
  });
  const { theme } = useTheme();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:", {
      description: `${JSON.stringify(data, null, 2)}`,
    });
  }
  return (
    // <div className="flex w-full space-x-4 overflow-hidden ">
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full space-x-4 overflow-hidden "
      >
        <div className="flex-grow overflow-hidden">
          <div className="flex flex-col space-y-4 overflow-hidden w-full">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="px-1">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="rounded-lg border-2 border-gray-300  h-[600px]">
              <div className="px-5 py-5">
                <BlockNoteView
                  editor={editor}
                  editable={true}
                  sideMenu={true}
                  formattingToolbar={true}
                  theme={theme === "dark" ? "dark" : "light"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-96 flex-shrink-0 lg:w-80">
          <aside className="h-screen p-4">
            <div className="relative hidden flex-col items-start gap-8 md:flex">
              <div className="grid w-full items-start gap-6">
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Publish
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="status">Status</Label>
                    <Select defaultValue="draft">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="publish">Publish</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-3">
                    <Button type="submit" className="w-full">
                      Update
                    </Button>
                  </div>
                </fieldset>

                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Categories
                  </legend>
                  <div className="grid gap-3">
                    <FormField
                      control={form.control}
                      name="categories"
                      render={() => (
                        <ScrollArea className="h-[300px] rounded-md border p-4">
                          <FormItem>
                            {categories.map((item) => (
                              <FormField
                                key={item.id}
                                control={form.control}
                                name="categories"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={item.id}
                                      className="flex flex-row items-start space-x-3 space-y-0"
                                    >
                                      <FormControl>
                                        <Checkbox
                                          checked={field.value?.includes(
                                            item.id
                                          )}
                                          onCheckedChange={(checked) => {
                                            return checked
                                              ? field.onChange([
                                                  ...field.value,
                                                  item.id,
                                                ])
                                              : field.onChange(
                                                  field.value?.filter(
                                                    (value) => value !== item.id
                                                  )
                                                );
                                          }}
                                        />
                                      </FormControl>
                                      <FormLabel className="text-sm font-normal">
                                        {item.label}
                                      </FormLabel>
                                    </FormItem>
                                  );
                                }}
                              />
                            ))}
                            <FormMessage />
                          </FormItem>
                        </ScrollArea>
                      )}
                    />
                  </div>
                </fieldset>
              </div>
            </div>
          </aside>
        </div>
      </form>
    </Form>
    // </div>
  );
};

export default NewPostPage;
