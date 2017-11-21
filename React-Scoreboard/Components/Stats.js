import React from 'react';

function Stats(props){

  var totalPlayers = props.players.length;

  var totalPoints = props.players.reduce(function(total, item){
    return total + item.score;
  },0);


  return(
      <table>
        <tbody>
          <tr> 
            <td> <b> Total Players: </b> {totalPlayers} </td>
          </tr>
          <tr>
            <td> <b> Total Points: </b> {totalPoints}  </td>
          </tr>  
        </tbody>
      </table>

    );
}

export default Stats;
