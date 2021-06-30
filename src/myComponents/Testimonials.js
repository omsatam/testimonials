import React from 'react';
import "./Testimonials.css";

function Testimonials({data,activeComponent}) {
    
    return (
        <div className="testimonial">
         {activeComponent &&  <h1>{(data[activeComponent - 1]).message}</h1>}
        </div>
    )
}

export default Testimonials
