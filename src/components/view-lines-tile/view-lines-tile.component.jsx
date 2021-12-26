import React from 'react';
import './view-lines-tile.styles.scss'
import { connect } from "react-redux";
import {addBet} from '../../redux/action/action.actions'
import { deleteBet } from "../../redux/action/action.actions";

const ViewLinesTile = (props) => {
    return(
        <span
        className={`${props.betSlip.includes(props.id)?'activated ' :''}click-lines-button`}
        
        style={{ marginBottom: "3px" }}
        id = {props.id}
        onClick = {
          props.betSlip.includes(props.id) ? 
          (e)=>props.deleteBet(props.id)
:
          (e)=>props.addBet({userId:'',id:e.target.id, amount:'', type: props.type, line: props.line, spread:props.spread})
        }
      >
        {props.children}
      </span>
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
