import "./header.scss";
import { Navigation } from "./navigation/navigation";

import { Logo } from "./logo/logo";
import { Contact } from "./contact/contact";

export const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navigation />
      <Contact />
    </div>
  );
};
