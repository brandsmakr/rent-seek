import React from "react";
import { HeaderBanner1, HeaderBanner2, SliderImg1, SliderImg2, SliderImg3 } from "../constants/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeaderComponents = () => {
  return (
    <div className="ads-group v2 bd-slick">
      <div className="container container-240">
        <div className="row">
          <div className="col-md-8 col-sm-8 col-xs-12">
            <div className="e-slide js-slider-3items">
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="e-slide-img">
                    <img
                      src={SliderImg1}
                      alt="slider images"
                      className="img-responsive"
                    />
                    <div className="slide-content v1">
                      <p className="cate">SMART TIVI</p>
                      <h3>Say hello to the future</h3>
                      <p className="sale">
                        Sale up to <span className="red">60%</span> off
                      </p>
                      <a href="#" className="slide-btn e-pink-gradient">
                        Rent now
                        <i className="ion-ios-arrow-forward" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="e-slide-img">
                    <img src={SliderImg2} alt="" className="img-responsive" />
                    <div className="slide-content v1">
                      <p className="cate">SMART TIVI</p>
                      <h3>Say hello to the future</h3>
                      <p className="sale">
                        Sale up to <span className="red">60%</span> off
                      </p>
                      <a href="#" className="slide-btn e-pink-gradient">
                        Rent now
                        <i className="ion-ios-arrow-forward" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="e-slide-img">
                    <img
                      src={SliderImg3}
                      alt="slider image"
                      className="img-responsive"
                    />
                    <div className="slide-content v1">
                      <p className="cate">SMART TIVI</p>
                      <h3>Say hello to the future</h3>
                      <p className="sale">
                        Sale up to <span className="red">60%</span> off
                      </p>
                      <a href="#" className="slide-btn e-red-gradient">
                        Rent now
                        <i className="ion-ios-arrow-forward" />
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* <div className="e-slide-img">
                <img
                  src={SliderImg1}
                  alt="slider images"
                  className="img-responsive"
                />
                <div className="slide-content v1">
                  <p className="cate">SMART TIVI</p>
                  <h3>Say hello to the future</h3>
                  <p className="sale">
                    Sale up to <span className="red">60%</span> off
                  </p>
                  <a href="#" className="slide-btn e-pink-gradient">
                    Rent now
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </div>
              </div>
              <div className="e-slide-img">
                <img src={SliderImg2} alt="" className="img-responsive" />
                <div className="slide-content v1">
                  <p className="cate">SMART TIVI</p>
                  <h3>Say hello to the future</h3>
                  <p className="sale">
                    Sale up to <span className="red">60%</span> off
                  </p>
                  <a href="#" className="slide-btn e-pink-gradient">
                    Rent now
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </div>
              </div>
              <div className="e-slide-img">
                <img
                  src={SliderImg3}
                  alt="slider image"
                  className="img-responsive"
                />
                <div className="slide-content v1">
                  <p className="cate">SMART TIVI</p>
                  <h3>Say hello to the future</h3>
                  <p className="sale">
                    Sale up to <span className="red">60%</span> off
                  </p>
                  <a href="#" className="slide-btn e-red-gradient">
                    Rent now
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="row">
              <div className="col-md-12 banner-img-item">
                <div className="banner-img banner-img2">
                  <a href="#">
                    <img
                      src={HeaderBanner1}
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                  <div className="h-banner-content v4">
                    <p className="content-name">Playstation </p>
                    <p className="content-price">
                      From Rs. <span className="red">29.99</span>
                    </p>
                    <a href="#" className="btn-banner">
                      Rent now
                      <i className="ion-ios-arrow-forward" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-12 banner-img-item">
                <div className="banner-img banner-img2 banner-img-item">
                  <a href="#">
                    <img
                      src={HeaderBanner2}
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                  <div className="h-banner-content v4">
                    <p className="content-name">Smart phone mix 2</p>
                    <p className="content-price">
                      From Rs. <span className="red">99.99</span>
                    </p>
                    <a href="#" className="btn-banner">
                      Rent now
                      <i className="ion-ios-arrow-forward" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponents;
