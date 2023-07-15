import Link from "next/link";
import { cn } from "@/utils/utils";

export type StyledLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function StyledLink({
  href,
  children,
  className,
  ...props
}: StyledLinkProps) {
  return (
    <Link href={href} className="w-fit text-xl" {...props}>
      <span
        className={cn(
          className,
          "border-b-2 border-light-green uppercase transition-all duration-200 hover:border-b-4"
        )}
      >
        {children}
      </span>
    </Link>
  );
}
