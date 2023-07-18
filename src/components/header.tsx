import { MainNav } from "./main-nav";
import { Logo } from "./logo";
import { SocialLinks } from "./social-links";

export function Header() {
  return (
    <header className="container relative z-10 flex w-full items-center justify-between py-10">
      <div className="flex-1">
        <Logo />
      </div>
      <MainNav />
      <div className="flex-1">
        <SocialLinks />
      </div>
    </header>
  );
}
