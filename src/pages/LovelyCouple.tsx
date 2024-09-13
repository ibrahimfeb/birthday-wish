import {
  eight8,
  five5,
  Gurdwara,
  one1,
  Restuarent,
  seven7,
  shapeOne,
  shapeTwo,
  six6,
  ten10,
  three3,
} from "../assets";
import lastclip from "../assets/clips/lastclip.mp4";
import wishSong from "../assets/clips/wishSong.mp4";
import { useEffect, useRef } from "react";

const LovelyCouple = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    const playVideo = async () => {
      if (video) {
        try {
          video.muted = true; // Mute initially
          await video.play();
          video.muted = false; // Unmute after playing
          console.log("Video playback started successfully");
        } catch (error) {
          console.error("Video playback failed:", error);
        }
      }
    };

    playVideo();
  }, []);
  return (
    <>
      <section
        id="gallery"
        className="gallery_area pt-0"
        style={{ height: "1vh", opacity: 0 }}
      >
        <div className="container">
          <div className="text-center">
            <div className="w-full flex justify-center">
              <video ref={videoRef} src={wishSong} autoPlay loop />
            </div>
          </div>
        </div>
      </section>

      <section
        id="coming_soon"
        className="coming_soon_area py-16 "
        style={{ backgroundColor: "transparent" }}
      >
        <div className="coming_soon_shape_1">
          <img src={shapeOne} alt="shape" />
        </div>

        <div className="container items-center  ">
          <div className="text-center">
            <h1 className="pb-[5px]">Happy Birthday!</h1>
            <p
              style={{
                color: "#D57282",
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              On This Special Day, I Want To Take a Moment To Express Just How
              much you mean to me. Happy birthday to the love of my life, my
              partner, my confidante, and my best friend! Each year, as we
              celebrate your birthday, I am reminded of how fortunate I am to
              have you by my side. You are not just my wife; you are the light
              of my life, the reason behind my smile, and the source of my
              happiness.
            </p>
          </div>
        </div>

        <div className="coming_soon_shape_2">
          <img src={shapeTwo} alt="shape" className="mt-[70px]" />
        </div>
      </section>

      <section id="our_love" className="our_love_area pt-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-30 flex flex-col items-center justify-center">
                <h3 className="title">Our Love Story</h3>
              </div>
            </div>
          </div>
          <div className="love_wrapper">
            <div className="single_love d-flex flex-wrap align-items-center">
              <div
                className="love_content order-md-last wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <h3
                  className="love_title"
                  style={{ textTransform: "capitalize" }}
                >
                  From the moment we met
                </h3>
                <p style={{ textTransform: "capitalize" }}>
                  I knew there was something extraordinary about you. Your
                  kindness, warmth, and beauty captivated me instantly. You have
                  a way of making every day brighter and every moment more
                  meaningful. Your laughter is like music to my ears, and your
                  smile has the power to lift my spirits even on the toughest
                  days. You have an incredible ability to turn ordinary moments
                  into extraordinary memories, and I cherish every single one of
                  them
                </p>
              </div>
              <div className="love_date">
                <p></p>
                {/* <p>
                  <i className="lni lni-heart-filled"></i> 7 May 21
                </p> */}
              </div>
              <div
                className="love_image order-md-first wow fadeInRightBig border-2 border-[#c43451] p-3 rounded-[10px]"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img src={one1} alt="love" />
              </div>
            </div>

            <div className="single_love d-flex flex-wrap align-items-center">
              <div
                className="love_content text-lg-right wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <h3
                  className="love_title"
                  style={{ textTransform: "capitalize" }}
                >
                  I am grateful for the love and support
                </h3>
                <p style={{ textTransform: "capitalize" }}>
                  You have been my rock during difficult times, always
                  encouraging me to pursue my dreams and reminding me of my
                  worth. Your belief in me has given me the courage to chase my
                  goals and strive for greatness. I want you to know that I will
                  always be here for you, just as you have been there for me.
                  Together, we can conquer anything that comes our way.
                </p>
              </div>
              <div className="love_date">
                <p></p>
                {/* <p>
                  <i className="lni lni-heart-filled"></i> 15 Jan 22
                </p> */}
              </div>
              <div
                className="love_image wow fadeInLeftBig border-2 border-[#c43451] p-3 rounded-[10px]"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img src={three3} alt="love" />
              </div>
            </div>

            <div className="single_love d-flex flex-wrap align-items-center">
              <div
                className="love_content order-md-last wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <h3
                  className="love_title"
                  style={{ textTransform: "capitalize" }}
                >
                  As we celebrate your birthday today
                </h3>
                <p style={{ textTransform: "capitalize" }}>
                  I want you to know how deeply I admire you. You are a
                  remarkable woman with so many talents and qualities that
                  inspire me every day. Your strength and resilience in the face
                  of challenges are nothing short of awe-inspiring. You handle
                  every situation with grace and poise, and I am constantly
                  amazed by your ability to find joy in the little things. You
                  teach me to appreciate life and to embrace every moment with
                  an open heart.
                </p>
              </div>
              <div className="love_date">
                <p></p>
              </div>
              <div
                className="love_image order-md-first wow fadeInRightBig border-2 border-[#c43451] p-3 rounded-[10px]"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img src={ten10} alt="love" />
              </div>
            </div>

            <div className="single_love d-flex flex-wrap align-items-center">
              <div
                className="love_content text-lg-right wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <h3
                  className="love_title"
                  style={{ textTransform: "capitalize" }}
                >
                  As we celebrate you today
                </h3>
                <p style={{ textTransform: "capitalize" }}>
                  let’s also take a moment to reflect on the beautiful journey
                  we have shared together. The memories we have created, the
                  challenges we have overcome, and the love that has blossomed
                  between us are treasures that I hold dear. I look forward to
                  making many more memories with you in the years to come.
                </p>
              </div>
              <div className="love_date">
                <p></p>
                {/* <p>
                  <i className="lni lni-heart-filled"></i> 15 Jan 22
                </p> */}
              </div>
              <div
                className="love_image wow fadeInLeftBig border-2 border-[#c43451] p-3 rounded-[10px]"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img src={eight8} alt="love" />
              </div>
            </div>

            <div className="single_love d-flex flex-wrap align-items-center">
              <div
                className="love_content order-md-last wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <h3
                  className="love_title"
                  style={{ textTransform: "capitalize" }}
                >
                  Thank you for being you
                </h3>
                <p style={{ textTransform: "capitalize" }}>
                  for being the incredible woman that you are. Thank you for
                  your love, your patience, and your unwavering support. I am so
                  proud to call you my wife, and I promise to cherish you every
                  day of my life.
                </p>
              </div>
              <div className="love_date">
                <p></p>
              </div>
              <div
                className="love_image order-md-first wow fadeInRightBig border-2 border-[#c43451] p-3 rounded-[10px]"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img src={seven7} alt="love" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery_area pt-0">
        <div className="container">
          <div className="text-center">
            <h1 className="pb-[5px]"></h1>
          </div>
        </div>
      </section>

      <section
        id="coming_soon"
        className="coming_soon_area py-16 "
        style={{ backgroundColor: "transparent" }}
      >
        {/* <div className="coming_soon_shape_1">
          <img src={shapeOne} alt="shape" />
        </div> */}

        <div className="container items-center  ">
          <div className="text-center">
            <h1 className="pb-[5px]">Once Again</h1>
            <p
              style={{
                color: "#D57282",
                textAlign: "center",
                textTransform: "capitalize",
              }}
            >
              Happy Birthday, My Love! Here’s To You, May This Year Be Your Best
              One Yet! With All My Love,
            </p>
          </div>
        </div>

        {/* <div className="coming_soon_shape_2">
          <img src={shapeTwo} alt="shape" className="mt-[70px]" />
        </div> */}
      </section>

      <section id="event" className="event_area pt-10 pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-30 flex flex-col items-center justify-center">
                <h3 className="title" style={{ textTransform: "capitalize" }}>
                  Some Words for your beauty
                </h3>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-7">
              <div
                className="single_event mt-30 wow fadeIn"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <div className="event_image">
                  <img src={six6} alt="event" style={{}} />
                </div>
                <div className="event_content ">
                  {/* <span className="date">14 October</span> */}
                  {/* <h3 className="event_title">
                    <p>We will go gurdware at 09:00 AM</p>
                  </h3> */}
                  <p
                    className="font-[800]"
                    style={{ textTransform: "capitalize" }}
                  >
                    Pehli Saal ki Khushiyan
                  </p>
                  <p style={{ textTransform: "capitalize" }}>
                    Mohabbat Ke Bagiche Mein, Ek Phool Khilta Naya, Aaj Hum
                    Manate Hain, Tumhari Khushiyon Ka Jashn Naya. Tumhara Pehla
                    Birthday, Meri Jaan, Ek Pal Hai Pyaara, Har Hansi Aur
                    Muskurahat, Tumhara Roshni Ka Sahara.
                  </p>
                  <p style={{ textTransform: "capitalize" }}>
                    Subah Se Shaam Tak, Khushiyon Se Bhara Rahe Din, Har Ek
                    Khwahish Par Ho, Tumhare Liye Khuda Ka Ashirwad. Tumhare
                    Cake Par Har Ek Candle, Ek Sapna Hai Jo Udan Bharne Ko
                    Tayaar, Is Khoobsurat Safar Mein, Main Tumse Aur Pyaar
                    Karunga Baar Baar.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div
                className="single_event mt-30 wow fadeIn"
                data-wow-duration="1.3s"
                data-wow-delay="0.5s"
              >
                <div className="event_image">
                  <img src={five5} alt="event" />
                </div>
                <div className="event_content">
                  {/* <span className="date">14 October</span>
                  <h3 className="event_title">
                    <p>We will go for lunch 03:00 PM</p>
                  </h3> */}
                  <p className="font-[800]">Hamesha Tumhara</p>
                  <p style={{ textTransform: "capitalize" }} className="pb-[90px]">
                    Tumhari Khoobsurti Ek Ehsaas Hai, Jo Har Pal Nayi Chamak Ke
                    Saath Roshni Karti Hai. Tumhare Lambe Baalon Ki Lehraahat
                    Jaise Hawaaon Mein Khilta Ek Phool, Aur Tumhari Aankhon Ki
                    Gehraayi Mein Ek Puri Kahani Chupi Hai. Tumhari Saadi
                    Khoobsurti Mein Ek Shaan Hai Jo Har Pal Dil Ko Apni Taraf
                    Kheench Leti Hai. Jo Nazar Tumpar Tik Jaaye, Woh Bas Kho
                    Jaati Hai Tumhari Hansi Ki NarmiMe
                  </p>
                  {/* <p
                    className="pb-[0px] "
                    style={{ textTransform: "capitalize" }}
                  >
                    Tumhari Muskurahat Jaise Phoolon Par Se Boondein Tapakti
                    Hain, Ek Narmi, Ek Sukoon Jo Sirf Tumhari Haazri Mein
                    Mehsoos Hoti Hai. Tumhara Wajood Meri Zindagi Ko Ek Naya
                    Rang De Deta Hai, Jahan Tumhara Har Lafz, Tumhari Har
                    Muskaan Mere Liye Ik Naya Din Hai.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery_area pt-80">
        <div className="container">
          <div className="text-center">
            {/* <p className="text-[#D57282] mb-[20px]">
              Wishing you a lifetime of happiness and joy. I'm so grateful to
              have you in my life.
            </p> */}

            {/* NEW SECTION */}
            <section id="event" className="event_area pt-0 pb-0">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="section_title text-center pb-30 flex flex-col items-center justify-center">
                      <h3 className="title">Our Plans</h3>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-7">
                    <div
                      className="single_event mt-30 wow fadeIn"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.2s"
                    >
                      <div className="our_plans">
                        <img
                          src={Gurdwara}
                          alt="event"
                          style={{}}
                          className="w-[50vw] h-[50vh]"
                        />
                      </div>
                      <div className="event_content ">
                        {/* <span className="date">14 October</span> */}
                        {/* <h3 className="event_title">
                    <p>We will go gurdware at 09:00 AM</p>
                  </h3> */}
                        <p className="font-[800]">Gurdwara</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-7">
                    <div
                      className="single_event mt-30 wow fadeIn"
                      data-wow-duration="1.3s"
                      data-wow-delay="0.5s"
                    >
                      <div className="our_plans">
                        <img
                          src={Restuarent}
                          alt="event"
                          className="w-[50vw] h-[50vh]"
                        />
                      </div>
                      <div className="event_content">
                        {/* <span className="date">14 October</span>
                  <h3 className="event_title">
                    <p>We will go for lunch 03:00 PM</p>
                  </h3> */}
                        <p className="font-[800]">Restaurent</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* NEW SECTION */}
            <div className="w-full aspect-ratio-16:9 mt-[20px]">
              <iframe
                src={lastclip}
                title="Video Clip"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_area mt-80">
        <div className="footer_shape_1">
          <img src={shapeOne} alt="shape" />
        </div>

        <div className="container">
          <div className="footer_widget pt-80 pb-80 text-center">
            <div className="footer_title">
              <h3 className="title" style={{ color: "#c43451" }}>
                Vinendar ❤️ Sarika
              </h3>
            </div>
            <ul className="footer_menu">
              <li>Love</li>
              <li>Joy</li>
              <li>Happiness</li>
              <li>❤️</li>
            </ul>
          </div>
          <div className="footer_copyright text-center">
            <p>
              From Your Only One{" "}
              <p style={{ color: "#c43451", fontWeight: "700" }} rel="nofollow">
                Vinendar Kumar
              </p>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LovelyCouple;
