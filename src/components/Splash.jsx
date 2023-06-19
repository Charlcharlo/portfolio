import ImageWindow from "./splash/ImageWindow";
import SplashLinks from "./splash/SplashLinks";

export default function Splash() {
  return (
    <div className="full-page col-start">
      <ImageWindow />
      <SplashLinks />
    </div>
  );
}
