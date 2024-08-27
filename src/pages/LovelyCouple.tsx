import { coupleShape, img1, mount2, section_shape } from "../assets";

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
                  <img
                    className="shape"
                    src={coupleShape}
                    alt="shape"
                  />
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
    </>
  );
};

export default LovelyCouple;
