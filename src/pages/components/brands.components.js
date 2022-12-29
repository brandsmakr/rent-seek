import React from "react";
import { Logitech, Phone, SonyInfo, TpLink, WiFi } from "../../constants/images";

const BrandsComponents = () => {
  return (
    <>
      <div class="container container-240">
        <div class="e-cat">
          <div className="brand">
            <div className="ecome-heading style3 spc3">
              <h1>Rent by branded Products</h1>
              <a href="#" className="btn-show">
                Rent more
                <i className="ion-ios-arrow-forward" />
              </a>
            </div>
            <div className="about-brand">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-sm-3 col-md-4">
                  <div className="about-brand-info text-center">
                    <div className="brand-img">
                      <a href="#" className="hover-images">
                        <img src={SonyInfo} alt="" />
                      </a>
                    </div>
                    <div className="brand-info">
                      <p>
                        All the Lorem Ipsum generators on the Internet
                        <br /> tend to repeat predefined chunks as necessary,
                        making this the first true generator on the
                        Internetandful
                        <br /> of model sentence{" "}
                      </p>
                    </div>
                    <a href="#" className="btn-gradient btn-brand">
                      Get Rent Now <i className="ion-ios-arrow-forward" />
                    </a>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-sm-8 col-md-8">
                  <div className="row engoc-equal-row">
                    <div className="col-xs-6 col-sm-6 col-md-6 product-item">
                      <div className="pd-bd product-inner v2">
                        <div className="flex align-center">
                          <div className="product-img">
                            <a href="#">
                              <img
                                src={TpLink}
                                alt=""
                                className="img-reponsive"
                              />
                            </a>
                          </div>
                          <div className="product-info">
                            <div className="color-group"></div>
                            <div className="element-list element-list-left"></div>
                            <div className="element-list element-list-middle">
                              <p className="product-cate">Audio Speakers</p>
                              <h3 className="product-title">
                                <a href="#">Harman Kardon Onyx Studio </a>
                              </h3>
                              <div className="product-bottom v2">
                                <div className="product-price">
                                  <span>Rs. 1,215.00</span>
                                </div>
                                <div className="product-bottom-element flex">
                                  <a href="#" className="btn-icon btn-view">
                                    <span className="icon-bg icon-view" />
                                  </a>
                                  <div className="color-group"></div>
                                </div>
                              </div>
                            </div>
                            <div className="product-button-group hidden-xs hidden-sm">
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
                        <div className="product-button-group hidden-md hidden-lg">
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
                    <div className="col-xs-6 col-sm-6 col-md-6 product-item">
                      <div className="pd-bd product-inner v2">
                        <div className="flex align-center">
                          <div className="product-img">
                            <a href="#">
                              <img
                                src={WiFi}
                                alt=""
                                className="img-reponsive"
                              />
                            </a>
                          </div>
                          <div className="product-info">
                            <div className="color-group"></div>
                            <div className="element-list element-list-left"></div>
                            <div className="element-list element-list-middle">
                              <p className="product-cate">Audio Speakers</p>
                              <h3 className="product-title">
                                <a href="#">Harman Kardon Onyx Studio </a>
                              </h3>
                              <div className="product-bottom v2">
                                <div className="product-price">
                                  <span>Rs. 1,215.00</span>
                                </div>
                                <div className="product-bottom-element flex">
                                  <a href="#" className="btn-icon btn-view">
                                    <span className="icon-bg icon-view" />
                                  </a>
                                  <div className="color-group"></div>
                                </div>
                              </div>
                            </div>
                            <div className="product-button-group hidden-xs hidden-sm">
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
                        <div className="product-button-group hidden-md hidden-lg">
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
                    <div className="col-xs-6 col-sm-6 col-md-6 product-item">
                      <div className="pd-bd product-inner v2">
                        <div className="flex align-center">
                          <div className="product-img">
                            <a href="#">
                              <img
                                src={Phone}
                                alt=""
                                className="img-reponsive"
                              />
                            </a>
                          </div>
                          <div className="product-info">
                            <div className="color-group"></div>
                            <div className="element-list element-list-left"></div>
                            <div className="element-list element-list-middle">
                              <p className="product-cate">Audio Speakers</p>
                              <h3 className="product-title">
                                <a href="#">Harman Kardon Onyx Studio </a>
                              </h3>
                              <div className="product-bottom v2">
                                <div className="product-price">
                                  <span>Rs. 1,215.00</span>
                                </div>
                                <div className="product-bottom-element flex">
                                  <a href="#" className="btn-icon btn-view">
                                    <span className="icon-bg icon-view" />
                                  </a>
                                  <div className="color-group"></div>
                                </div>
                              </div>
                            </div>
                            <div className="product-button-group hidden-xs hidden-sm">
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
                        <div className="product-button-group hidden-md hidden-lg">
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
                    <div className="col-xs-6 col-sm-6 col-md-6 product-item">
                      <div className="pd-bd product-inner v2">
                        <div className="flex align-center">
                          <div className="product-img">
                            <a href="#">
                              <img
                                src={Logitech}
                                alt=""
                                className="img-reponsive"
                              />
                            </a>
                          </div>
                          <div className="product-info">
                            <div className="color-group"></div>
                            <div className="element-list element-list-left"></div>
                            <div className="element-list element-list-middle">
                              <p className="product-cate">Audio Speakers</p>
                              <h3 className="product-title">
                                <a href="#">Harman Kardon Onyx Studio </a>
                              </h3>
                              <div className="product-bottom v2">
                                <div className="product-price">
                                  <span>Rs. 1,215.00</span>
                                </div>
                                <div className="product-bottom-element flex">
                                  <a href="#" className="btn-icon btn-view">
                                    <span className="icon-bg icon-view" />
                                  </a>
                                  <div className="color-group"></div>
                                </div>
                              </div>
                            </div>
                            <div className="product-button-group hidden-xs hidden-sm">
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
                        <div className="product-button-group hidden-md hidden-lg">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandsComponents;
