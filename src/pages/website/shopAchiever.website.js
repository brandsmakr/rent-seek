import React from "react";
import { BreadcrumbsComponents } from "../../components";
import { ArchiveComponents, BannerComponents } from "../components";

const ShopAchieverPage = () => {
  return (
    <>
      <div class="wrappage">
        <BreadcrumbsComponents pageTitle="product archive page" />
        <ArchiveComponents />
        <BannerComponents />
      </div>
    </>
  );
};

export default ShopAchieverPage;
