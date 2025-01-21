import React from 'react';

class Search extends React.Component{
    constructor(props){
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        this.props.setLocation(event.target.value);
    }

    render(){
        return (
            <div className='mb-2'>
                <input className='w-[250px] rounded-md border bg-blue-100 border-blue-300 px-3 py-2 text-gray-900 shadow-sm placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm placeholder:font-semibold' 
                value={this.props.location} placeholder='Search a location'
                onChange={this.handleInputChange}></input>
            </div>
        )
        
    }
}

export default Search;