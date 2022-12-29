import React from "react";
import { Outlet } from "react-router-dom";
import {NavbarComponents, FooterComponents, HeaderComponents} from "../components";

const HomepageLayout = () => {
  return (
    <>
      <NavbarComponents />
      <HeaderComponents />
      <Outlet />
      <FooterComponents/>
    </>
  );
};

export default HomepageLayout;
