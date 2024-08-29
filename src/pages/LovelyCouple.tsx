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
      <section id="couple" className="couple_area pt-[20px] pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-30 flex flex-col items-center justify-center">
                <h3 className="title">Lovely Couple</h3>
                <img src={section_shape} alt="Shape" className="self-center" />
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
                  <h4 className="couple_name">Michael   Smith</h4>
                  <p>
                    Hi I am Michael Smith, dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since   the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries.
                  </p>
                   
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
                  <h4 className="couple_name">Jessica   Jones</h4>
                  <p>
                    Hi I am Jessica Jones, dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since   the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries.
                  </p>
                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="coming_soon" className="coming_soon_area py-16 ">
        <div className="coming_soon_shape_1">
          <img src={shapeOne} alt="shape" />
        </div>

        <div className="container items-center  ">
          <div className="text-center">
            <h1>Happy Birthday!</h1>
            <p>
              Wishing you a day filled with joy, laughter, and love. May all
              your wishes come true. Happy Birthday!
            </p>
          </div>
        </div>

        <div className="coming_soon_shape_2">
          <img src={shapeTwo} alt="shape" />
        </div>
      </section>

      <section id="our_love" className="our_love_area pt-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-30 flex flex-col items-center justify-center">
                <h3 className="title">Our Love Story</h3>
                <img src={section_shape} alt="Shape" className="self-center" />
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
                <h3 className="love_title">We Met For The First Time</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  nose aaliquyam erat, sed diam voluptua. At vero eos et accusam
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea timata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum.
                </p>
              </div>
              <div className="love_date">
                <p>7 May 21</p>
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
                <h3 className="love_title">We AreFirst Dating</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  nose aaliquyam erat, sed diam voluptua. At vero eos et accusam
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea timata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum.
                </p>
              </div>
              <div className="love_date">
                <p>15 Jan 22</p>
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
                <h3 className="love_title">We Live Together</h3>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  nose aaliquyam erat, sed diam voluptua. At vero eos et accusam
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea timata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum.
                </p>
              </div>
              <div className="love_date">
                <p>25 Jul 22</p>
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
            <h1>Always be Happy</h1>
            <p>
              You deserve the best day ever. I hope it's filled with love,
              laughter, and everything you desire.
            </p>
          </div>
        </div>
      </section>

      <section id="event" className="event_area pt-80 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section_title text-center pb-30 flex flex-col items-center justify-center">
                <h3 className="title">Birthday Events</h3>
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
                    <p>Photography</p>
                  </h3>
                  <p>
                    Typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when unknown
                    printer took a galley
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
                  <img src={loveThree} alt="event" />
                </div>
                <div className="event_content">
                  <span className="date">05 Feb 2023</span>
                  <h3 className="event_title">
                    <p>Dancing</p>
                  </h3>
                  <p>
                    Typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when unknown
                    printer took a galley
                  </p>
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
                  <p>
                    Typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when unknown
                    printer took a galley
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery_area pt-80">
        <div className="container">
          <div className="text-center">
            <h1>Have a bright future</h1>
            <p>
            Wishing you a lifetime of happiness and joy. I'm so grateful to have you in my life.
            </p>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer_area mt-80">
        <div className="footer_shape_1">
            <img src={shapeOne} alt="shape"/>
        </div>
        
        <div className="container">
            <div className="footer_widget pt-80 pb-80 text-center">
                
                <div className="footer_title">
                    <h3 className="title">Michael <span>&</span> Jessica</h3>
                </div>
                <ul className="footer_menu">
                    <li>Love</li>
                    <li>Joy</li>
                    <li>Happiness</li>
                    <li>❤️</li>
                </ul>
            </div> 
            <div className="footer_copyright text-center">
                <p>Designed and Developed by <p  style={{color: "#D59A57"}} rel="nofollow">M Ibrahim</p></p>
            </div>
        </div> 
    </footer>

    </>
  );
};

export default LovelyCouple;
