import * as React from "react";

import { cn } from "@/utils/utils";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `peer block w-full appearance-none rounded-none border-0
           border-b-2 border-dark-gray bg-transparent
            px-6 py-2.5 text-dark-gray
          focus:border-light-green focus:outline-none focus:ring-0 
          dark:border-white dark:text-white dark:focus:border-light-green`,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
