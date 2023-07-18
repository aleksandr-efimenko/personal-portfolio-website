import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

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

export function SocialLinks() {
  return (
    <div className="mr-10 flex justify-end gap-10">
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
  );
}
