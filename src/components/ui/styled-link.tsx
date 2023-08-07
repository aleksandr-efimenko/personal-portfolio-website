import Link from "next/link";
import { cn } from "@/utils/utils";

export type StyledLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onNewTab?: boolean;
} & React.HTMLAttributes<HTMLAnchorElement>;

export function StyledLink({
  href,
  children,
  className,
  onNewTab = false,
  ...props
}: StyledLinkProps) {
  return (
    <Link
      {...(onNewTab && { target: "_blank", rel: "noopener noreferrer" })}
      href={href}
      className="w-fit text-base tracking-widest text-foreground md:text-body lg:text-xl"
      {...props}
    >
      <span
        className={cn(
          className,
          "border-b-2 border-light-green uppercase transition-all duration-200 hover:border-b-4 hover:text-light-green"
        )}
      >
        {children}
      </span>
    </Link>
  );
}
