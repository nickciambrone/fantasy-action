import React from 'react';
import './view-lines-tile.styles.scss'
import { connect } from "react-redux";
import {addBet, deleteBet} from '../../redux/action/action.actions'

const ViewLinesTile = (props) => {
    return(
        <div
        className={`${props.betSlip.includes(props.id)?'activated ' :''}click-lines-button`}
        
        style={{ marginBottom: "3px" }}
        id = {props.id}
        onClick = {
          props.betSlip.includes(props.id) ? 
          (e)=>props.deleteBet(props.id)
:
          (e)=>props.addBet({id:props.id, amount:'',  line: props.line})
        }
      >
        {props.children}
      </div>
    )

}
const mapStateToProps = state =>({
  betSlip:state.action.slip.map(ele=>ele.id)
})
const mapDispatchToProps = (dispatch) => ({
  addBet: (e) => dispatch(addBet(e)),
  deleteBet: (e) => dispatch(deleteBet(e)),

});
export default connect(mapStateToProps, mapDispatchToProps)(ViewLinesTile);
