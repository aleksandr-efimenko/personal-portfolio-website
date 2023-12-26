import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/utils";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav
      className="flex flex-1 items-center justify-start gap-6 text-base
      font-medium md:justify-center"
    >
      {navItems.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className={cn(
            "text-lg transition-colors hover:text-foreground/80",
            pathname === item.href ? "text-foreground" : "text-foreground/60"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
