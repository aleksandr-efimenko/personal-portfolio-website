import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Logo() {
  return (
    <div className="animate-charcter">
      <Link
        href="/"
        className="group w-fit whitespace-nowrap text-heading-m lowercase transition-colors hover:text-light-green "
      >
        {siteConfig.logo}
        <span className="text-light-green transition-colors group-hover:text-foreground">
          .com
        </span>
      </Link>
    </div>
  );
}
