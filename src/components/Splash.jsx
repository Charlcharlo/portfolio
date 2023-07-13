import CVLink from "./splash/CVLink";
import ImageWindow from "./splash/ImageWindow";
import MediaLinks from "./splash/MediaLinks";
import SplashLinks from "./splash/SplashLinks";

export default function Splash() {
  return (
    <div className="full-page col-start" id="splash">
      <MediaLinks />
      <ImageWindow />
      <SplashLinks />
      <CVLink />
    </div>
  );
}
