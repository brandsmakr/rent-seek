import React from "react";
import {
  About2,
  About3,
  AboutIcon1,
  AboutIcon2,
  AboutIcon3,
  SimpleLogo,
} from "../constants/images";

const AboutComponents = () => {
  return (
    <>
      <div className="aboutus">
        <div className="about-content">
          <div className="container container-240">
            <div className="entry-inside v4 text-center">
              <img src={SimpleLogo} alt="" />
              <h1 className="entry-title v2 spc">
                Easy way to get rental products with the help of rent seek
              </h1>
            </div>
          </div>
          <div className="container container-240">
            <div className="row pd1">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <h3 className="about-title spc">Our vision</h3>
                <p className="about-desc spc">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when
                  <br /> looking at its layout. The point of using Lorem Ipsum
                  is that it has a more-or-less normal distribution of
                  <br /> letters, as opposed to using 'Content here, content
                  here', making it look like readable English. Many desktop
                  publishing packages and web page editors now use Lorem Ipsum
                  as their default model text,{" "}
                </p>
                <div className="about-img">
                  <img src={About2} alt="" className="img-responsive" />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <h3 className="about-title spc">Our vision</h3>
                <p className="about-desc spc">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when
                  <br /> looking at its layout. The point of using Lorem Ipsum
                  is that it has a more-or-less normal distribution of
                  <br /> letters, as opposed to using 'Content here, content
                  here', making it look like readable English. Many desktop
                  publishing packages and web page editors now use Lorem Ipsum
                  as their default model text,{" "}
                </p>
                <div className="about-img">
                  <img src={About3} alt="" className="img-responsive" />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <div className="bg-gradient ">
              <div className="container container-240">
                <div className="row pd2 ">
                  <div className="col-xs-12 col-sm-4 col-md-4">
                    <div className="about-element text-center">
                      <img src={AboutIcon1} alt="" />
                      <h3 className="about-title v2">More than 2000 + items</h3>
                      <p className="about-desc">
                        Radable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4">
                    <div className="about-element text-center">
                      <img src={AboutIcon2} alt="" />
                      <h3 className="about-title v2">More than 2000 + items</h3>
                      <p className="about-desc">
                        Radable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters
                      </p>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4">
                    <div className="about-element text-center">
                      <img src={AboutIcon3} alt="" />
                      <h3 className="about-title v2">More than 2000 + items</h3>
                      <p className="about-desc">
                        Radable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters
                      </p>
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

export default AboutComponents;
