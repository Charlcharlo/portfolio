import "../../styles/splash/SplashLinks.css";
import { splashLinks } from "../../data/links";
import SplashLink from "./SplashLink";

export default function SplashLinks() {
  function mapLink(link, i) {
    return <SplashLink key={i} data={link} index={i} />;
  }

  return (
    <div className="row-between section-buttons">
      {splashLinks.map(mapLink)}
    </div>
  );
}
