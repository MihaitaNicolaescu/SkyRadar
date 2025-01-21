import React from 'react';

class WeatherCard extends React.Component{
    convertToCelsius(){
        return Math.round((this.props.weatherData.temp - 32) * 5/9);
    }

    render() {
        return (
            <div className='flex flex-col bg-[#3E5879] m-1 rounded-md'>
                <p className='text-[15px] font-semibold mt-2 text-white'>{this.props.weekDay}</p>
                <img className='w-20 shadow-2xl'  src={`./src/assets/weatherIcons/${this.props.weatherData.icon}.png`} />
                <p className='text-[14px] text-white font-semibold'>{this.convertToCelsius()}°C</p>
                <p className='text-[14px] mb-2 text-white font-semibold'>{this.props.weatherData.temp}°F</p>
            </div>
        )
    }
}

export default WeatherCard;