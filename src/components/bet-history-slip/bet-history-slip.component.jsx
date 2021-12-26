import React  from "react";
import "./bet-history-slip.styles.scss";
import {withRouter} from 'react-router-dom';

class BetHistorySlip extends React.Component {
 
  componentDidMount = ()=>{
    window.scrollTo(0, 0);
    console.log('fired')

  }
  render(){
    let {history, bet, match} = this.props;
    let betID = bet.createdAt['seconds']
    console.log(betID);
    console.log(match.path);
    const toDateTime = (secs) => {
      var t = new Date(1970, 0, 1); // Epoch
      t.setSeconds(secs);
      return t;
    };
  return (
    
    <div
      className="bet-history-slip"
      style={{ height: "175px", fontSize: "13px" }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="left-history-container">
          <div className="bet-history-email-container">
            <span>User Email: </span>
            <span style={{ marginBottom: "4px" }}>{bet["userEmail"]}</span>
          </div>
          <div className="bet-history-email-container">
            <span>Opponent Email: </span>
            <span style={{ marginBottom: "4px" }}>{bet["opponentEmail"]}</span>
          </div>
        </div>
        <div style={{width:'20%', backgroundColor:'white'}}>
      <svg onClick ={()=>history.push(`${match.path}/${betID}`)}  style={{marginTop:'25px'}} role="img" aria-labelledby="title" class="sportsbook__icon--tool-tip-outlined" width="30" height="30" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Tooltip icon representing more supplementary information is present</title><rect class="sportsbook__icon--tool-tip-outlined" x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="black"></rect><path class="sportsbook__icon--tool-tip-outlined i" d="M7.13086 12H8.85938V6.56543H7.13086V12ZM7.99512 5.83789C8.49805 5.83789 8.91309 5.44238 8.91309 4.93945C8.91309 4.43652 8.49805 4.03613 7.99512 4.03613C7.49219 4.03613 7.07715 4.43652 7.07715 4.93945C7.07715 5.44238 7.49219 5.83789 7.99512 5.83789Z" fill="black"></path></svg>      </div>
      </div>
      <div style={{ width: "20%", backgroundColor: "white" }}></div>
      <div
        className="bet-history-email-container"
        style={{ borderTop: "1px lightgrey solid" }}
      >
        <span>Bet placed at:</span>{" "}
        <span>
          {JSON.stringify(
            toDateTime(
              bet["createdAt"]["seconds"] +
                bet["createdAt"]["nanoseconds"] / 1000000000 +
                7200
            )
          )
            .substring(1, 17)
            .replace("T", " ")
            .replace("00:", "12:")
            .replace('13:','1:')
            .replace('14:','2:')
            .replace('15:','3:')
            .replace('16:','4:')
            .replace('17:','5:')
            .replace('18:','6:')
            .replace('19:','7:')
            .replace('20:','8:')
            .replace('21:','9:')
            .replace('22:','10:')
          }
        </span>
      </div>
    </div>
  );
};
}

export default withRouter(BetHistorySlip);
