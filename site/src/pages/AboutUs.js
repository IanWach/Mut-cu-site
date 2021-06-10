import React from 'react'
import Introduction from './components/Intro';
import Testimonials from './components/Testimonials'
import Stats from './components/Stats&Facts'
import Slideshows from './components/slideshow'
import Additional from './components/AdditionalInfo'
import Membership from  './components/Memberships'

function AboutUs (){
  return(
  <div>
    <h1>Header........</h1>
    <Introduction/>
    <Membership/>
    <Slideshows/>
    <Stats/>
    <Testimonials />
    <Additional/>
    
  </div>
  )
}

export default AboutUs;