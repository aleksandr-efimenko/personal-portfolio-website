import { cn } from "@/utils/utils";

export type StyledButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function StyledButton({
  children,
  className,
  ...props
}: StyledButtonProps) {
  return (
    <button
      className="w-fit text-base tracking-widest text-foreground md:text-body lg:text-xl"
      {...props}
    >
      <span
        className={cn(
          className,
          "border-b-2 border-light-green uppercase transition-all duration-200 hover:border-b-4 hover:text-light-green          "
        )}
      >
        {children}
      </span>
    </button>
  );
}
