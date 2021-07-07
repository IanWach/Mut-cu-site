import React from 'react';
import './slideshow.css'
import { FaAngleDoubleRight,FaAngleDoubleLeft } from 'react-icons/fa';

function Slides (){
    return(
        <>
        <h1 className='Slide-Head'>Our Activities</h1>
        < div className="Slides-Container">
        <div className=''>
               <i className='fa-angle-Left' aria-hidden='true'>< FaAngleDoubleLeft/> </i>

        </div>
        <div className=''>
         <i className='fa-angle-Right' aria-hidden='true'>< FaAngleDoubleRight/> </i>

         </div>
        </div>
        </>
    )}
    export default Slides