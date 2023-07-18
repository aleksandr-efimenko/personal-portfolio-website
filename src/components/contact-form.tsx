/* eslint-disable @typescript-eslint/no-misused-promises */
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { StyledButton } from "./ui/styled-button";
import { api } from "@/utils/api";
import { AnimatedSpinner } from "./animated-spinner";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be less than 50 characters long"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .min(5, "Email must be at least 5 characters long")
    .max(50, "Email must be less than 50 characters long"),
  message: z
    .string()
    .trim()
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
  const formSubmitMutation = api.email.sendEmail.useMutation();
  type ProfileFormValues = z.infer<typeof formSchema>;

  function onSubmit(data: ProfileFormValues) {
    formSubmitMutation.mutate({
      senderName: data.name,
      senderEmail: data.email,
      message: data.message,
    });
    console.log(data);
  }

  if (formSubmitMutation.isLoading) {
    return <AnimatedSpinner />;
  }

  if (form.formState.isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Thank you for your message! 👍
        </h1>
        <p className="text-center text-xl text-gray-900 dark:text-gray-100">
          I will get back to you soon.
        </p>
      </div>
    );
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
                  required={true}
                  id="name"
                  placeholder=" "
                  {...field}
                  className={`${
                    form.formState.errors.name ? "!border-red-600" : ""
                  }`}
                />
              </FormControl>
              <FormLabel
                htmlFor="name"
                className="absolute left-6 top-2 -z-10 origin-[0] -translate-y-8 
                scale-75 transform
                  text-sm uppercase text-dark-gray
                   duration-300 
                  peer-placeholder-shown:translate-y-0 
                  peer-placeholder-shown:scale-100 
                  peer-focus:-translate-y-10 
                  peer-focus:scale-75 
                  peer-focus:font-medium
                  dark:text-gray-400
                  peer-focus:dark:text-light-green"
              >
                Name
              </FormLabel>

              <FormMessage className="text-right text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="group relative z-0 mb-6 w-full">
              <FormControl>
                <Input
                  required={true}
                  id="email"
                  placeholder=" "
                  className={`${
                    form.formState.errors.email ? "!border-red-600" : ""
                  }`}
                  {...field}
                />
              </FormControl>
              <FormLabel
                htmlFor="email"
                className="absolute left-6 top-2 -z-10 origin-[0] -translate-y-8 
                scale-75 transform
                  text-sm uppercase text-dark-gray
                   duration-300 
                  peer-placeholder-shown:translate-y-0 
                  peer-placeholder-shown:scale-100 
                  peer-focus:-translate-y-10 
                  peer-focus:scale-75 
                  peer-focus:font-medium
                  dark:text-gray-400
                  peer-focus:dark:text-light-green"
              >
                Email
              </FormLabel>

              <FormMessage className="text-right text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="group relative z-0 mb-6 w-full">
              <FormControl>
                <Textarea
                  className={`${
                    form.formState.errors.message ? "!border-red-600" : ""
                  }`}
                  required={true}
                  id="message"
                  placeholder=" "
                  {...field}
                />
              </FormControl>
              <FormLabel
                htmlFor="message"
                className="absolute left-6 top-8 -z-10 origin-[0]
                 -translate-y-14 
                 scale-75 transform text-sm uppercase
                  text-dark-gray duration-300 
                  peer-placeholder-shown:translate-y-0 
                  peer-placeholder-shown:scale-100 
                  peer-focus:-translate-y-16 
                  peer-focus:scale-75 
                  peer-focus:font-medium
                  dark:text-gray-400
                  peer-focus:dark:text-light-green"
              >
                Message
              </FormLabel>

              <FormMessage className="text-right text-red-600" />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <StyledButton type="submit">Send message</StyledButton>
        </div>
      </form>
    </Form>
  );
}
