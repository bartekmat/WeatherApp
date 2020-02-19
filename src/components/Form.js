import React from 'react';
import "./Form.css";

const Form = (props) => {
    return (
        <form onSubmit={props.submit}>
            <input 
            className="Form" 
            type="text" 
            value={props.value} 
            onChange={props.change}
            placeholder="Type in city name"
            />
            <button className="SubmitButton">Search</button>
        </form>
      );
}
 
export default Form;