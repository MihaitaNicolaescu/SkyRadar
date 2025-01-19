import React from 'react';

class WeatherCard extends React.Component{
    convertToFahrenheit(){
        return this.props.temperature * 2 + 30;
    }

    render() {
        return (
            <div className='flex flex-col bg-[#3E5879] m-1 rounded-md'>
                <p className='text-[15px] font-semibold mt-2 text-white'>{this.props.weekDay}</p>
                <img className='w-20 shadow-2xl'  src={this.props.icon} />
                <p className='text-[14px] text-white font-semibold'>{this.props.temperature}°C</p>
                <p className='text-[14px] mb-2 text-white font-semibold'>{this.convertToFahrenheit()}°F</p>
            </div>
        )
    }
}

export default WeatherCard;