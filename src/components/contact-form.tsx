import Link from "next/link";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be less than 50 characters long"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters long")
    .max(50, "Email must be less than 50 characters long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message must be less than 500 characters long"),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  type ProfileFormValues = z.infer<typeof formSchema>;
  function onSubmit(data: ProfileFormValues) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="group relative z-0 mb-6 w-full">
              <FormControl>
                <Input
                  id="name"
                  placeholder=" "
                  className="peer appearance-none border-0 border-b-2
                   border-gray-600 bg-transparent text-gray-900
                    focus:border-light-green focus:outline-none focus:ring-0
                     dark:border-white dark:text-white dark:focus:border-light-green"
                  {...field}
                />
              </FormControl>
              <FormLabel
                htmlFor="name"
                className="absolute top-3 -z-10 origin-[0]
                 -translate-y-6 scale-75 transform text-sm uppercase
                  text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 
                  peer-placeholder-shown:scale-100 peer-focus:left-0 
                  peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:font-medium
                   peer-focus:text-light-green dark:text-gray-400
                    peer-focus:dark:text-light-green"
              >
                name
              </FormLabel>

              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />

        <Button type="submit">Send message</Button>
      </form>
    </Form>
  );
}
