import React from "react";
import "./bet-history-slip.styles.scss";
import { withRouter } from "react-router-dom";
import Dropdown from "./dropdownArrow.png";
class BetHistorySlip extends React.Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    let { history, bet, match } = this.props;
    let betID = bet.createdAt["seconds"];
    const toDateTime = (secs) => {
      var t = new Date(1970, 0, 1); // Epoch
      t.setSeconds(secs);
      return t;
    };
    console.log(bet);
    let { createdAt, userTeam, betSlip } = bet;
    return (
      <div className="bet-history-slip" style={{ fontSize: "13px" }}>
  
        {Object.keys(betSlip).map((ele) => (
          <div style={{  display: "flex" , flexDirection:'column', marginBottom:'3px', backgroundColor:'#121212', height:'110px'}}>
          <div style={{  display: "flex" , flexDirection:'row',  height:'80px'}}>
            <div className='dropdown-image-container' style={{paddingTop:'12px'}}>
              <img src={Dropdown} className='dropdown-img'/>
            </div>
            <div style={{ width: "90%", display:'flex' }}>
            <div style={{width:'30%', paddingTop:'12px'}}>
            <b>
            <div style={{ color: "white" }}>{betSlip[ele]['id'].includes('1') ? 'UNDER' : 'OVER'}</div>

            <div style={{ color: "white" }}>{betSlip[ele]['overUnder']}</div>
            </b>
            </div>
            <div style={{paddingTop:'7px'}}>
              <div style={{ color: "white" }}>Line: {parseInt(betSlip[ele]["line"])>0 ? '+'+betSlip[ele]["line"] : betSlip[ele]["line"]}</div>
              <div style={{ color: "white" }}>
                Risk: {'$'+betSlip[ele]["amount"]}
              </div>
              <div style={{ color: "white" }}>
                To win: {'$'+betSlip[ele]["toWin"]}
              </div>
              </div>

            </div>
            </div>
            <div style={{ color: "white", borderTop:'1px solid lightgrey', padding:'4px 0 0 10px' }}>
              Bet placed at: {JSON.stringify(
                toDateTime(
                  bet["createdAt"]["seconds"] +
                    bet["createdAt"]["nanoseconds"] / 1000000000 +
                    7200
                )
              )
                .substring(1, 17)
                .replace("T", " ")
                .replace("00:", "12:")
                .replace("13:", "1:")
                .replace("14:", "2:")
                .replace("15:", "3:")
                .replace("16:", "4:")
                .replace("17:", "5:")
                .replace("18:", "6:")
                .replace("19:", "7:")
                .replace("20:", "8:")
                .replace("21:", "9:")
                .replace("22:", "10:")}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(BetHistorySlip);
