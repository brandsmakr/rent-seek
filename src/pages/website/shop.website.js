import React, { useState, useEffect } from "react";
import { BreadcrumbsComponents } from "../../components";
import { GridIcon, GridIcon2, ListIcon, Prod1 } from "../../constants/images";
import { BannerComponents } from "../components";
import { ProductImg, DefaultImage } from "../../constants/images";
import { ProductService, CategoryService } from "../../services";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllProducts = () => {
    setIsLoading(true);
    ProductService.getProducts()
      .then((res) => {
        setIsLoading(false);
        // console.log(res);
        setProducts(res.prod_info);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div class="wrappage">
        <BreadcrumbsComponents pageTitle="shop" />

        <div className="container container-240">
          <div className="e-product">
            <div className="pd-top">
              <h1 className="title">Shop</h1>
              <div className="show-element">
                <span>Showing 1–15 of 20 results</span>
              </div>
            </div>
            <div className="pd-middle">
              {/* <div className="view-mode view-group"> */}
              {/* <a className="grid-icon col active">
                  <img src={GridIcon} alt="grid layout" />
                </a>
                <a className="grid-icon col2">
                  <img src={GridIcon2} alt="grid laout" />
                </a>
                <a className="list-icon list">
                  <img src={ListIcon} alt="list layout" />
                </a> */}
              {/* </div> */}
              <div className="pd-sort">
                <div className="filter-sort">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="dropdown-label">Default sorting</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="manual.html">Featured</a>
                      </li>
                      <li>
                        <a href="best-selling.html">Best Selling</a>
                      </li>
                      <li>
                        <a href="title-ascending.html">Alphabetically, A-Z</a>
                      </li>
                      <li>
                        <a href="title-descending.html">Alphabetically, A-Z</a>
                      </li>
                      <li>
                        <a href="price-descending.html">Price, high to low</a>
                      </li>
                      <li>
                        <a href="price-ascending.html">Price, low to high</a>
                      </li>
                      <li>
                        <a href="created-ascending.html">Date, old to new</a>
                      </li>
                      <li>
                        <a href="created-descending.html">Date, new to old</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-show">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Show
                      <span className="dropdown-label">12</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">12</a>
                      </li>
                      <li>
                        <a href="#">24</a>
                      </li>
                      <li>
                        <a href="#">36</a>
                      </li>
                      <li>
                        <a href="#">48</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="product-collection-grid product-grid spc1">
              <div className="row">
                {isLoading ? (
                  <div className="d-flex">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : products && products.length > 0 ? (
                  products.map((product, index) => (
                    <div
                      className="col-xs-6 col-sm-4 col-md-4 col-lg-3 product-item"
                      key={index}
                    >
                      <div className="pd-bd product-inner">
                        <div className="product-img">
                          <Link to={`/product/${product._id}`}>
                            <img
                              src={
                                product.imgUrls && product.imgUrls !== null
                                  ? `${process.env.REACT_APP_HOST_API}/${product.imgUrls}`
                                  : DefaultImage
                              }
                              alt={product.title}
                              className="img-reponsive"
                            />
                          </Link>
                        </div>
                        <div className="product-info">
                          {/* <div className="color-group">
                            <a href="#" className="circle black" />
                            <a href="#" className="circle red" />
                            <a href="#" className="circle gray" />
                          </div> */}
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
                          Computers &amp; Accessories
                        </p> */}
                            <h3 className="product-title">
                              <Link to={`/product/${product._id}`}>
                                {product.title}
                              </Link>
                            </h3>
                            <div className="product-bottom">
                              <div className="product-price">
                                <span>Rs. {product.rented_price}</span>{" "}
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
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>

            {/* <div className="pd-middle space-v1">
              <ul className="pagination">
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">
                    <i className="ion-ios-arrow-forward" />
                  </a>
                </li>
              </ul>
              <div className="pd-sort">
                <div className="filter-sort">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="dropdown-label">Default sorting</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="manual.html">Featured</a>
                      </li>
                      <li>
                        <a href="best-selling.html">Best Selling</a>
                      </li>
                      <li>
                        <a href="title-ascending.html">Alphabetically, A-Z</a>
                      </li>
                      <li>
                        <a href="title-descending.html">Alphabetically, A-Z</a>
                      </li>
                      <li>
                        <a href="price-descending.html">Price, high to low</a>
                      </li>
                      <li>
                        <a href="price-ascending.html">Price, low to high</a>
                      </li>
                      <li>
                        <a href="created-ascending.html">Date, old to new</a>
                      </li>
                      <li>
                        <a href="created-descending.html">Date, new to old</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="filter-show">
                  <div className="dropdown">
                    <button
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Show
                      <span className="dropdown-label">12</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="#">12</a>
                      </li>
                      <li>
                        <a href="#">24</a>
                      </li>
                      <li>
                        <a href="#">36</a>
                      </li>
                      <li>
                        <a href="#">48</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <BannerComponents />
      </div>
    </>
  );
};

export default ShopPage;
