import * as React from "react";

import { cn } from "@/utils/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          `peer block w-full appearance-none rounded-none border-0
          border-b-2 border-dark-gray bg-transparent
           px-6 py-2.5 text-dark-gray
         focus:border-light-green focus:outline-none focus:ring-0 
         dark:border-white  dark:text-white dark:focus:border-light-green`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
