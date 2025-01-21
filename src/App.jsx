import './App.css'

import React from "react";
import WeatherCard from './components/WeatherCard';
import Search from './components/Search';
import axios from 'axios';

class App extends React.Component{

  API_KEY = "YOUR_API_KEY_HERE";
  debounceTimer = React.createRef();

  state = {
    location: "",
    weatherData: [
    ]
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.location != this.state.location){
      clearTimeout(this.debounceTimer);

      this.debounceTimer = setTimeout(() => {
        this.fetchData()
      }, 1500);
    }
  }

  setLocation = (value) => {
    this.setState({location: value});
  }

  setWeatherData = (value) => {
    this.setState({weatherData: value.slice(0,7)});
  }

  async fetchData() {
    const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.state.location}?key=${this.API_KEY}`);
    this.setWeatherData(response.data.days);
  }

  render(){
    return(
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-[40px] text-white">SkyRadar</p>
          <Search setLocation={this.setLocation} location={this.state.location}/>
          {this.state.weatherData.length > 0 && (<p className='text-[20px] mt-5 text-white'>Weather for <strong>{this.state.location}</strong></p>)}
          <div className="grid grid-flow-col place-items-center">
            <div className="flex flex-row place-items-center">
              {this.state.weatherData.map((data) => (
                <WeatherCard
                  key={data.sunriseEpoch + data.icon + data.temperature}
                  weatherData={data}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
