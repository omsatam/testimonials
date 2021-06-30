import React from 'react';
import "./Testimonials.css";

function Testimonials({data,activeComponent}) {
    // const [activeComponent, setActiveComponent] = useState(null)

    // useEffect(() => {

    //         setActiveComponent(document.getElementsByClassName("active")[0].id)
    //         console.log(activeComponent)

    //     // },5000)
    // },[data])
    return (
        <div className="testimonial">
         {activeComponent &&  <h1>{(data[activeComponent]).message}</h1>}
        </div>
    )
}

export default Testimonials
