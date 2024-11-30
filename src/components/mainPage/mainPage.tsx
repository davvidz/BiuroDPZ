import "./mainPage.scss";
import { Banner } from "./banner/banner";
import { Photo } from "./photo/photo";
import { Content } from "./content/content";

export function MainPage() {
  return (
    <div className="main">
      <Photo />
      <Banner />
      <Content />
    </div>
  );
}
