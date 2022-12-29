import React from "react";
import {Logo} from "../constants/images"

const FooterComponents = () => {
  return (
    <>
      <footer>
        <div className="f-top">
          <div className="container container-240">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div className="footer-block footer-about">
                  <div className="f-logo">
                    <a href="#">
                      <img
                        src={Logo}
                        alt="logo"
                        className="img-reponsive"
                      />
                    </a>
                  </div>
                  <ul className="footer-block-content">
                    <li className="address">
                      <span>
                      H8F3+33M Library, St Nagar, Lahore, Punjab 54000

                      </span>
                    </li>
                    <li className="phone">
                      <span>(+92) 304 1432583
                         {/* - (+92) 304 3164727384 */}
                         </span>
                    </li>
                    <li className="email">
                      <span>
                        <a
                        //   href="https://landing.engotheme.com/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="c586aaabb1a4a6b185bcaab0b7a6aaa8b5a4abbceba6aaa8"
                        >
                            talharafiq123456@gmail.com
                          {/* [email&nbsp;protected] */}
                        </a>
                      </span>
                    </li>
                    <li className="time">
                      <span>
                        Mon-Sat 9:00pm - 5:00pm &nbsp;&nbsp;&nbsp; Sun : Closed
                      </span>
                    </li>
                  </ul>
                  <div className="footer-social social">
                    <h3 className="footer-block-title">Follow us</h3>
                    <a href="#" className="fa fa-twitter" />
                    <a href="#" className="fa fa-dribbble" />
                    <a href="#" className="fa fa-behance" />
                    <a href="#" className="fa fa-instagram" />
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
                <div className="footer-block">
                  <h3 className="footer-block-title">Quick menu</h3>
                  <ul className="footer-block-content">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <a href="#">Login</a>
                    </li>
                    <li>
                      <a href="#">Register</a>
                    </li>
                    <li>
                      <a href="#">Account</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Job Categories</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2">
                <div className="footer-block">
                  <h3 className="footer-block-title">Customer Service</h3>
                  <ul className="footer-block-content">
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">Track your Order</a>
                    </li>
                    <li>
                      <a href="#">Returns/Exchange</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Customer Service</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="footer-block">
                  <div className="footer-block-phone">
                    <h3 className="footer-block-title">Hot Line</h3>
                    <p className="phone-desc">Call Us </p>
                    <p className="phone-light">
                      (+92) 304 1432583 
                      {/* or (+92) 316 4727384 */}
                    </p>
                  </div>
                  <div className="footer-block-newsletter">
                    <h3 className="footer-block-title">Subscription</h3>
                    <p>
                      Register now to get updates on promotions and coupons.
                    </p>
                    <form className="form_newsletter" action="#" method="post">
                      <input
                        type="email"
                        defaultValue=""
                        placeholder="Enter your emaill adress"
                        name="EMAIL"
                        id="mail"
                        className="newsletter-input form-control"
                      />
                      <button
                        id="subscribe"
                        className="button_mini btn btn-gradient"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="f-bottom">
          <div className="container container-240">
            <div className="row flex lr">
              <div className="col-12 f-copyright">
                <span>© 2021-2022 RentSeek. All rights reserved.</span>
              </div>
              {/* <div className="col-xs-6 f-payment hidden-xs">
                <a href="#">
                  <img
                    src="img/payment/mastercard.png"
                    alt=""
                    className="img-reponsive"
                  />
                </a>
                <a href="#">
                  <img
                    src="img/payment/paypal.png"
                    alt=""
                    className="img-reponsive"
                  />
                </a>
                <a href="#">
                  <img
                    src="img/payment/visa.png"
                    alt=""
                    className="img-reponsive"
                  />
                </a>
                <a href="#">
                  <img
                    src="img/payment/american-express.png"
                    alt=""
                    className="img-reponsive"
                  />
                </a>
                <a href="#">
                  <img
                    src="img/payment/western-union.png"
                    alt=""
                    className="img-reponsive"
                  />
                </a>
                <a href="#">
                  <img
                    src="img/payment/jcb.png"
                    alt=""
                    className="img-reponsive"
                  />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponents;
