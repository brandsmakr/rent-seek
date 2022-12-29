import React, { useEffect, useState } from "react";
import { ProductImg, DefaultImage } from "../../constants/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { ProductService, CategoryService } from "../../services";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const ProductTabGradientsComponents = () => {
  const [products, setProducts] = useState([]);
  const [slidesPerScreen, setSlidesPerScreen] = useState(3);

  const getAllProducts = () => {
    ProductService.getProducts()
      .then((res) => {
        // console.log(res);
        setProducts(res.prod_info);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
    // scroll to top on load window
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const swiperResponsiveness = () => {
    // console.log(window.innerWidth==1440px)
    // 4
    if (window.innerWidth <= 768) {
      setSlidesPerScreen(1);
    }
  };

  useEffect(() => {
    swiperResponsiveness();
  }, [window.innerWidth]);

  return (
    <>
      <div className="product-tab">
        <div className="container container-240">
          <div className="ecome-heading style2 spc5">
            <ul className="product-tab-sw v2">
              <li className="active">
                <a data-toggle="tab" href="#feature" aria-expanded="true">
                  Featured
                </a>
              </li>
              <li className="">
                <a data-toggle="tab" href="#top-rated" aria-expanded="false">
                  Top rated
                </a>
              </li>
              <li className="">
                <a data-toggle="tab" href="#most" aria-expanded="false">
                  New arrivals
                </a>
              </li>
            </ul>
            <a href="/shop" className="btn-show cursor-pointer">
              Shop more
              <i className="ion-ios-arrow-forward" />
            </a>
          </div>
          <div></div>
          <div className="tab-content">
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
                  {/* <div className="row"> */}
                  {products && products.length > 0 ? (
                    products.map((product, index) => (
                      <SwiperSlide key={index}>
                        <div className="product-item " key={index}>
                          <div className="pd-bd product-inner">
                            <div className="product-img">
                              <a href="#">
                                <img
                                  src={
                                    product.imgUrls && product.imgUrls !== null
                                      ? `${process.env.REACT_APP_HOST_API}/${product.imgUrls}`
                                      : DefaultImage
                                  }
                                  alt={product.title}
                                  className="img-reponsive"
                                />
                              </a>
                            </div>
                            <div className="product-info">
                              <div className="color-group"></div>
                              <div className="element-list element-list-left">
                                <ul className="desc-list">
                                  <li>Connects directly to Bluetooth</li>
                                  <li>Battery Indicator light</li>
                                  <li>DPI Selection:2600/2000/1600/1200/800</li>
                                  <li>Computers running Windows</li>
                                </ul>
                              </div>
                              <div className="element-list element-list-middle">
                                <div className="product-rating bd-rating">
                                  <span className="star star-5" />
                                  <span className="star star-4" />
                                  <span className="star star-3" />
                                  <span className="star star-2" />
                                  <span className="star star-1" />
                                  <div className="number-rating">
                                    ( 896 reviews )
                                  </div>
                                </div>
                                {/* <p className="product-cate">
                                  {
                                    product.category
                                  }
                                </p> */}
                                <h3 className="product-title">
                                  <a href="#">{product.title}</a>
                                </h3>
                                <div className="product-bottom">
                                  <div className="product-price">
                                    <span>Rs {product.rented_price}</span>{" "}
                                    <del>{product.regular_price}</del>
                                  </div>
                                  <a href="#" className="btn-icon btn-view">
                                    <span className="icon-bg icon-view" />
                                  </a>
                                </div>
                                <div className="product-bottom-group">
                                  <a href="#" className="btn-icon">
                                    <span className="icon-bg icon-cart" />
                                  </a>
                                  <a href="#" className="btn-icon">
                                    <span className="icon-bg icon-wishlist" />
                                  </a>
                                  <a href="#" className="btn-icon">
                                    <span className="icon-bg icon-compare" />
                                  </a>
                                </div>
                              </div>
                              <div className="product-button-group">
                                <a href="#" className="btn-icon">
                                  <span className="icon-bg icon-cart" />
                                </a>
                                <a href="#" className="btn-icon">
                                  <span className="icon-bg icon-wishlist" />
                                </a>
                                <a href="#" className="btn-icon">
                                  <span className="icon-bg icon-compare" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  ) : (
                    <></>
                  )}

                  {/* </div> */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTabGradientsComponents;
