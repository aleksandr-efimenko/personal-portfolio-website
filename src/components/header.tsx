import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { MainNav } from "./main-nav";

export const socialLinks = [
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: <Icons.gitHub className="h-6 w-6" />,
  },
  {
    name: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: <Icons.linkedIn className="h-6 w-6" />,
  },
];

export function Header() {
  return (
    <header className="container relative z-10 flex w-full items-center justify-between py-10">
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
      <MainNav />
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
    </header>
  );
}
