import React from 'react';
import { connect } from "react-redux";
import './bet-slip.styles.scss'
import BetCard from '../bet-card/bet-card.component'
import ClearBetSlip from '../clear-bet-slip/clear-bet-slip.component'
import ClearBetSlipWarning from '../clear-bet-slip-warning/clear-bet-slip-warning.component'
import LogInPlaceBet from '../log-in-place-bet/log-in-place-bet.component'
const BetSlip = ({betSlip, clearBetWarning}) =>{
    return (
        <div className='bet-slip'>
        <div className = 'bet-slip-header' style = {{display:'flex', flexDirection:'column'}}>
        <div style = {{display:'flex', flexDirection:'row'}}>
        <div className = 'bet-slip-count-container' style = {{width:'15%'}}>
        <span id = 'bet-slip-count' >{betSlip.length}</span>
        </div>
        <div className = 'bet-slip-header-and-i'>
        
        <h2 style={{marginRight:'4px'}}>BET SLIP</h2> 
        
        </div>
    <ClearBetSlip />
       </div>
       {clearBetWarning ? <ClearBetSlipWarning /> :''}


       </div>
       {betSlip.length===0 ? <div className = 'empty-bets-message'>Picks appear here</div>:''}

       {betSlip.length===0 ? <div className = 'empty-bets-message-2'>Place a bet in the area above and see the different combinations available</div>:''}


           <div className='bet-cards'> 
           {betSlip.map(ele=><BetCard allowOnChange = {true} xBetPresent={true} bet={ele}/>)}
           </div>
           {betSlip.length>0?
            <div><LogInPlaceBet /></div> :
            ""}

        </div>
    )
}

const mapStateToProps = state =>({
    betSlip:state.action.slip,
    clearBetWarning:state.action.clearBetWarning


})
const matDispatchToProps = state =>({

})
export default connect(mapStateToProps, matDispatchToProps)(BetSlip)