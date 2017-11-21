import React, { Component } from 'react';
import Header from './Components/Header';
import Players from './Components/Players';
import Stats from './Components/Stats';
import AddPlayerForm from './Components/AddPlayerForm';
import StopWatch from './Components/StopWatch';


 var playersArray = [
    {
  name: "William",
  score: 21,
  id: 1
},
{
  name: "Jack",
  score: 11,
  id: 2
},
{
  name: "Suzan",
  score: 32,
  id: 3
},
{
  name: "Vanessa",
  score: 5,
  id: 4
}
  ]

  var nextId = 5;



class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      initialPlayers: playersArray,
      totalPlayers: playersArray.length,
      totalPoints: 0,
    }
    this.addPlayer = this.addPlayer.bind(this);
  }

  incrementScore(index){
    this.setState({
     score: this.state.initialPlayers[index].score += 1,
    });
  }

  decrementScore(index){
    this.setState({
      score: this.state.initialPlayers[index].score -= 1,
    });
  }

 addPlayer(name){
 this.state.initialPlayers.push({
  name: name,
  score: 0,
  id: nextId,
 });

this.setState(this.state);
nextId++;
 }

 removePlayer(index){
this.state.initialPlayers.splice(index,1);

this.setState(this.state);
 }


  render() {
    return (
     <div className="container">
       <Header title = "Scoreboard" />
       <StopWatch />

       <Stats players={this.state.initialPlayers} />
       <AddPlayerForm onAdd={this.addPlayer} />
     
       {this.state.initialPlayers.map(function(val,index){
        return(
       <Players
       remove = {function(){this.removePlayer(index)}.bind(this)}
       increment = {function(){this.incrementScore(index)}.bind(this)}
       decrement = {function(){this.decrementScore(index)}.bind(this)}
       name = {val.name}
       score = {val.score}
       key = {val.id} />
        ); 
       }.bind(this))}

     </div>

    );
  }
}

export default App;
