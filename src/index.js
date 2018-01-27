import React from 'react'; //render the component
import ReactDOM from 'react-dom'; //and insert it to the DOM

const API_KEY = 'AIzaSyDyVUQGj031McFwo76MhUtIG0W2ZED58cA';

//Create a new component/class:
const App = () => {
  return <div>Hi!</div>; //JSX
}

//'App' = class
//'<App></App>' = instance

//Put the instance of the component into the DOM:
ReactDOM.render(<App/>, document.querySelector('.container'));