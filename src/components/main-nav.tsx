import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/utils/utils";
import { Icons } from "@/components/icons";

const navItems = [
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About",
    href: "/about",
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="container relative flex w-full items-center justify-between">
      <Link href="/" className=" flex items-center space-x-2">
        <p className="whitespace-nowrap text-heading-m lowercase">
          {siteConfig.logo}
          <span className="text-light-green">.com</span>
        </p>
      </Link>
      <nav className="absolute inset-0 mx-auto flex w-fit items-center justify-center text-sm font-medium">
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <div className="flex space-x-6">
        <Link href={siteConfig.links.github}>
          <Icons.gitHub className="h-6 w-6" />
        </Link>
        <Link href={siteConfig.links.linkedin}>
          <Icons.linkedIn className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}
