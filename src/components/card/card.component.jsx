import React from 'react';
import {connect} from 'react-redux';
import {addPlayer} from '../../redux/lineup/lineup.actions'
import {selectOpponentPlayers, selectUserPlayers} from '../../redux/lineup/lineup.selectors'
import './card.style.scss'
const Card = ({player, position, team, counter, addPlayer, points, userPlayers, opponentPlayers, activeTeam}) => 
{
  let projectedPoints = points / 16
  let disabled = false;
    opponentPlayers.forEach((ele, ind)=>{
      if (ele===player){
        disabled=true;
      }
    })
  
    userPlayers.forEach((ele, ind)=>{
      if (ele===player){
        disabled=true;
      }
    })


  return ( <div className={`card-container ${disabled===true ? 'disabled' : 'enabled'}`}>
        <img alt='player' src = {`https://robohash.org/${counter}?set=set2&size=180x180`} height='40px'></img>
       <div className='player-name'>{player}</div> 
       <div className='position-and-team'>{position} - &nbsp;
       {team}</div>
          <span className="glyphicon glyphicon-plus" onClick={() => addPlayer({player,position,team, projectedPoints})}></span>
           </div>)
}

const mapStateToProps = state =>({
  userTeam: state.lineup.userTeam,
  opponentTeam: state.lineup.opponentTeam,
  userPlayers: selectUserPlayers(state),
  opponentPlayers: selectOpponentPlayers(state),
  activeTeam:state.lineup.team

})
const mapDispatchToProps = dispatch =>({
  addPlayer: (playerInfo) => dispatch(addPlayer(playerInfo)),

})

export default connect(mapStateToProps, mapDispatchToProps)(Card);