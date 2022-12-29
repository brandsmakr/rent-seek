import React from "react";
import { Team1 } from "../../constants/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { ProductImg } from "../../constants/images";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const TeamComponents = () => {
  return (
    <>
      {" "}
      <div className="aboutus  mt--100px">
        <div className="about-content">
          <div className="container container-240">
            <div className="team">
              <h1 className="about-title v3 spc text-center">Our teams</h1>
              <div className="">
                <div className="tab-content px-5">
                  <div id="feature" className="tab-pane fade in active">
                    <div className="product-tab-pd js-multiple-row2 ">
                      <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                      >
                        <SwiperSlide>
                          <div className="product-item ">
                            <div className="team-item pd-bd product-inner">
                              <div className="team-img product-img">
                                <img
                                  src={Team1}
                                  alt=""
                                  className="img-reponsive"
                                />
                              </div>
                              <div className="team-info product-info">
                                <h3 className="team-name product-cate">
                                  Robert Smith
                                </h3>
                                <p className="team-career product-title">
                                  Director
                                </p>
                                <p className="team-desc product-bottom product-button-group px-5">
                                  Radable content of a page when looking at its
                                  layout. The point of using Lorem Ip
                                </p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="product-item ">
                            <div className="team-item pd-bd product-inner">
                              <div className="team-img product-img">
                                <img
                                  src={Team1}
                                  alt=""
                                  className="img-reponsive"
                                />
                              </div>
                              <div className="team-info product-info">
                                <h3 className="team-name product-cate">
                                  Robert Smith
                                </h3>
                                <p className="team-career product-title">
                                  Director
                                </p>
                                <p className="team-desc product-bottom product-button-group px-5">
                                  Radable content of a page when looking at its
                                  layout. The point of using Lorem Ip
                                </p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="product-item ">
                            <div className="team-item pd-bd product-inner">
                              <div className="team-img product-img">
                                <img
                                  src={Team1}
                                  alt=""
                                  className="img-reponsive"
                                />
                              </div>
                              <div className="team-info product-info">
                                <h3 className="team-name product-cate">
                                  Robert Smith
                                </h3>
                                <p className="team-career product-title">
                                  Director
                                </p>
                                <p className="team-desc product-bottom product-button-group px-5">
                                  Radable content of a page when looking at its
                                  layout. The point of using Lorem Ip
                                </p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="product-item ">
                            <div className="team-item pd-bd product-inner">
                              <div className="team-img product-img">
                                <img
                                  src={Team1}
                                  alt=""
                                  className="img-reponsive"
                                />
                              </div>
                              <div className="team-info product-info">
                                <h3 className="team-name product-cate">
                                  Robert Smith
                                </h3>
                                <p className="team-career product-title">
                                  Director
                                </p>
                                <p className="team-desc product-bottom product-button-group px-5">
                                  Radable content of a page when looking at its
                                  layout. The point of using Lorem Ip
                                </p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="product-item ">
                            <div className="team-item pd-bd product-inner">
                              <div className="team-img product-img">
                                <img
                                  src={Team1}
                                  alt=""
                                  className="img-reponsive"
                                />
                              </div>
                              <div className="team-info product-info">
                                <h3 className="team-name product-cate">
                                  Robert Smith
                                </h3>
                                <p className="team-career product-title">
                                  Director
                                </p>
                                <p className="team-desc product-bottom product-button-group px-5">
                                  Radable content of a page when looking at its
                                  layout. The point of using Lorem Ip
                                </p>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamComponents;
