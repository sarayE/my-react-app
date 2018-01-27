import React from 'react'; //React.createElement to create the component
import ReactDOM from 'react-dom'; //and insert it to the DOM
import YTSearch from 'youtube-api-search';
import SearchBar from '../src/components/search_bar';

const API_KEY = 'AIzaSyAZhexzN9kifX3HlaNU5AHXE2Utok8N6wg';

YTSearch({key: API_KEY, term: 'golden'}, function(data) {
  console.log(data);
}); 

//Create a new component-class:
const App = () => {
return (
    <div>
      <SearchBar/>
    </div>
  );
}

//'App' = component-class
//'<App></App>' = instance of component-class

//Put the instance of the component into the DOM:
ReactDOM.render(<App/>, document.querySelector('.container'));