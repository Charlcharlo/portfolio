import DividerBottom from "./layout/DividerBottom";
import DividerTop from "./layout/DividerTop";
import ImageWindow from "./splash/ImageWindow";
import SplashLinks from "./splash/SplashLinks";

export default function Splash() {
  return (
    <div className="full-page col-start" id="splash">
      <DividerTop id="splash-top" />
      <ImageWindow />
      <SplashLinks />
      <DividerBottom id="splash-bottom" />
    </div>
  );
}
