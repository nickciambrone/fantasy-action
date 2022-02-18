import React from 'react';
import {connect} from 'react-redux'
import './pill.styles.scss'
import {changePosition} from '../../redux/lineup/lineup.actions'

const Pill= ({items, selectedItem, changePosition}) =>{
    return (
        <div className='pill'>

        <span className='position-label'>Position:</span>
        
       { 
           items.map((item,index) => 
            <div id={item===selectedItem ? 'selected' : ''}
            className='position-option'
            onClick={()=>changePosition(item)}>{item }


            </div>)}
       
        </div>


    )
}
const mapDispatchToProps = dispatch =>({
    changePosition: item => dispatch(changePosition(item))
  })

export default connect(null, mapDispatchToProps)(Pill)