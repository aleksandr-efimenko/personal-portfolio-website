import { siteConfig } from "@/config/site";
import Link from "next/link";
import { socialLinks } from "./header";

export function Footer() {
  return (
    <div className="bg-zinc-400  dark:bg-dark-gray">
      <footer className="container relative z-10 flex w-full items-center justify-between  py-10 ">
        <div className="flex-1">
          <Link href="/" className="w-fit ">
            <p className="group w-fit whitespace-nowrap text-heading-m lowercase transition-colors hover:text-light-green">
              {siteConfig.logo}
              <span className="text-light-green transition-colors group-hover:text-foreground">
                .com
              </span>
            </p>
          </Link>
        </div>

        <div className="mr-10 flex flex-1 justify-end gap-10">
          {socialLinks.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className="text-white transition-colors hover:text-light-green"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </footer>
    </div>
  );
}
