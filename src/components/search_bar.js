import React, {Component} from 'react';

//ES6-class:
class SearchBar extends Component{ //extends React.Component => Get all the functionality of component-class 
    
    constructor(props) {
        super(props);

        this.state = { term: '' };//just in the ctor i can write: 'this.state={}', else should i write: 'this.setState({})'
    }
    
    render() {
        //this.state.term = event.target.value BAD PRACTICE!!!!
        return (
            <div>
                <input 
                value = {this.state.term}
                onChange={event => this.setState({ term: event.target.value })}
                />                
            </div>
        );
    }
}


//Difrent between component-class and ES6-class:
//component-class : 1.must return(JSX);
//					2.use props
//ES6-class: 1.must have a render(){return(JSX)} 
//           2.Have a stage/constructor! 
//			 3.use this.props 	

export default SearchBar;