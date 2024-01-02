import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

const iconSize = "h-7 w-7 md:h-8 md:w-9";
export const socialLinks = [
  {
    name: "DEV",
    href: siteConfig.links.devto,
    icon: <Icons.devto className={iconSize} />,
  },
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: <Icons.gitHub className={iconSize} />,
  },
  {
    name: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: <Icons.linkedIn className={iconSize} />,
  },
];

export function SocialLinks() {
  return (
    <div className="flex justify-end gap-4 md:mr-10 md:gap-10">
      {socialLinks.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className="transition-colors hover:text-light-green"
          aria-label={"Link to " + item.name}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
