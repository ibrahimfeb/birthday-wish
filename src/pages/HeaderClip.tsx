import videoBG from "../assets/clips/BirthdayWish.mp4";
import heroSection from "../assets/clips/1-Herosection.mp4";
const HeaderClip = () => {
  return (
    <div className="videoBG">
      <video src={heroSection} autoPlay loop muted />
    </div>
  );
};

export default HeaderClip;
