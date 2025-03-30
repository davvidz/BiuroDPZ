import "./mainPage.scss";
import { Banner } from "./banner/banner";
import { Photo } from "./photo/photo";
import { Description } from "./description/Description";

export function MainPage() {
  return (
    <div className="main">
      <Photo />
      <Banner />
      <Description />
    </div>
  );
}
