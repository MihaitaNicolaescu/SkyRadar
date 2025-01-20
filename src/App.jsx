import './App.css'

import React from "react";
import WeatherCard from './components/WeatherCard';
import Search from './components/Search';
import axios from 'axios';

class App extends React.Component{

  
  constructor(props){
    super(props);
    this.API_KEY = "";
    this.debounceTimer = React.createRef();

    this.state = {
      location: "",
      weatherData: [
        {
          weekDay: "Monday",
          icon: "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
          temperature: "-3",
        }
      ]
    }
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

  async fetchData() {

    const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.state.location}?key=${this.API_KEY}`);
    console.log(response);
  }

  render(){
    return(
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-[40px] text-white">SkyRadar</p>
          <Search setLocation={this.setLocation} location={this.state.location}/>
          <div className="grid grid-flow-col place-items-center">
            <div className="flex flex-row place-items-center">
              {this.state.weatherData.map((data) => (
                <WeatherCard
                  key={data.weekDay + data.icon + data.temperature}
                  weekDay={data.weekDay}
                  icon={data.icon}
                  temperature={data.temperature}
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
