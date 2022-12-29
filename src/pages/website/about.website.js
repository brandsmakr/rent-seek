import React from 'react'
import { BreadcrumbsComponents, AboutComponents } from '../../components'
import { BannerComponents } from '../components'
import TeamComponents from '../components/team.components'


const AboutPage = () => {



  return (
    <>
        <BreadcrumbsComponents pageTitle="about us"/>
        <AboutComponents />
        <TeamComponents/>
        <BannerComponents/>
    </>
  )
}

export default AboutPage