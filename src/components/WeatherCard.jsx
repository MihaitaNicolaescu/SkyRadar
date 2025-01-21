import React from 'react';

class WeatherCard extends React.Component{
    convertToCelsius(){
        return Math.round((this.props.weatherData.temp - 32) * 5/9);
    }

    getWeekdayName() {
        const date = new Date(this.props.weatherData.datetime);
        return date.toLocaleString('en-US', { weekday: 'long' });
    }

    render() {
        return (
            <div className='flex flex-col bg-[#3E5879] m-1 rounded-md w-[90px]'>
                <p className='text-[15px] font-semibold mt-2 text-white'>{this.getWeekdayName()}</p>
                <img className='w-20 shadow-2xl mx-auto'  src={`./src/assets/weatherIcons/${this.props.weatherData.icon}.png`} />
                <p className='text-[14px] text-white font-semibold'>{this.convertToCelsius()}°C</p>
                <p className='text-[14px] mb-2 text-white font-semibold'>{this.props.weatherData.temp}°F</p>
            </div>
        )
    }
}

export default WeatherCard;