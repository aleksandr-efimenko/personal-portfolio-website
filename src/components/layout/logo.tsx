import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Logo() {
  return (
    <div className="animate-character">
      <Link
        href="/"
        className="group w-fit whitespace-nowrap text-xl lowercase transition-colors hover:text-light-green md:text-heading-m "
      >
        {siteConfig.logo}
        <span className="text-light-green transition-colors group-hover:text-foreground">
          .com
        </span>
      </Link>
    </div>
  );
}
