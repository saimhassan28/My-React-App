import React from "react";
import featureimage from '../images/frame.png';
 function Features(){
    return(
        <div id='features'>
            <div className='features-model'>
            <img src="{featureimage}" alt="features-img" />
        </div>
        <div className="features-text">
        <h2>features</h2>
        <h3>This application <span>is Art</span></h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi perspiciatis 
            fugit perferendis. Nihil laborum, ullam quisquam commodi incidunt nemo quaerat expedita 
            in vel non perspiciatis 
            libero ex labore, suscipit harum ad pariatur fugit voluptates, 
            corrupti quidem amet quae praesentium excepturi.</p>
            <button>View More Features</button>
      </div>
    </div>
    )
 }

 export default Features;   