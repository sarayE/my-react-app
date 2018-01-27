import React, {Component} from 'react';

//ES6 class:
class SearchBar extends Component{ //extends React.Component => Get all the functionality of component-class 
    render() {
        return <input onChange={this.onInputChange}/>;
    }

    onInputChange(event) {
        console.log(event.target.value)
    }
}


//Difrent between component-class and ES6-class:
//component-class : must return(JSX);
//ES6-class: musr have a render(){return(JSX)} - use when i want get input from the user


export default SearchBar;