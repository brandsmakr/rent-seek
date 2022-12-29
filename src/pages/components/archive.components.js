import React, { useState, useEffect } from "react";
import {
  About2,
  About3,
  CreditCard,
  Glass1,
  Glass2,
  Glass3,
  HeartIcon,
  Hotline,
  Safety2,
  SonyBrandLogo,
  Truck2,
} from "../../constants/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import {
  AuthService,
  ProductService,
  RentService,
  StorageService,
} from "../../services";
import { ProductImg, DefaultImage } from "../../constants/images";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";

const ArchiveComponents = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [prodId, setProdId] = useState(params.product_id);
  const [product, setProduct] = useState();
  const [rentDuration, setRentDuration] = useState(1);
  const [error, setError] = useState({});
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [isLogedIn, setIsLogedIn] = useState(AuthService.isLoggedIn());

  const getProductById = () => {
    if (prodId) {
      ProductService.getProduct(prodId)
        .then((res) => {
          // console.log(res);
          if (res.product) {
            setProduct(res.product);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  

  const scrollToTop = () => {
    // scroll to top on load window
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

   const navigateToLogin = ()=>{
     navigate("/login", {replace: true, state: {product_location: location}});  
    window.location.reload()
  } 

  useEffect(() => {
    getProductById();
    scrollToTop();
  }, []);

  

  const addRentalRequest = () => {
    setIsLoading(true);

    if (rentDuration == null || rentDuration < 0 || rentDuration > 30) {
      setIsLoading(false);
      return setMessage("Rent Duration must be 1-30 days!");
    }

    let data = {
      user: StorageService.getCurrentUser()._id,
      product: prodId,
      rent_duration: rentDuration,
    };

    RentService.addRentRequest(data)
      .then((res) => {
        setSuccess(true);
        setMessage(res.message);
        setIsLoading(false);
      })
      .catch((err) => {
        setSuccess(false);
        setMessage(err.response.data.message);
        setIsLoading(false);
      });

    scrollToTop();
  };

  return (
    <>
      <div className="container container-240 py-5">
        <div className="single-product-detail product-bundle product-aff">
          <div className="row">
            {message && message !== null ? (
              success ? (
                <div
                  className="alert alert-success  w-100 text-center"
                  role="alert"
                >
                  {message}
                </div>
              ) : (
                <div
                  className="alert alert-danger w-100 text-center"
                  role="alert"
                >
                  {message}
                </div>
              )
            ) : (
              <></>
            )}
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="flex product-img-slide">
                <div className="product-images">
                  <div className="main-img js-product-slider">
                    <Swiper
                      effect={"flip"}
                      grabCursor={true}
                      pagination={true}
                      navigation={true}
                      modules={[EffectFlip, Pagination, Navigation]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <div className="hover-images effect  w-100">
                          <img
                            src={
                              product &&
                              product !== null &&
                              product.imgUrls &&
                              product.imgUrls !== null
                                ? `${process.env.REACT_APP_HOST_API}/${product.imgUrls}`
                                : DefaultImage
                            }
                            alt={
                              product && product !== null ? product.title : ""
                            }
                            className="img-reponsive w-100"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="hover-images effect  w-100">
                          <img
                            src={
                              product &&
                              product !== null &&
                              product.imgUrls &&
                              product.imgUrls !== null
                                ? `${process.env.REACT_APP_HOST_API}/${product.imgUrls}`
                                : DefaultImage
                            }
                            alt={
                              product && product !== null ? product.title : ""
                            }
                            className="img-reponsive w-100"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    {/* <a href="#" className="hover-images effect">
                      <img src={Glass1} alt="photo" className="img-reponsive" />
                    </a>
                    <a href="#" className="hover-images effect">
                      <img src={Glass2} alt="photo" className="img-reponsive" />
                    </a>
                    <a href="#" className="hover-images effect">
                      <img src={Glass3} alt="photo" className="img-reponsive" />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <div className="single-flex">
                <div className="single-product-info product-info product-grid-v2 s-50">
                  {/* product category */}
                  {/* <p className="product-cate">Audio Speakers</p> */}
                  {/* <div className="product-rating">
                    <span className="star star-5" />
                    <span className="star star-4" />
                    <span className="star star-3" />
                    <span className="star star-2" />
                    <span className="star star-1" />
                    <div className="number-rating">( 896 reviews )</div>
                  </div> */}
                  <h3 className="product-title">
                    <Link className="cursor-pointer">
                      {product && product !== null ? product.title : ""}
                    </Link>
                  </h3>
                  <div className="product-price">
                    <span>
                      Rs.{" "}
                      {product && product !== null ? product.rented_price : ""}
                    </span>{" "}
                    <small>
                      <del>
                        {product && product !== null
                          ? product.regular_price
                          : ""}
                      </del>
                    </small>
                  </div>
                  <div className="availability">
                    <p className="product-inventory">
                      <label>Availability : </label>

                      <span>
                        {" "}
                        {product && product !== null && product.qty > 0
                          ? "In stock"
                          : "Out of stock"}{" "}
                      </span>
                    </p>
                  </div>
                  {/* <div className="product-brand">
                    <p>Brand :</p>
                    <img src={SonyBrandLogo} alt="" />
                  </div> */}
                  {/* <div className="product-sku">
                    <label>SKU :</label>
                    <span> 8900105789430</span>
                  </div> */}
                  <div className="short-desc">
                    {product && product.description ? (
                      <div
                        className="product-desc"
                        dangerouslySetInnerHTML={{
                          __html: product.description,
                        }}
                      />
                    ) : (
                      <></>
                    )}

                    <ul className="desc-list">
                      <li>Connects directly to Bluetooth</li>
                      <li>Battery Indicator light</li>
                      <li>DPI Selection:2600/2000/1600/1200/800</li>
                      <li>Computers running Windows</li>
                    </ul>
                  </div>
                  {/* <div className="color-group">
                    <label>Color :</label>
                    <a href="#" className="circle black" />
                    <a href="#" className="circle red" />
                    <a href="#" className="circle gray" />
                  </div> */}
                  <div className="form-group">
                    <input
                      type="number"
                      id="duration"
                      className="form-control bdr"
                      name="duration"
                      placeholder="Rent Duration *"
                      required={true}
                      max={30}
                      value={rentDuration}
                      onChange={(e) => setRentDuration(e.target.value)}
                    />
                  </div>
                  <div className="single-product-button-group">
                    <div className="e-btn cart-qtt btn-gradient">
                      <div></div>
                      {/* <div className="e-quantity">
                        <input
                          type="number"
                          step={1}
                          min={1}
                          max={999}
                          name="quantity"
                          defaultValue={1}
                          title="Qty"
                          className="qty input-text js-number"
                          size={4}
                          disabled
                        />
                        <div className="tc pa">
                          <a className="js-plus quantity-right-plus">
                            <i className="fa fa-caret-up" />
                          </a>
                          <a className="js-minus quantity-left-minus">
                            <i className="fa fa-caret-down" />
                          </a>
                        </div>
                      </div> */}

                      <Link
                        onClick={() =>
                          isLogedIn
                            ? addRentalRequest()
                            : navigateToLogin()
                        }
                        className="btn-add-cart"
                      >
                        {isLoading ? "Requesting for Rent" : "Request for Rent"}

                        <span className="icon-bg icon-cart v2" />
                      </Link>
                    </div>
                    <a href="#" className="e-btn btn-icon">
                      <img src={HeartIcon} className="icon-bg icon-wishlist" />
                    </a>
                    {/* <a href="#" className="e-btn btn-icon">
                      <span className="icon-bg icon-compare" />
                    </a> */}
                  </div>
                  <div className="product-tags">
                    <label>Tags:</label> <a href="#">Sounds</a>
                    {/*<a href="#">Gaming,</a>
                    <a href="#">Strong</a> */}
                  </div>
                </div>
                <div className="single-product-feature s-50 hidden-xs hidden-sm">
                  <div className="bd-7">
                    <div className="single-feature-box">
                      <div className="single-feature-img">
                        <img src={CreditCard} alt="" />
                      </div>
                      <div className="single-feature-info">
                        <h3>Safe Payment</h3>
                        <p>Pay with the world’s most payment methods.</p>
                      </div>
                    </div>
                    <div className="single-feature-box">
                      <div className="single-feature-img">
                        <img src={Safety2} alt="" />
                      </div>
                      <div className="single-feature-info">
                        <h3>Confidence</h3>
                        <p>Protection covers your purchase</p>
                      </div>
                    </div>
                    <div className="single-feature-box">
                      <div className="single-feature-img">
                        <img src={Truck2} alt="" />
                      </div>
                      <div className="single-feature-info">
                        <h3>Worldwide Delivery</h3>
                        <p>Ship to over 200 countries &amp; regions.</p>
                      </div>
                    </div>
                  </div>
                  <div className="hot-line e-gradient">
                    <p>Hotline</p>
                    <div className="flex align-center tele">
                      <img src={Hotline} alt="" />
                      <div className="phone-number">
                        <p>(+92) 304 1432 583</p>
                        <p>(+92) 316 4727 384</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="bundle bd-7">
          <div className="row flex align-center">
            <div className="col-md-9 col-sm-8 col-xs-12 bdl">
              <div className="bundle-left">
                <h3 className="bundle-title spc">Frequently bought together</h3>
                <div className="bundle-product flex">
                  <div className="bundle-product-img">
                    <a className="bd-7 v2 hover-images" href="#">
                      <img
                        src="img/single/glass1.jpg"
                        alt="photo"
                        className="img-reponsive"
                      />
                    </a>
                  </div>
                  <div className="bundle-product-img">
                    <a className="bd-7 v2 hover-images" href="#">
                      <img
                        src="img/single/glass4.jpg"
                        alt="photo"
                        className="img-reponsive"
                      />
                    </a>
                  </div>
                  <div className="bundle-product-img">
                    <a className="bd-7 v2 hover-images" href="#">
                      <img
                        src="img/single/glass5.jpg"
                        alt="photo"
                        className="img-reponsive"
                      />
                    </a>
                  </div>
                </div>
                <div className="product-bundle-list spc">
                  <input type="checkbox" id="radio1" defaultChecked="" />
                  <label htmlFor="radio1">
                    This item : B&amp;O PLAY by Bang &amp; Olufsen Beoplay
                    <span className="bundle-price">( $177.95 )</span>
                  </label>
                  <input type="checkbox" id="radio2" defaultChecked="" />
                  <label htmlFor="radio2">
                    B&amp;O Play Wall Bracket For BeoPlay A9
                    <span className="bundle-price">( $177.95 )</span>
                  </label>
                  <input type="checkbox" id="radio3" defaultChecked="" />
                  <label htmlFor="radio3">
                    B&amp;O PLAY by Bang &amp; Olufsen Beoplay A9 Music System
                    Home Speaker Accessory Cover
                    <span className="bundle-price">( $177.95 )</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-12">
              <div className="bundle-info text-center">
                <span className="bundle-price">$1,369.00</span>
                <p className="bundle-total">for 3 item(s)</p>
                <a href="#" className="btn-addcart">
                  Add all to cart
                </a>
              </div>
            </div>
          </div>
        </div> */}

          <div className="single-product-tab ver3 bd-7">
            <div className="cmt-title text-center abs">
              <ul className="nav nav-tabs v3 text-center">
                <li className="active">
                  <a data-toggle="pill" href="#desc">
                    Description
                  </a>
                </li>
                <li>
                  <a data-toggle="pill" href="#info">
                    Specification
                  </a>
                </li>
                {/* <li>
                  <a data-toggle="pill" href="#review">
                    Reviews
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="tab-content">
              <div id="desc" className="tab-pane fade in active">
                <div className="entry-content active">
                  <div className="e-text">
                    <div className="entry-inside v4 text-center">
                      <img src="img/single/simple_icon.png" alt="" />
                      <h1 className="entry-title spc">
                        {product && product !== null ? product.title : ""}
                      </h1>
                    </div>
                    <div className="entry-inside v3">
                      <div className="row entry-middle">
                        <div className="entry-info col-xs-12 col-sm-12 col-md-12">
                          {/* <h3>
                            {" "}
                            {product && product !== null ? product.title : ""}
                          </h3> */}
                          <p>
                            {product && product.description ? (
                              <div
                                className="product-desc"
                                dangerouslySetInnerHTML={{
                                  __html: product.description,
                                }}
                              />
                            ) : (
                              <></>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="text-center image-bd">
                        <img
                          src={
                            product &&
                            product !== null &&
                            product.imgUrls &&
                            product.imgUrls !== null
                              ? `${process.env.REACT_APP_HOST_API}/${product.imgUrls}`
                              : DefaultImage
                          }
                          alt={product && product !== null ? product.title : ""}
                          className="img-reponsive w-100"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="entry-button text-center abs">
                    <Link to="/shop" className="btn-show">
                      Show more
                      <i className="ion-chevron-down" />
                    </Link>
                  </div>
                </div>
              </div>
              <div id="info" className="tab-pane fade in" />
              <div id="review" className="tab-pane fade in" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArchiveComponents;
