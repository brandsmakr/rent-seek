import React from 'react'
import {Outlet} from "react-router-dom"
import {NavbarComponents, FooterComponents, BreadcrumbsComponents} from '../components'

const WebsiteLayout = () => {
  return (
    <>
    <NavbarComponents/>
    {/* <BreadcrumbsComponents/> */}
     <Outlet />   
     <FooterComponents/>
    </>
  )
}

export default WebsiteLayout