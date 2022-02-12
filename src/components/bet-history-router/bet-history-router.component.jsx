import React from 'react';
import './bet-history-router.styles.scss';

const BetHistoryRouter = ({links}) => {
    return (
    <div className='bet-history-router' style = {{display:'flex', flexDirection:'row'}}>
        {links.map(ele=> <div className = 'bet-router-link' style={{borderRadius:'5px', padding:'4px 10px', marginRight:'4px', fontSize:'16px', cursor:'pointer', backgroundColor:'white' }}>{ele}</div>)}
    </div>
    )
}

export default BetHistoryRouter;