import React from "react";
import {
  TopBanner,
  MapIcon,
  TrackIcon,
  PhoneIcon,
  FlagIcon,
  Logo,
  CallIcon,
  useIcon,
  HeartIcon,
  UserIcon,
  CartIcon,
  MailIcon,
  ShipIcon,
} from "../constants/images";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthService, StorageService } from "../services";

const NavbarComponents = () => {
  const navigate = useNavigate();

  const handleUserRedirection = () => {
    if (!AuthService.isLoggedIn()) {
      return navigate("/login", { replace: true, reload: true });
    }
    StorageService.clearSession();
    // return navigate(0);
    return navigate("/login", { replace: true, reload: true });
  };

  return (
    <>
      <header id="header" className="header-v5">
        {/* <div className="header-top-banner">
          <a href="#">
            <img src={TopBanner} alt="" className="img-reponsive" />
          </a>
        </div> */}

        {/* topbar start here */}
        <div className="topbar">
          <div className="container container-240">
            <div className="row flex">
              <div className="col-md-6 col-sm-6 col-xs-4 flex-left">
                <div className="topbar-left">
                  <div className="element element-store hidden-xs hidden-sm">
                    <a
                      id="label1"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img src={MapIcon} alt="" />
                      <span>Store Location</span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="label1">
                      <li>
                        <Link to="/contact
                        ">Shop # 13, Lajpat Road Shahdra, Lahore.</Link>
                      </li>
                     
                    </ul>
                  </div>
                  <div className="element hidden-xs hidden-sm">
                    <a href="#">
                      <img src={TrackIcon} alt="" />
                      <span>Track Rent Order</span>
                    </a>
                  </div>
                  <div className="element element-account hidden-md hidden-lg">
                    <a href="#">My Account</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-8 flex-right">
                <div className="topbar-right">
                  <div className="element hidden-xs hidden-sm">
                    <a href="#">Rental Protection </a>
                  </div>
                  <div className="element hidden-xs hidden-sm">
                    <a href="#">Help</a>
                  </div>
                  <div className="element hidden-xs hidden-sm">
                    <a href="#">
                      <img src={PhoneIcon} alt="" />
                      <span>Save big on our app!</span>
                    </a>
                  </div>
                  <div className="element element-leaguage">
                    <a
                      id="label2"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img src={FlagIcon} alt="" />
                      <span>English</span>
                      <span className="ion-ios-arrow-down f-10 e-arrow" />
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="label2">
                      <li>
                        <a href="#">EN</a>
                      </li>
                      <li>
                        <a href="#">UR</a>
                      </li>
                    </ul>
                  </div>
                  <div className="element element-currency">
                    <a
                      id="label3"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span>PKR</span>
                      <span className="ion-ios-arrow-down f-10 e-arrow" />
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="label3">
                      <li>
                        <a href="#">PKR</a>
                      </li>
                      <li>
                        <a href="#">USD</a>
                      </li>
                      <li>
                        <a href="#">EUR</a>
                      </li>
                      <li>
                        <a href="#">GBP</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* topbar ends here */}

        <div className="header-center">
          <div className="container container-240">
            <div className="row flex">
              <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 v-center header-logo">
                <a href="#">
                  <img src={Logo} alt="" className="img-reponsive" />
                </a>
              </div>
              <div className="col-lg-7 col-md-7 v-center header-search hidden-xs hidden-sm">
                <form
                  method="get"
                  className="searchform ajax-search"
                  // action="https://landing.engotheme.com/search"
                  role="search"
                >
                  {/* <input type="hidden" name="type" defaultValue="product" />
                  <input
                    type="text"
                    onblur="if (this.value=='') this.value = this.defaultValue"
                    onfocus="if (this.value==this.defaultValue) this.value = ''"
                    name="q"
                    className="form-control"
                    placeholder="Seeking for Rent..."
                  /> */}
                  {/* <ul className="list-product-search hidden-xs hidden-sm">
                    <li>
                      <a className="flex align-center" href="#">
                        <div className="product-img">
                          <img src="img/product/iphonex.jpg" alt="" />
                        </div>
                        <h3 className="product-title">
                          Notebook Black Spire Smartphone Black 2.0
                        </h3>
                      </a>
                    </li>
                    <li>
                      <a className="flex align-center" href="#">
                        <div className="product-img">
                          <img src="img/product/sound.jpg" alt="" />
                        </div>
                        <h3 className="product-title">
                          Smartphone 6S 64GB LTE
                        </h3>
                      </a>
                    </li>
                    <li>
                      <a className="flex align-center" href="#">
                        <div className="product-img">
                          <img src="img/product/phone4.jpg" alt="" />
                        </div>
                        <h3 className="product-title">
                          Notebook Black Spire Smartphone Black 2.0
                        </h3>
                      </a>
                    </li>
                    <li>
                      <a className="flex align-center" href="#">
                        <div className="product-img">
                          <img src="img/product/phone5.jpg" alt="" />
                        </div>
                        <h3 className="product-title">
                          Smartphone 6S 64GB LTE{" "}
                        </h3>
                      </a>
                    </li>
                    <li>
                      <a className="flex align-center" href="#">
                        <div className="product-img">
                          <img src="img/product/phone1.jpg" alt="" />
                        </div>
                        <h3 className="product-title">
                          Notebook Black Spire Smartphone Black 2.0
                        </h3>
                      </a>
                    </li>
                  </ul> */}
                  {/* <div className="search-panel">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      All categories <span className="fa fa-caret-down" />
                    </a>
                    <ul
                      id="category"
                      className="dropdown-menu dropdown-category"
                    >
                      <li>
                        <a href="#">TV &amp; Video</a>
                      </li>
                      <li>
                        <a href="#">Home Audio &amp; Theater</a>
                      </li>
                      <li>
                        <a href="#">Camera, Photo &amp; Video</a>
                      </li>
                      <li>
                        <a href="#">Cell Phones &amp; Accessories</a>
                      </li>
                      <li>
                        <a href="#">Headphones</a>
                      </li>
                      <li>
                        <a href="#">Car Electronics</a>
                      </li>
                      <li>
                        <a href="#">Electronics Showcase</a>
                      </li>
                    </ul>
                  </div> */}
                  {/* <span className="input-group-btn">
                    <button className="button_search" type="button">
                      <i className="ion-ios-search-strong" />
                    </button>
                  </span> */}
                </form>
                <div className="tags">
                  <span>Most searched :</span>
                  <a href="#">AC</a>
                  <a href="#">Event Lights </a>
                  <a href="#">Jewllery</a>
                  <a href="#">Furniture</a>
                  <a href="#">Bridal Dress</a>
                </div>
              </div>
              <div className="col-lg-3  col-md-3 col-sm-6 col-xs-6 v-center header-sub">
                <div className="right-panel">
                  <div className="header-sub-element hidden-xs hidden-sm">
                    <div className="sub-left">
                      <img src={CallIcon} alt="" />
                    </div>
                    <div className="sub-right">
                      <span>Call Us</span>
                      <div className="phone">(+92) 304 1432583 </div>
                    </div>
                  </div>
                  <div className="header-sub-element row">
                    <a
                      className="hidden-xs hidden-sm cursor-pointer"
                      // to={!AuthService.isLoggedIn ? "/login" : ""}
                      onClick={() => handleUserRedirection()}
                    >
                      <img src={UserIcon} alt="" />
                    </a>
                    <a href="#">
                      <img src={HeartIcon} alt="" />
                    </a>
                    <a href="#">
                      <i className="fa-solid fa-at"></i>
                      {/* <img src={MailIcon} alt="" /> */}
                    </a>
                    {/* <div className="cart">
                      <a
                        href="#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="label5"
                      >
                        <img src={CartIcon} alt="" />
                        <span className="count cart-count">0</span>
                      </a>
                      <div className="dropdown-menu dropdown-cart">
                        <ul className="mini-products-list">
                          <li className="item-cart">
                            <div className="product-img-wrap">
                              <a href="#">
                                <img
                                  src="img/cart1.jpg"
                                  alt=""
                                  className="img-reponsive"
                                />
                              </a>
                            </div>
                            <div className="product-details">
                              <div className="inner-left">
                                <div className="product-name">
                                  <a href="#">Harman Kardon Onyx Studio </a>
                                </div>
                                <div className="product-price">
                                  $ 60.00 <span>( x2)</span>
                                </div>
                              </div>
                            </div>
                            <a href="#" className="e-del">
                              <i className="ion-ios-close-empty" />
                            </a>
                          </li>
                          <li className="item-cart">
                            <div className="product-img-wrap">
                              <a href="#">
                                <img
                                  src="img/cart1.jpg"
                                  alt=""
                                  className="img-reponsive"
                                />
                              </a>
                            </div>
                            <div className="product-details">
                              <div className="inner-left">
                                <div className="product-name">
                                  <a href="#">Harman Kardon Onyx Studio </a>
                                </div>
                                <div className="product-price">
                                  $ 60.00 <span>( x2)</span>
                                </div>
                              </div>
                            </div>
                            <a href="#" className="e-del">
                              <i className="ion-ios-close-empty" />
                            </a>
                          </li>
                        </ul>
                        <div className="bottom-cart">
                          <div className="cart-price">
                            <span>Subtotal</span>
                            <span className="price-total">$ 120.00</span>
                          </div>
                          <div className="button-cart">
                            <a href="#" className="cart-btn btn-viewcart">
                              View Cart
                            </a>
                            <a
                              href="#"
                              className="cart-btn e-checkout btn-gradient"
                            >
                              Checkout
                            </a>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    <a
                      href="#"
                      className="hidden-md hidden-lg icon-pushmenu js-push-menu"
                    >
                      <i className="fa fa-bars f-15" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom hidden-xs hidden-sm">
          <div className="container container-240">
            <div className="row flex lr2">
              <div className="col-lg-3 widget-verticalmenu">
                <div className="navbar-vertical">
                  <button className="navbar-toggles navbar-drop js-vertical-menu">
                    <span>All Departments</span>
                  </button>
                </div>
                <div className="vertical-wrapper">
                  <ul className="vertical-group">
                    <li className="vertical-item level1 mega-parent">
                      <a href="#">New Arrivals</a>
                    </li>
                    <li className="vertical-item level1 mega-parent">
                      <a href="#">
                        Top 100 Best Seller{" "}
                        <span className="h-ribbon e-red mg-l10">Hot</span>
                      </a>
                    </li>
                    <li className="vertical-item level1 vertical-drop">
                      <a href="#">TV &amp; Video</a>
                      <div className="menu-level-1 dropdown-menu vertical-menu v2 tvbg pd2 style1">
                        <ul className="level1">
                          <li className="level2 col-md-5">
                            <a href="#">TVs by Type</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="#" title="">
                                  4K Ultra HD
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Smart TVs
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  LED &amp; LCD TVs &amp; amplifiers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  OLED TVs
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  QLED/Quantum Dot TVs
                                </a>
                              </li>
                            </ul>
                            <a href="#">Blu-ray &amp; DVD Players</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="#" title="">
                                  4K Blu-ray Players
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Streaming Blu-ray Players
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  3D Blu-ray Players
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Portable Blu-ray Players
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  DVD Recorders
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 col-md-7">
                            <a href="# ">Home Audio</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="#" title="">
                                  Home Theater Systems
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Soundbars
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Speakers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Receivers &amp; Amplifiers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Premium Audio
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="vertical-item level1 vertical-drop">
                      <a href="#">Home Audi &amp; Theater</a>
                      <div className="menu-level-1 dropdown-menu vertical-menu v2 homebg pd2 style1">
                        <ul className="level1">
                          <li className="level2 col-md-4">
                            <a href="#">Home theater</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="#" title="">
                                  Sound bars
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Speakers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Receivers &amp; amplifiers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Equalizers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Phono preamps
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 col-md-4">
                            <a href="# ">Speakers</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="#" title="">
                                  Bluetooth speakers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Ceiling &amp; in-wall speakers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Digital music systems
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Outdoor
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Satellite speakers
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 col-md-4">
                            <a href="#">Accessories</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="#" title="">
                                  Receivers &amp; amplifiers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Cd &amp; tape players
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Tuners
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Curntables
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Receivers &amp; adapters
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="vertical-item level1 vertical-drop">
                      <a href="#">Camera, Photo &amp; Video</a>
                      <div className="menu-level-1 dropdown-menu vertical-menu">
                        <ul className="vertical-menu1">
                          <li>
                            <a href="#">Car Audio</a>
                          </li>
                          <li>
                            <a href="#">Radar Detectors</a>
                          </li>
                          <li>
                            <a href="#">Car Safety &amp; Security</a>
                          </li>
                          <li>
                            <a href="#">Car Video</a>
                          </li>
                          <li>
                            <a href="#">Two-Way Radios</a>
                          </li>
                          <li>
                            <a href="#">CB Radios &amp; Scanners</a>
                          </li>
                          <li>
                            <a href="#">In-Dash Mounting Kits</a>
                          </li>
                          <li>
                            <a href="#">Installation Accessories.</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="vertical-item level1 vertical-drop">
                      <a href="#">Cell Phones &amp; Accessories</a>
                      <div className="menu-level-1 dropdown-menu vertical-menu v2 phonebg pd2 style1">
                        <ul className="level1">
                          <li className="level2 col-md-4">
                            <a href="#">Cell Phones</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="#" title="">
                                  Samsung Galaxy S8
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  iPhone 7/7 Plus
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  iPhone 6
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Samsung Galaxy S7
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Unlocked Phones
                                </a>
                              </li>
                            </ul>
                            <a href="#">Cases</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="#" title="">
                                  4Armbands
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Armbands
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Cases
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Flip Cases
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Holsters &amp; Clips
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 col-md-8">
                            <a href="# ">Accessories</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="#" title="">
                                  Batteries
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Bluetooth Headsets
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Bluetooth Speakers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Car Accessories
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Chargers
                                </a>
                              </li>
                            </ul>
                            <a href="# ">Connected Devices</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="#" title="">
                                  Tablets
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Mobile Hotspots
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Smart Watches
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Wearable Technology
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="vertical-item level1 vertical-drop">
                      <a href="#">Headphones</a>
                      <div className="menu-level-1 dropdown-menu vertical-menu v2 headphonebg pd3 style1">
                        <ul className="level1">
                          <li className="level2 col-md-6">
                            <a href="#">Headphones</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="#" title="">
                                  In-Ear &amp; Earbud
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  On-Ear
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Over-Ear
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Wireless
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Sports &amp; Fitness
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 col-md-6">
                            <a href="# ">Speaker System</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="#" title="">
                                  Complete Systems
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Sound Bars
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Surround Sound
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Receivers &amp; Amplifiers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="#" title="">
                                  Equalizers
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="vertical-item level1 vertical-drop">
                      <a href="#">Car Electronics</a>
                      <div className="menu-level-1 dropdown-menu vertical-menu">
                        <ul className="vertical-menu1">
                          <li>
                            <a href="#">Car Audio</a>
                          </li>
                          <li>
                            <a href="#">Radar Detectors</a>
                          </li>
                          <li>
                            <a href="#">Car Safety &amp; Security</a>
                          </li>
                          <li>
                            <a href="#">Car Video</a>
                          </li>
                          <li>
                            <a href="#">Two-Way Radios</a>
                          </li>
                          <li>
                            <a href="#">CB Radios &amp; Scanners</a>
                          </li>
                          <li>
                            <a href="#">In-Dash Mounting Kits</a>
                          </li>
                          <li>
                            <a href="#">Installation Accessories.</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="vertical-item level1 vertical-drop">
                      <a href="#">Electronics Showcase</a>
                      <div className="menu-level-1 dropdown-menu vertical-menu">
                        <ul className="vertical-menu1">
                          <li>
                            <a href="#">Car Audio</a>
                          </li>
                          <li>
                            <a href="#">Radar Detectors</a>
                          </li>
                          <li>
                            <a href="#">Car Safety &amp; Security</a>
                          </li>
                          <li>
                            <a href="#">Car Video</a>
                          </li>
                          <li>
                            <a href="#">Two-Way Radios</a>
                          </li>
                          <li>
                            <a href="#">CB Radios &amp; Scanners</a>
                          </li>
                          <li>
                            <a href="#">In-Dash Mounting Kits</a>
                          </li>
                          <li>
                            <a href="#">Installation Accessories.</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="vertical-item level1 vertical-drop mega-parent">
                      <a href="#">All categlories</a>
                      <div className="menu-level-1 dropdown-menu vertical-menu v2 pd">
                        <div className="row">
                          <div className="col-md-4 text-center cate-item">
                            <a href="#">
                              <img
                                src="img/megamenu/cate1.jpg"
                                alt=""
                                className="img-reponsive"
                              />
                            </a>
                            <h3>
                              <a href="#">Mirrorless Cameras</a>
                            </h3>
                          </div>
                          <div className="col-md-4 text-center cate-item">
                            <a href="#">
                              <img
                                src="img/megamenu/cate2.jpg"
                                alt=""
                                className="img-reponsive"
                              />
                            </a>
                            <h3>
                              <a href="#">Lenses</a>
                            </h3>
                          </div>
                          <div className="col-md-4 text-center cate-item">
                            <a href="#">
                              <img
                                src="img/megamenu/cate3.jpg"
                                alt=""
                                className="img-reponsive"
                              />
                            </a>
                            <h3>
                              <a href="#">Photography Drones</a>
                            </h3>
                          </div>
                          <div className="col-md-4 text-center cate-item">
                            <a href="#">
                              <img
                                src="img/megamenu/cate4.jpg"
                                alt=""
                                className="img-reponsive"
                              />
                            </a>
                            <h3>
                              <a href="#">Sports &amp; Action Cameras</a>
                            </h3>
                          </div>
                          <div className="col-md-4 text-center cate-item">
                            <a href="#">
                              <img
                                src="img/megamenu/cate5.jpg"
                                alt=""
                                className="img-reponsive"
                              />
                            </a>
                            <h3>
                              <a href="#">Optics</a>
                            </h3>
                          </div>
                          <div className="col-md-4 text-center cate-item">
                            <a href="#">
                              <img
                                src="img/megamenu/cate6.jpg"
                                alt=""
                                className="img-reponsive"
                              />
                            </a>
                            <h3>
                              <a href="#">Accessories</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 widget-left">
                <div className="flex lr e-border">
                  <nav className="main-menu flex align-center">
                    <button
                      type="button"
                      className="icon-mobile e-icon-menu icon-pushmenu js-push-menu"
                    >
                      <span className="navbar-toggler-bar" />
                      <span className="navbar-toggler-bar" />
                      <span className="navbar-toggler-bar" />
                    </button>
                    <div className="collapse navbar-collapse" id="myNavbar">
                      <ul className="nav navbar-nav js-menubar">
                        <li className="level1 active hassub">
                          <NavLink to="/home">Home</NavLink>
                          {/* <span className="plus js-plus-icon" />
                          <div className="menu-level-1 ver2 dropdown-menu">
                            <div className="row">
                              <div className="cate-item col-md-4 col-sm-12">
                                <div className="demo-img">
                                  <a href="home1.html">
                                    <img
                                      src="img/demo/demo1.jpg"
                                      alt=""
                                      className="img-reponsive"
                                    />
                                  </a>
                                </div>
                                <div className="demo-text">Demo 1</div>
                              </div>
                              <div className="cate-item col-md-4 col-sm-12">
                                <div className="demo-img">
                                  <a href="home2.html">
                                    <img
                                      src="img/demo/demo2.jpg"
                                      alt=""
                                      className="img-reponsive"
                                    />
                                  </a>
                                </div>
                                <div className="demo-text">Demo 2</div>
                              </div>
                              <div className="cate-item col-md-4 col-sm-12">
                                <div className="demo-img">
                                  <a href="home3.html">
                                    <img
                                      src="img/demo/demo3.jpg"
                                      alt=""
                                      className="img-reponsive"
                                    />
                                  </a>
                                </div>
                                <div className="demo-text">Demo 3</div>
                              </div>
                              <div className="cate-item col-md-4 col-sm-12">
                                <div className="demo-img">
                                  <a href="home4.html">
                                    <img
                                      src="img/demo/demo4.jpg"
                                      alt=""
                                      className="img-reponsive"
                                    />
                                  </a>
                                </div>
                                <div className="demo-text">Demo 4</div>
                              </div>
                              <div className="cate-item col-md-4 col-sm-12">
                                <div className="demo-img">
                                  <a href="home5.html">
                                    <img
                                      src="img/demo/demo5.jpg"
                                      alt=""
                                      className="img-reponsive"
                                    />
                                  </a>
                                </div>
                                <div className="demo-text">Demo 5</div>
                              </div>
                              <div className="cate-item col-md-4 col-sm-12">
                                <div className="demo-img">
                                  <a href="#">
                                    <img
                                      src="img/demo/demo6.jpg"
                                      alt=""
                                      className="img-reponsive"
                                    />
                                  </a>
                                  <div className="overlay-img box-center">
                                    <a
                                      href="#"
                                      className="btn-gradient btn-csoon"
                                    >
                                      Coming soon
                                    </a>
                                  </div>
                                </div>
                                <div className="demo-text">Demo 6</div>
                              </div>
                            </div>
                          </div> */}
                        </li>
                        <li className="level1  hassub">
                          <NavLink to="/shop">
                            Shop
                            <span className="h-ribbon h-pos e-green">sale</span>
                          </NavLink>
                          {/* <span className="plus js-plus-icon" />
                          <div className="menu-level-1 dropdown-menu">
                            <ul className="level1">
                              <li className="level2 col-4">
                                <a href="#">Shop Layout</a>
                                <ul className="menu-level-2">
                                  <li className="level3">
                                    <a href="shop_full.html" title="">
                                      Shop Full Width
                                    </a>
                                  </li>
                                  <li className="level3">
                                    <a href="shopgrid_v1.html" title="">
                                      Shop Grid v.1
                                    </a>
                                  </li>
                                  <li className="level3">
                                    <a href="shopgrid_v2.html" title="">
                                      Shop Grid v.2
                                    </a>
                                    <span className="h-ribbon v3 e-red h-pos">
                                      Hot
                                    </span>
                                  </li>
                                  <li className="level3">
                                    <a href="shoplist.html" title="">
                                      Shop List
                                    </a>
                                  </li>
                                  <li className="level3">
                                    <a href="shopleft_sidebar.html" title="">
                                      Shop Left Sidebar
                                    </a>
                                  </li>
                                  <li className="level3">
                                    <a href="shopright_sidebar.html" title="">
                                      Shop Right Sidebar
                                    </a>
                                  </li>
                                </ul>
                                <a href="#">Categories</a>
                                <ul className="menu-level-2">
                                  <li className="level3">
                                    <a href="cat_fullwidth.html" title="">
                                      Categories Full Width
                                    </a>
                                    <span className="h-ribbon v3 e-red h-pos">
                                      Hot
                                    </span>
                                  </li>
                                  <li className="level3">
                                    <a href="cat_left_sidebar.html" title="">
                                      Categories Left Sidebar
                                    </a>
                                  </li>
                                  <li className="level3">
                                    <a href="cat_right_sidebar.html" title="">
                                      Categories Right Sidebar
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li className="level2 col-4">
                                <a href="# ">Single Product Type</a>
                                <ul className="menu-level-2">
                                  <li className="level3">
                                    <a href="bundle.html" title="">
                                      Bundle
                                    </a>
                                    <span className="h-ribbon v3 e-red h-pos">
                                      Hot
                                    </span>
                                  </li>
                                  <li className="level3">
                                    <a href="pin_product.html" title="">
                                      Pin Product
                                    </a>
                                  </li>
                                  <li className="level3">
                                    <a href="360degree.html" title="">
                                      360 Degree
                                    </a>
                                    <span className="h-ribbon v3 e-green h-pos">
                                      new
                                    </span>
                                  </li>
                                  <li className="level3">
                                    <a href="feature_video.html" title="">
                                      Featued video
                                    </a>
                                  </li>
                                  <li className="level3">
                                    <a href="simple.html">Simple</a>
                                  </li>
                                  <li className="level3">
                                    <a href="variable.html">Variable</a>
                                  </li>
                                  <li className="level3">
                                    <a href="affilate.html">
                                      External / Affiliate
                                    </a>
                                  </li>
                                  <li className="level3">
                                    <a href="grouped.html">Grouped</a>
                                  </li>
                                  <li className="level3">
                                    <a href="outofstock.html">Out of stock</a>
                                  </li>
                                  <li className="level3">
                                    <a href="onsale.html">On sale</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="level2 col-4">
                                <a href="#">Single Product Layout</a>
                                <ul className="menu-level-2">
                                  <li className="level3">
                                    <a href="product_extended.html" title="">
                                      Product Extended
                                    </a>
                                    <span className="h-ribbon v3 e-red h-pos">
                                      Hot
                                    </span>
                                  </li>
                                  <li className="level3">
                                    <a href="product_sidebar.html" title="">
                                      Product Left Sidebar
                                    </a>
                                  </li>
                                  <li className="level3">
                                    <a
                                      href="product_right_sidebar.html"
                                      title=""
                                    >
                                      Product Right Sideba
                                    </a>
                                  </li>
                                </ul>
                                <a href="#">Other Pages</a>
                                <ul className="menu-level-2">
                                  <li className="level3">
                                    <a href="shop_full.html" title="">
                                      Shop
                                    </a>
                                  </li>
                                  <li className="level3">
                                    <a href="cart.html" title="">
                                      Cart
                                    </a>
                                  </li>
                                  <li className="level3">
                                    <a href="wishlist.html" title="">
                                      My Wishlist
                                    </a>
                                  </li>
                                  <li className="level3">
                                    <a href="checkout.html" title="">
                                      Checkout
                                    </a>
                                  </li>
                                  <li className="level3">
                                    <a href="myaccount.html" title="">
                                      My Account
                                    </a>
                                  </li>
                                  <li className="level3">
                                    <a href="track.html" title="">
                                      Track Your Order
                                    </a>
                                  </li>
                                  <li className="level3">
                                    <a href="quickview.html" title="">
                                      Quick View
                                    </a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <div className="clearfix" />
                          </div> */}
                        </li>
                        {/* <li className="level1 active dropdown">
                          <a href="#">Mega menu</a>
                        </li> */}
                        <li className="level1 active hassub">
                          <NavLink to="/about">About</NavLink>
                        </li>
                        <li className="level1 active hassub">
                          <NavLink to="/categories">Category</NavLink>
                        </li>
                        <li className="level1 active hassub">
                          <NavLink to="/contact">Contact</NavLink>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <div className="header-bottom-right hidden-xs hidden-sm">
                    <img src={ShipIcon} alt="" className="img-reponsive" />
                    <span>Easy to Rent with Low Budget! </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavbarComponents;
