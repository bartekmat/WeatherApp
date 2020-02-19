import React from 'react';
import "./Result.css";

const ConditionImage = (conditions) => {

    let image = null;

    if(conditions.includes('clouds')){
        image = (
            <img 
            src="https://img.icons8.com/plasticine/100/000000/partly-cloudy-day.png" 
            alt=""
            className="Image"
            >
            </img>
        );
    }else
    if(conditions.includes('snow')){
        image = (
            <img 
            src="https://img.icons8.com/plasticine/100/000000/snow.png" 
            alt=""
            className="Image"
            >
            </img>
        );
    }
    else
    if(conditions.includes('clear sky')){
        image = (
            <img 
            src="https://img.icons8.com/plasticine/100/000000/sun.png" 
            alt=""
            className="Image"
            >
            </img>
        );
    }
        return (
            <div>
              Weather Conditions:  {image} {conditions}
            </div>  
      );
    
    
}
 
export default ConditionImage;