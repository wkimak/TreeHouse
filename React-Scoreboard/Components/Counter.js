import React from "react";

function Counter(props){

return(
    
    <div className="counter">
       <button type="button" className="increment" onClick={props.increment}> + </button>
      <div className="score">
        <div> {props.score} </div>
      </div>    
       <button type="button" className="decrement" onClick={props.decrement}> - </button>
    </div>

	);
}




export default Counter;
