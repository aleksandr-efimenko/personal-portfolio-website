import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

export const socialLinks = [
  {
    name: "GitHub",
    href: siteConfig.links.github,
    icon: <Icons.gitHub className="h-5 w-5 md:h-6 md:w-6" />,
  },
  {
    name: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: (
      <Icons.linkedIn
        fill="hsl(var(--foreground))"
        className="h-5 w-5 md:h-6 md:w-6"
      />
    ),
  },
];

export function SocialLinks() {
  return (
    <div className="flex justify-end gap-4 md:mr-10 md:gap-10">
      {socialLinks.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className=" transition-colors hover:text-light-green"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
