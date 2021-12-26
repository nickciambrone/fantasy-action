import React from 'react'
import { connect } from 'react-redux';
import './clear-bet-slip-warning.styles.scss'
import {toggleClearBetWarning} from '../../redux/action/action.actions'
import {clearBets} from '../../redux/action/action.actions'


const ClearBetSlipWarning = ({toggleClearBetWarning, clearBets, betSlip})=>(
    <div className = 'clear-bet-slip-warning'>
    { betSlip.length > 0 ?
        <div>
    Are you sure you want to clear all of your picks?
    <div className='clear-bet-buttons-container' style ={{display:'flex', flexDirection:'row'}}>
    <div className = 'clear-bet-buttons-container-option' style = {{width:'50%', textAlign:'center', color:'black'}} onClick = {()=>toggleClearBetWarning()}>Cancel</div>

    <div className = 'clear-bet-buttons-container-option' style = {{width:'50%', textAlign:'center',backgroundColor:'black', color:'white'}} onClick = {()=>clearBets()}>Yes</div>
    </div> 
    </div>:
    ""
    }
    </div>
)

const mapStateToProps = state =>({
    betSlip:state.action.slip,

})
const mapDispatchToProps = (dispatch)=>({
    toggleClearBetWarning:()=>dispatch(toggleClearBetWarning()),
    clearBets : ()=>dispatch(clearBets())
})


export default connect(mapStateToProps, mapDispatchToProps)(ClearBetSlipWarning);