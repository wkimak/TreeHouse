import React from 'react';
import Counter from './Counter';
import RemovePlayer from './RemovePlayer';

function Players(props){

	return(
    
    <div className="players">
      <div className="name">
        <span> {props.name} </span>
      </div>

    <Counter increment = {props.increment} decrement = {props.decrement} score = {props.score} />

    <RemovePlayer remove = {props.remove} />

    </div>

		);
}

export default Players;
