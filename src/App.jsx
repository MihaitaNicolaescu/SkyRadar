import './App.css'

import React from "react";
import WeatherCard from './components/WeatherCard';

class App extends React.Component{

  render(){
    return(
      <>
        <p className='text-[40px]'>SkyRadar</p>
        <input className='w-1/2 rounded-md border bg-blue-100 border-blue-300 px-3 py-2 text-gray-900 shadow-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder:font-semibold' placeholder='Search a location'></input>
        <p className='text-[20px]'>Weather for X</p>
        <div className='grid grid-flow-col place-items-center'>
          <div className='flex flex-row place-items-center'>
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
            <WeatherCard />
          </div>
        </div>
      </>
    )
  }

}

export default App;
