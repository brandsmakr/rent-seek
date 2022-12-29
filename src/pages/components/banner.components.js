import React from "react";
import { BannerImg } from "../../constants/images";

const BannerComponents = () => {
  return (
    <>
      <div className="container container-240">
        <div className="banner-callus spc2 image-bd effect_img2">
          <a href="#">
            <img src={BannerImg} alt="" className="img-responsive" />
          </a>
          <div className="box-center v2">
            <p>Free Shipping on first Rent Orders upto Rs. 1000</p>
            <a href="#" className="btn-callus">
              Rent now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerComponents;
