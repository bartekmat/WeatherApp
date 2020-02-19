import React from 'react';
import "./Result.css";

const ConditionImage = (conditions) => {

    let image = null;

    if(conditions.includes('clouds')){
        image = (
            <img 
            src="https://img.icons8.com/plasticine/200/000000/partly-cloudy-day.png" 
            alt=""
            height="160px"
            >
            </img>
        );
    }else
    if(conditions.includes('snow')){
        image = (
            <img 
            src="https://img.icons8.com/plasticine/200/000000/snow.png" 
            alt=""
            height="160px"
            >
            </img>
        );
    }
    else
    if(conditions.includes('clear sky')){
        image = (
            <img 
            src="https://img.icons8.com/plasticine/200/000000/sun.png" 
            alt=""
            height="160px"
            >
            </img>
        );
    }
        return (
            <div className="Result">
              Weather Conditions: {conditions}
              <div className="Image">
                  {image} 
              </div>
               
            </div>  
      );
    
    
}
 
export default ConditionImage;