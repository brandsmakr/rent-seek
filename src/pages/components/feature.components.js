import React from "react";
import { CreditIcon, TeleIcon, TruckIcon } from "../../constants/images";

const FeatureComponents = () => {
  return (
    <>
      <div className="e-feature">
        <div className="container container-240">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 feature-item">
              <div className="feature-block-img">
                <img src={TruckIcon} alt="" className="img-reponsive" />
              </div>
              <div className="feature-info v2">
                <h3>Easy Process to Rent</h3>
                <p>
                  Our renting process is very easy. Just make account and send
                  request to rent.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 feature-item">
              <div className="feature-block-img">
                <img src={CreditIcon} alt="" className="img-reponsive" />
              </div>
              <div className="feature-info v2">
                <h3>Safe Payment</h3>
                <p>
                  Pay with the world’s most popular and secure payment methods.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 feature-item">
              <div className="feature-block-img">
                <img src={TeleIcon} alt="" className="img-reponsive" />
              </div>
              <div className="feature-info v2">
                <h3>24/7 Help Center</h3>
                <p>
                  Round-the-clock assistance for a smooth renting experience
                  with full support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureComponents;
