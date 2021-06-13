import React from 'react';
import './Testimonials.css'
import { TestimonialsData} from './TestimonialsData'

function Testimonials (){
    return(
        <>
            <h1>Our Testimonials</h1>
            <div className="Testimonials-Containers">    
            {TestimonialsData.map((Item, index) =>{
                return(
                    <div key={index} className={Item.cName}>
                        <img src={Item.Image}/>
                        <h3>{Item.Name}</h3>
                        <h4>{Item.Role}</h4>
                        <p>{Item.Description}</p>                  
                    </div>
                )
            })}
        </div>
        </>
    )
}
export default Testimonials 