import React from 'react';
import crown from './crown-dynamic-color.png'
import './title-container.styles.scss'
import {withRouter} from 'react-router-dom'
const TitleContainer = ({history}) =>{
    return (
        <div className = 'title-container'>
        <h1 className = 'app-title-banner' style = {{fontFamily:'Comfortaa' , backgroundColor:"lightgrey", fontWeight:'600'}}><img height='27px' alt='crown logo' src={crown} style={{marginBottom:'5px', marginRight:'4px', }} onClick = { ()=>{history.push('/')}}/>Fantasy Football Royale</h1>
        </div> 
    )
}

export default withRouter(TitleContainer);