import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            location: "tiu",
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        this.setState({location: event.target.value});
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.location !== this.state.location){
            console.log("changed");
        }
    }

    render(){
        return (
            <div className='mb-5'>
                <input className='w-1/2 rounded-md border bg-blue-100 border-blue-300 px-3 py-2 text-gray-900 shadow-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder:font-semibold' 
                value={this.state.location} placeholder='Search a location'
                onChange={this.handleInputChange}></input>
                {this.state.location && (<p className='text-[20px] mt-5 text-white'>Weather for <strong>{this.state.location}</strong></p>)}
            </div>
        )
        
    }
}

export default Search;