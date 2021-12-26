import React from 'react';
import {connect} from 'react-redux'
import {toggleClearBetWarning} from '../../redux/action/action.actions'
const ClearBetSlip = ({toggleClearBetWarning, betSlip}) =>{
  
        return(
            
            <div className = 'clear-bet-slip'
            >
            {betSlip.length > 0 ?
            <span
            onClick = {()=>toggleClearBetWarning()}

            >Clear Bet Slip</span>:
            ""
            }
            </div>

        )
    }

const mapStateToProps = state =>({
    betSlip:state.action.slip,

})

const mapDispatchToProps = (dispatch)=>({
    toggleClearBetWarning:()=>dispatch(toggleClearBetWarning())
})

export default connect(mapStateToProps, mapDispatchToProps)(ClearBetSlip);