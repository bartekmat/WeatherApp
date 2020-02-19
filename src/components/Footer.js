import React from 'react';
import "./App.css";

const Footer = (props) => {
    return (
        <div className="Footer">
            Copyrights : Bartosz Matuszewski
            <br></br>
            <a href="https://github.com/bartekmat">
                <img className="Image" src="https://img.icons8.com/dusk/64/000000/github.png"></img>
            </a>
            <a href="https://www.facebook.com/bartek.matuszewski.1232">
                                <img className="Image" src="https://img.icons8.com/dusk/64/000000/facebook.png"></img>
            </a>
            <a href="https://www.instagram.com/matuszewskibartek/">
                <img className="Image" src="https://img.icons8.com/dusk/64/000000/instagram-new.png"></img>
            </a>
            
        </div>
      );
}
 
export default Footer;