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

//functions

  shuffle = () => {
    this.state.images.sort(() => Math.random() - 0.5);
   
  }

 

  clickedIt = ({target}) => { 
    let {id} = target;
    // let imgIndex  = id-1;
    let stateCopy = Object.assign({}, this.state);
    let i = 0;

    id = parseInt(id);


    for(i = 0; i < stateCopy.images.length; i++){
      //console.log(stateCopy.images[i].id);
      if(stateCopy.images[i].id === id){
        break;
      }
    }

    console.log(stateCopy.images[i]);

    //not clicked
    if(!stateCopy.images[i].beenClicked){
      stateCopy.images[i].beenClicked = true;
      stateCopy.yourScore ++;
      this.setState(stateCopy);  
      this.shuffle();  
    }
    //clicked, reset game
    else{
      this.resetGame();
    }
  }

  // check to see if the clicked item has been clicked before, run resetGame

  // create resetGame function that sets state of yourScore to 0, highScore to yourScore if higher, and sets the state of each images to beenClicked=false

  resetGame = () => {
      let stateCopy = Object.assign({}, this.state);

      //console.log(stateCopy.images);
      
      stateCopy.images = stateCopy.images.map(images => ({ ...images, beenClicked: false }));

      if (stateCopy.yourScore > stateCopy.highScore) {
        stateCopy.highScore = stateCopy.yourScore;
      }
      
      stateCopy.yourScore = 0;
      //console.log(stateCopy.images);
      stateCopy.images.sort(() => Math.random() - 0.5)

      this.setState(stateCopy);
      //this.shuffle();
  }

  render() { 
    //console.log (images)
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
