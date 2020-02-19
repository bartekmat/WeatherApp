import React from 'react';
import ConditionImage from './ConditionImage';
import './Result.css';

const Result = (props) => {
    const {date, city, temp, conditions, pressure, wind, error} = props.weather; //to jest destrukturyzacja
    
    let content = null;
    let weatherInfo = null;

    weatherInfo = ConditionImage(conditions);

    if(!error && city){ // condition error is false and city is not empty
        content = (
            <div>
                <div className="Result">
                    Now is: {(date)}
                </div>
                <div className="Result">
                    Location: {city}
                </div>
                <div className="Result">
                    Temperature:  {temp} C
                </div>
                <div className="Result">
                      {weatherInfo} 
                </div>
                <div className="Result">
                    Pressure:  {pressure} Hpa
                </div>
                <div className="Result">
                    Wind Speed:  {wind} kmh
                </div>
            </div>
        );
    }
    
    return ( 
        <div className="ResultList">
            {error ? `City ${city} does not exist in database` : content}
        </div>
     );
}


 
export default Result;