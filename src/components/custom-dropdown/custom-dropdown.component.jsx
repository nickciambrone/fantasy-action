import React from 'react';
import './custom-dropdown.styles.scss'

export const CustomDropdown = ({position, options, defaultOption, onChange}) =>{
return(
    <div className='custom-dropdown'>

    <select name="player-quantity" id={position} defaultValue={defaultOption} onChange={onChange}>
    {
     options.map((option)=> <option value={option}>{option}</option>)  
    }
      </select>
    </div>
)
}