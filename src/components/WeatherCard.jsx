import React from 'react';

class WeatherCard extends React.Component{
    render() {
        return (
            <div className='flex flex-col bg-[#3E5879] m-1 rounded-md'>
                <p className='text-[15px] font-semibold mt-2 text-white'>Mon</p>
                <img className='w-20 shadow-2xl'  src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png" />
                <p className='text-[14px] text-white font-semibold'>-3°C</p>
                <p className='text-[14px] mb-2 text-white font-semibold'>26.6°F</p>
            </div>
        )
    }
}

export default WeatherCard;