import React from 'react'
import Introduction from './Intro';
import Testimonials from './Testimonials'
import Stats from './Stats&Facts'
import Slideshows from './slideshow'
import Additional from './AdditionalInfo'
import Membership from  './Memberships'

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