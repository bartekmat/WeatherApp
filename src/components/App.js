import React, {Component} from 'react';
import Form from './Form';
import Result from './Result';
import Footer from './Footer';
import './App.css';
import { render } from '@testing-library/react';

//----KLUCZ DO API -----
const APIKey = '03cca762f73c13d9e1a094acf230c448';


class App extends Component {

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    conditions: '',
    error: ''
  }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  
  handleCitySearch = (event) => {
    event.preventDefault();
    console.log('formularz dziala');
    
    /*    HERE WE DEFINE API URL    */
          const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`    
     /*  -------------------------- */
       
    fetch(API)
    .then(response => this.verifyResponse(response))
    .then(response => response.json())
    .then(data => {
      const dateTime = new Date().toLocaleTimeString() +' - '+ new Date().toLocaleDateString();
        console.log(data);
        this.setState({
          error: false,
          date: dateTime,
          city: data.name +', '+data.sys.country,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          conditions: data.weather[0].description
        });
    })
    .catch(error => this.setState({
      error: true,
      city: this.state.value
    }))
  } 

  verifyResponse = (response) => {
        if(response.ok){
          return response;
      }
      throw Error("nie udalo sie");
  }

  render(){
        return (
      <div className="App">
        <div>
        <img src="https://img.icons8.com/ios/50/000000/rainy-weather.png" alt=""></img>
          .  The Weather App
        </div>
  
        <Form 
          value={this.state.value} 
          change={this.handleInputChange}
          submit={this.handleCitySearch}
        />
        <Result 
          weather={this.state}
        />
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
