import videoBG from "../assets/clips/BirthdayWish.mp4";
const HeaderClip = () => {
  return (
    <div className="videoBG">
      <video src={videoBG} autoPlay loop muted />
    </div>
  );
};

export default HeaderClip;
