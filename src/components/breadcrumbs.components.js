import React from "react";
import { Banner } from "../constants/images";


const BreadcrumbsComponents = (props) => {
  return (
    <>
      <div className="container container-240">
        <div className="e-product">
          <ul className="breadcrumb v4">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="active">{props.pageTitle}</li>
          </ul>
          <div className="pd-banner">
            <a href="#" className="image-bd effect_img2">
              <img src={Banner} alt="" className="img-reponsive" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbsComponents;
