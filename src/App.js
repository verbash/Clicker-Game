import React, { Component } from 'react';
import './App.css';
import BlackBox from './components/BlackBox';
import images from './images.json'
import "bootstrap/dist/css/bootstrap.css"

class App extends Component {
  state = { 
    images,
    highScore: 0,
    yourScore: 0

   }

  shuffle = () => {
    this.state.images.sort(() => Math.random() - 0.5);
  }
//functions
   clickedIt = ({target}) => {
    
    const {id} = target;
    console.log('test',id);
this.setState({
   yourScore:this.state.yourScore + 1
  })
    this.shuffle();
    console.log(this.state.images)

   }

  render() { 
    console.log (images)
    return (
    <div>
    <h1>Color Clicker</h1>
    <h2>high score: {this.state.highScore} </h2>
    <h2>your score: {this.state.yourScore} </h2> 
<div className="row">
{this.state.images.map(newItem => (
  <BlackBox 
  key={newItem.id}
  id={newItem.id}
  url={newItem.url}
  iWasClicked={this.clickedIt}
  />
))}
      </div>

    </div>
      
      );
  }
}
 
export default App;
