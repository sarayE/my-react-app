import React, {Component} from 'react'; //React.createElement to create the component
import ReactDOM from 'react-dom'; //and insert it to the DOM
import YTSearch from 'youtube-api-search';
import SearchBar from '../src/components/search_bar';

const API_KEY = 'AIzaSyAZhexzN9kifX3HlaNU5AHXE2Utok8N6wg';

class App extends Component {
	
	constructor(props){
		super(props);
		
		this.state = { videos: [] };
		
		//search function
		YTSearch({key: API_KEY, term: 'golden'}, (data) => {
			console.log(data);
			this.setState({videos: data});
		}); 
	}
		
	render() {
		return (
			<div>
			  <SearchBar/>
			</div>
		);
	}
}

//'App' = component-class
//'<App></App>' = instance of component-class


ReactDOM.render(<App/>, document.querySelector('.container'));