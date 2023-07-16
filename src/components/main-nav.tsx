import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/utils";
import { ModeToggle } from "./theme-toggle";

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
    <nav
      className=" flex flex-1 items-center justify-center gap-6
      text-base font-medium"
    >
      {navItems.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === item.href ? "text-foreground" : "text-foreground/60"
          )}
        >
          {item.name}
        </Link>
      ))}
      <ModeToggle />
    </nav>
  );
}
