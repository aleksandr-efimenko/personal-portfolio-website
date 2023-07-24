import { Logo } from "./logo";
import { SocialLinks } from "./social-links";
import { ModeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="container relative z-10 flex w-full items-center justify-between py-5 md:py-10">
      <div className="flex items-center justify-center gap-5">
        <Logo />
        <ModeToggle />
      </div>
      <SocialLinks />
    </header>
  );
}
