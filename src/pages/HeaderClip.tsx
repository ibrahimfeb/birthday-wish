import heroSection from "../assets/clips/1-Herosection.mp4";
import LovelyCouple from "./LovelyCouple";
const HeaderClip = () => {
  return (
    <div className="videoBG">
      <video src={heroSection} autoPlay loop muted />
      <LovelyCouple/>
    </div>
  );
};

export default HeaderClip;
