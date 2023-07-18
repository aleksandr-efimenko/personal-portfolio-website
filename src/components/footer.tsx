import { Logo } from "./logo";
import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <div className="bg-zinc-400 dark:bg-dark-gray">
      <footer className="container relative z-10 flex w-full items-center justify-between py-10">
        <hr className="container absolute inset-0 border-foreground" />
        <div>
          <Logo />
        </div>

        <SocialLinks />
      </footer>
    </div>
  );
}
