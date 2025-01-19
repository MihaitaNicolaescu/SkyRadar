import './App.css'

import React from "react";
import WeatherCard from './components/WeatherCard';
import Search from './components/Search';

class App extends React.Component{

  
  constructor(props){
    super(props);
    const API_KEY = "13f6880c923e003b93a6618ec85721f6";

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
  setLocation = (value) => {
    this.setState({location: value});
  }

  fetchData(location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&mode=xml&appid=${this.API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("Eroare la preluarea datelor");
        }
        return response.text();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
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
