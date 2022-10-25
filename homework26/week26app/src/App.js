import React from 'react';

import logo from './logo.svg';
import './App.css';
import './components/Cat/Cat'
import Cat from './components/Cat/Cat';

const pics = [
  {name:"Кроссы!", src: "https://www.freevector.com/uploads/vector/preview/7802/FreeVector-Colorful-Shoes.jpg",description:"Крутые!"},
  {name:"Узор!", src: "https://www.freevector.com/uploads/vector/preview/23874/DD_Colorful_Abstract_Background_00493.jpg",description:"Треугольный!"},
  {name:"Котики!", src: "https://www.freevector.com/uploads/vector/preview/24601/colorful-cats-vector-background.jpg",description:"Милые коты!"}
];



class App extends React.Component {
  render() {
    return (
      <div className="App">
        {pics.map((pic) => 
        <Cat name={pic.name} src={pic.src} description={pic.description}></Cat>)} 
      </div>
    );
  }
}

export default App;
