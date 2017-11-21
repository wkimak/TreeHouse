import React from 'react';

function RemovePlayer(props){

return(
   <div>
      <button className="removeBtn" onClick={props.remove}> Remove </button>
   </div>
	);
}

export default RemovePlayer;
