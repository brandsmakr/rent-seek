import React from 'react'
import { FeatureComponents, ProductTabGradientsComponents, BannerComponents, ProfeaturesComponents } from '../components'

const HomePage = () => {
  return (
    <>
    <div class="wrappage">
        <FeatureComponents/>
        <ProductTabGradientsComponents/>
        <BannerComponents/>
        <ProfeaturesComponents/>
        </div>
    </>
  )
}

export default HomePage