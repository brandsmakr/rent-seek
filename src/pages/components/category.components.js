import React, { useState, useEffect } from "react";
import { Prod1, ProductImg, DefaultImage } from "../../constants/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { CategoryService } from "../../services";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const CategoryComponents = () => {
  const [categories, setCategories] = useState([]);
  const [slidesPerScreen, setSlidesPerScreen] = useState(1);

  const getCategoriesData = () => {
    CategoryService.getCategories()
      .then((res) => {
        setCategories(res.categories_data);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const swiperResponsiveness = () => {
    // console.log(window.innerWidth==1440px)
    // 4
    if (window.innerWidth > 1440) {
      setSlidesPerScreen(5);
    } else if (window.innerWidth <= 1440 && window.innerWidth >= 1200) {
      setSlidesPerScreen(4);
    } else if (window.innerWidth <= 1200 && window.innerWidth >= 768) {
      setSlidesPerScreen(3);
    } else if (window.innerWidth <= 768 && window.innerWidth >= 576) {
      setSlidesPerScreen(2);
    } else if (window.innerWidth <= 576 && window.innerWidth >= 0) {
      setSlidesPerScreen(1);
    }
  };

  useEffect(() => {
    getCategoriesData();
    // scroll to top on load window
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    swiperResponsiveness();
  }, [window.innerWidth]);

  return (
    <>
      <div className="tab-content py-5 px-5">
        <div id="feature" className="tab-pane fade in active">
          <div className="product-tab-pd js-multiple-row2 ">
            <Swiper
              slidesPerView={slidesPerScreen}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <div className="row">
                {categories && categories.length > 0 ? (
                  categories.map((category, index) => (
                    <SwiperSlide key={index}>
                      <div className="product-item " key={index}>
                        <div className="pd-bd product-inner">
                          <div className="product-img">
                            <a className="cursor-pointer">
                              <img
                                src={
                                  category.imgUrl && category.imgUrl !== null
                                    ? `${process.env.REACT_APP_HOST_API}/${category.imgUrl}`
                                    : DefaultImage
                                }
                                alt={category.name}
                                className="img-reponsive"
                              />
                            </a>
                          </div>
                          <div className="product-info">
                            <div className="element-list element-list-middle">
                              <p className="product-cate">{category.name}</p>
                              <h3 className="product-title">
                                <a className="cursor-pointer">
                                  {category.title}
                                </a>
                              </h3>
                            </div>

                            <div className="product-button-group">
                              {/* <p className="product-cate px-5">850 Products</p> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryComponents;
