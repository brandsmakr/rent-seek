import React from 'react'
import { BreadcrumbsComponents } from "../../components";
import {  BannerComponents, WishlistComponents } from "../components";



const WishlistPage = () => {
  return (
    <>
     <div class="wrappage">
        {/* <BreadcrumbsComponents pageTitle="wishlist" /> */}
        <WishlistComponents/>
        {/* <BannerComponents /> */}
      </div>
    </>
  )
}

export default WishlistPage