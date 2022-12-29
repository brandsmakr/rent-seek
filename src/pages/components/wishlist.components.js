import React from "react";
import {Wishlist1} from "../../constants/images"

const WishlistComponents = () => {
  return (
    <>
      <div class="container container-240">
        <div className="checkout wishlist">
          <ul className="breadcrumb v3">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="active">Wishlist</li>
          </ul>
          <div className="shopping-cart v2 bd-7">
            <div className="cmt-title text-center abs">
              <h1 className="page-title v4">Wishlist</h1>
            </div>
            <div className="table-responsive">
              <table className="table cart-table">
                <tbody>
                  <tr className="item_cart">
                    <td className="product-name flex align-center">
                      <a href="#" className="btn-del">
                        <i className="ion-ios-close-empty" />
                      </a>
                      <div className="product-img">
                        <img src={Wishlist1} alt="Futurelife" />
                      </div>
                      <div className="product-info">
                        <a href="#" title="">
                          Harman Kardon Onyx Studio{" "}
                        </a>
                      </div>
                    </td>
                    <td className="total-price">
                      <p className="price">Pkr 1,215.00/-</p>
                    </td>
                    <td className="w-status">
                      <p>In stock</p>
                    </td>
                    <td className="w-button">
                      <a className="btn-addcart btn-gradient">Rent Now</a>
                    </td>
                  </tr>
                  <tr className="item_cart">
                    <td className="product-name flex align-center">
                      <a href="#" className="btn-del">
                        <i className="ion-ios-close-empty" />
                      </a>
                      <div className="product-img">
                        <img src={Wishlist1} alt="Futurelife" />
                      </div>
                      <div className="product-info">
                        <a href="#" title="">
                          Harman Kardon Onyx Studio{" "}
                        </a>
                      </div>
                    </td>
                    <td className="total-price">
                      <p className="price">Pkr 1,215.00/-</p>
                    </td>
                    <td className="w-status">
                      <p>In stock</p>
                    </td>
                    <td className="w-button">
                      <a className="btn-addcart btn-gradient">Rent Now</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistComponents;
