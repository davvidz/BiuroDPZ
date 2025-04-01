import "./Home.scss";
import { Banner } from "./components/Banner/Banner";
import { Image } from "./components/Image/Image";
import { Description } from "./components/Description/Description";

export default function Home() {
  return (
    <div className="main">
      <Image />
      <Banner />
      <Description />
    </div>
  );
}
