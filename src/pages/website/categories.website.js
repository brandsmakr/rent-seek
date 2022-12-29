import React from 'react'
import {BreadcrumbsComponents} from "../../components";
import { BannerComponents, CategoryComponents, BrandsComponents } from '../components';

const CategoriesPage = () => {
  return (
    <>
        <div class="wrappage">
        <BreadcrumbsComponents pageTitle="categories" />
        <CategoryComponents/>
        <BrandsComponents/>
        <BannerComponents/>
      </div>
    </>
  )
}

export default CategoriesPage