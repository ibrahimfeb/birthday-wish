import {
  coupleShape,
  img1,
  loveOne,
  loveThree,
  loveTwo,
  mount2,
  section_shape,
  shapeOne,
  shapeTwo,
} from "../assets";

const LovelyCouple = () => {
  return (
    <>
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
            <p style={{ color: "#D57282", textAlign: "center" }}>
              On this special day, I want to take a moment to express just how
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

      <section id="couple" className="couple_area pt-[20px] pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-30 flex flex-col items-center justify-center">
                {/* <h3 className="title">Lovely Couple</h3> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div
                className="single_couple mt-10 wow fadeInUpBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.2s"
              >
                <div className="couple_image">
                  <img src={img1} alt="Couple" />
                </div>
                <div className="couple_content text-center">
                  <img className="shape" src={coupleShape} alt="shape" />
                  <h4 className="couple_name">Michael &nbsp; Smith</h4>
                  <p>
                    Hi I am Michael Smith, dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since &nbsp; the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries.
                  </p>
                  &nbsp;
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="single_couple mt-10 wow fadeInUpBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.6s"
              >
                <div className="couple_image">
                  <img src={mount2} alt="Couple" />
                </div>
                <div className="couple_content text-center">
                  <img className="shape" src={coupleShape} alt="shape" />
                  <h4 className="couple_name">Jessica &nbsp; Jones</h4>
                  <p>
                    Hi I am Jessica Jones, dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since &nbsp; the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries.
                  </p>
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
      <section id="coming_soon" className="coming_soon_area py-16 ">
        <div className="coming_soon_shape_1">
          <img src={shapeOne} alt="shape" />
        </div>

        <div className="container items-center  ">
          <div className="text-center">
            <h1 className="pb-[5px]">Happy Birthday!</h1>
            <p style={{ color: "#D57282" }}>
              Wishing you a day filled with joy, laughter, and love. May all
              your wishes come true. Happy Birthday!
            </p>
          </div>
        </div>

        <div className="coming_soon_shape_2">
          <img src={shapeTwo} alt="shape" />
        </div>
      </section> */}

      <section id="our_love" className="our_love_area pt-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-30 flex flex-col items-center justify-center">
                <h3 className="title">Our Love Story</h3>
                {/* <img src={section_shape} alt="Shape" className="self-center" /> */}
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
                <h3 className="love_title">From the moment we met</h3>
                <p>
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
                className="love_image order-md-first wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img src={loveOne} alt="love" />
              </div>
            </div>

            <div className="single_love d-flex flex-wrap align-items-center">
              <div
                className="love_content text-lg-right wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <h3 className="love_title">
                  I am grateful for the love and support
                </h3>
                <p>
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
                className="love_image wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img src={loveTwo} alt="love" />
              </div>
            </div>

            <div className="single_love d-flex flex-wrap align-items-center">
              <div
                className="love_content order-md-last wow fadeInLeftBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <h3 className="love_title">
                  As we celebrate your birthday today
                </h3>
                <p>
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
                className="love_image order-md-first wow fadeInRightBig"
                data-wow-duration="1.3s"
                data-wow-delay="0.4s"
              >
                <img src={loveThree} alt="love" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery_area pt-80">
        <div className="container">
          <div className="text-center">
            <h1 className="pb-[5px]"></h1>
            {/* <p style={{ color: "#D57282" }}>
              You deserve the best day ever. I hope it's filled with love,
              laughter, and everything you desire.
            </p> */}
          </div>
        </div>
      </section>

      <section id="event" className="event_area pt-80 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-30 flex flex-col items-center justify-center">
                <h3 className="title">Our Moments</h3>
                <img src={section_shape} alt="Shape" className="self-center" />
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
                  <img src={loveOne} alt="event" />
                </div>
                <div className="event_content">
                  <span className="date">02 Feb 2023</span>
                  <h3 className="event_title">
                    <p>First We Met at Gurdwara</p>
                  </h3>
                  {/* s */}
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
                  <img src={loveThree} alt="event" />
                </div>
                <div className="event_content">
                  <span className="date">05 Feb 2023</span>
                  <h3 className="event_title">
                    <p>Monal Restaurent Lunch</p>
                  </h3>
                  {/* <p>
                    Typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when unknown
                    printer took a galley
                  </p> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-7">
              <div
                className="single_event mt-30 wow fadeIn"
                data-wow-duration="1.3s"
                data-wow-delay="0.8s"
              >
                <div className="event_image">
                  <img src={loveThree} alt="event" />
                </div>
                <div className="event_content">
                  <span className="date">07 Feb 2023</span>
                  <h3 className="event_title">
                    <p>Movie Plan</p>
                  </h3>
                  {/* <p>
                    Typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when unknown
                    printer took a galley
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
            <h1 className="pb-[5px]">Have a bright future</h1>
            <p>
              Wishing you a lifetime of happiness and joy. I'm so grateful to
              have you in my life.
            </p>
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
                Michael Jessica
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
              Designed and Developed by{" "}
              <p style={{ color: "#D59A57" }} rel="nofollow">
                M Ibrahim
              </p>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LovelyCouple;
