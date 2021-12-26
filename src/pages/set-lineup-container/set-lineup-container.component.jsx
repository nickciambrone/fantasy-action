import React from 'react'
import SetLineup from '../../components/set-lineup/set-lineup.component'
import SelectFormat from '../../components/select-format/select-format.component'
import {connect} from 'react-redux'
import Header from '../../components/header/header.component'
import TitleContainer from '../../components/title-container/title-container.component'
import './set-lineup-container.styles.scss'

const SetLineUpContainer = ({formatSelected}) =>{
    console.log(formatSelected)


    return(
        <div className='set-lineup-container'>
        
        
        {formatSelected ? <div> <Header /><SetLineup enableResetScrollToCoords={false}/> </div>: <div><TitleContainer /> <SelectFormat/></div>}
        </div>
    )
}

const mapStateToProps = (state)=>({
    formatSelected: state.lineup.formatSelected,
    userTeam: state.lineup.userTeam
  
  })
export default connect(mapStateToProps,null)(SetLineUpContainer)