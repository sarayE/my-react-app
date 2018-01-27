import React, {Component} from 'react';

//ES6 class:
class SearchBar extends Component{ //extends React.Component => Get all the functionality of component-class 
    
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    
    render() {
        return <input onChange={(event) => console.log(event.target.value)}/>;
    }
}


//Difrent between component-class and ES6-class:
//component-class : must return(JSX);
//ES6-class: 1.must have a render(){return(JSX)} 
//           2.Have a stage/constructor! 


export default SearchBar;