import React from 'react'
import next from './lightGreenArrowTransparent.png'
import {withRouter} from 'react-router-dom'
import './log-in-place-bet.styles.scss'
import {checkAllBetAmountsPresent} from '../../redux/action/action.selectors.js'
import {connect} from 'react-redux'
import { useHistory } from 'react-router'

const LogInPlaceBet = ({checkAllBetAmountsPresent}) =>
 {
     const history = useHistory()


return (

       <div className ={`log-in-place-bet ${checkAllBetAmountsPresent ? 'enabled' : 'disabled'}`} onClick = {checkAllBetAmountsPresent ? ()=>{history.push('/bet-receipt')} : ''}>
        <span className = 'log-in-place-bet-text'>Place bets</span><img style = {{marginTop:'18px', 'marginLeft':'5px'}}  height='20px' src={next} alt='Log in place bet button'/>
    </div> 
    )
}
const mapStateToProps = state =>({
    checkAllBetAmountsPresent:checkAllBetAmountsPresent(state)
})

export default withRouter(connect(mapStateToProps, null)(LogInPlaceBet));