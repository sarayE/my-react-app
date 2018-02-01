import React, {Component} from 'react'; //React.createElement to create the component
import ReactDOM from 'react-dom'; //and insert it to the DOM
import YTSearch from 'youtube-api-search';
import SearchBar from '../src/components/search_bar';
import VideoList from '../src/components/video_list';
const API_KEY = 'AIzaSyAZhexzN9kifX3HlaNU5AHXE2Utok8N6wg';

class App extends Component {
	
	constructor(props){
		super(props);
		
		this.state = { videos: [] };
		
		//search function
		YTSearch({key: API_KEY, term: 'golden'}, (videos) => {
			console.log(videos);
			this.setState({videos});
			//this.setState({videos : videos}); whan the key and the value are the same word
											  //we can short them together to one word
		}); 
	}
		
	render() {
		return (
			<div>
			  <SearchBar/>
			  <VideoList videos={this.state.videos}/> 
			</div>
		);
	}
}

//'App' = component-class
//'<App></App>' = instance of component-class


ReactDOM.render(<App/>, document.querySelector('.container'));