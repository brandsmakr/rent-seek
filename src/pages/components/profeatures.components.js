import React from "react";
import { ProFeature1, ProFeature2, ProFeature3, ProFeature4 } from "../../constants/images";


const ProfeaturesComponents = () => {
  return (
    <>

      <div className="homepage-banner spc1">
        <div className="container container-240">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="banner-img banner-img2 effect-img3 plus-zoom">
                <a href="#">
                  <img
                    src={ProFeature1}
                    alt=""
                    className="img-responsive "
                  />
                </a>
                <div className="h-banner-content">
                  <p className="content-name">The pro stage for your home</p>
                  <p className="content-price">
                    From Rs. <span className="red">699.99</span>
                  </p>
                  <a href="#" className="btn-banner">
                    Rent now
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="banner-img banner-img2 banner-img2 effect-img3 plus-zoom">
                <a href="#">
                  <img
                    src={ProFeature2}
                    alt=""
                    className="img-responsive"
                  />
                </a>
                <div className="h-banner-content">
                  <p className="content-name">VR</p>
                  <p className="content-price">
                    From Rs. <span className="red">399.99</span>
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
    </>
  );
};

export default ProfeaturesComponents;
