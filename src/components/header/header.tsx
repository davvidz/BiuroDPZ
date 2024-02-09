import "./header.scss";
import { Navigation } from "./navigation/navigation";
import { TopBar } from "./top-bar/top-bar";
import { Logo } from "./logo/logo";
import { Contact } from "./contact/contact";
import { LanguageSwitcher } from "./language_switcher/language-switcher";

export const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navigation />
      <Contact />
      <LanguageSwitcher />
    </div>
  );
};
