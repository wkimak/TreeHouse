import React from 'react';

class StopWatch extends React.Component{

constructor(props){
	super(props);

	this.state = {
		running: false,
		seconds: 0,
	}
	this.reset = this.reset.bind(this);
  this.onTick = this.onTick.bind(this);
  this.onStart = this.onStart.bind(this);
  this.onStop = this.onStop.bind(this);
}


componentDidMount(){
  console.log(this.state.running);  
  this.count = setInterval(this.onTick,1000);
}


componentWillUnmount(){
	clearInterval(this.count);
}


onTick(){
  if(this.state.running){
  this.setState({
    seconds: this.state.seconds+1,
    running: true,
  });
}
}

onStart(){
  this.setState({
    running: true,
    seconds: this.state.seconds,
  });
}

onStop(){
  this.setState({
    running: false,
  });
}


reset(){
	this.setState({
		seconds: 0,
    running: false,
	});
}



render(){
  return(

   <div className = "stopWatchContainer">
    <div className = "stopWatchScreen"> {this.state.seconds} </div>
   
   {!this.state.running ?
   <button id="startBtn" type="button" onClick={this.onStart}> Start </button>
    :
   <button id="stopBtn" type="button" onClick={this.onStop}> Stop </button>
   }
   <button id="resetBtn" type="button" onClick={this.reset}> Reset </button>
   </div>
   
  	);
}
}

export default StopWatch;
