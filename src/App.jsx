import './App.css'

import React from "react";
import WeatherCard from './components/WeatherCard';
import Search from './components/Search';

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      weatherData: [
        {
          weekDay: "Monday",
          icon: "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png",
          temperature: "-3",
        },
        {
          weekDay: "Tuesday",
          icon: "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather03-512.png",
          temperature: "0",
        },
        {
          weekDay: "Wednesday",
          icon: "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather04-512.png",
          temperature: "2",
        },
        {
          weekDay: "Thursday",
          icon: "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather05-512.png",
          temperature: "4",
        },
        {
          weekDay: "Friday",
          icon: "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather06-512.png",
          temperature: "-1",
        },
        {
          weekDay: "Saturday",
          icon: "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather07-512.png",
          temperature: "5",
        },
        {
          weekDay: "Sunday",
          icon: "https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather08-512.png",
          temperature: "3",
        }
      ]
    }

  }

  render(){
    return(
      <>
        <p className='text-[40px]'>SkyRadar</p>
        <Search/>
        
        <div className='grid grid-flow-col place-items-center'>
          <div className='flex flex-row place-items-center'>
            {
              this.state.weatherData.map((data) => (
                <WeatherCard key={data.weekDay+data.icon+data.temperature} weekDay={data.weekDay} icon={data.icon} temperature={data.temperature}/>
              ))
            }
          
          </div>
        </div>
      </>
    )
  }

}

export default App;
