import React from "react";
import "./bet-history-slip.styles.scss";
import { withRouter } from "react-router-dom";
import Dropdown from './dropdownArrow.png';
class BetHistorySlip extends React.Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    let { history, bet, match } = this.props;
    let betID = bet.createdAt["seconds"];
    // console.log(bet);
    const toDateTime = (secs) => {
      var t = new Date(1970, 0, 1); // Epoch
      t.setSeconds(secs);
      return t;
    };
    console.log(bet["betSlip"]);
    return (
      <div
        className="bet-history-slip"
        style={{ fontSize: "13px" }}
      >
        <div style={{ display: "flex", flexDirection: "row", flexWrap:'wrap' }}>
        <div
        style={{
          width: "10%",
        }}
      >
      <img width='100%' src={Dropdown}/>
      </div>
        <div style={{ display: "flex", flexDirection: "row", width:'90%' , justifyContent:'flex-start', flexWrap:'wrap'}}>
      
        {Object.keys(bet["betSlip"]).map((ele) => (
            <div className="history-container-segment" style={{border:'1px solid lightgrey', width:'30%'}}>
              <div style={{ display: "flex", flexWrap:'wrap' }}>
                <div style={{ paddingLeft: "5px" }}>
                  <b>{bet["betSlip"][ele]["id"].includes("0") ? "Over" : "Under"}-</b>
                </div>
                <div style={{ paddingLeft: "5px" }}>
                  {bet["betSlip"][ele]["overUnder"]}
                </div>
              </div>
              <div className="bet-history-email-container" >
                <span>Risk: </span>
                <span style={{ marginBottom: "4px" }}>
                  $
                  {JSON.stringify(Math.round(bet["betSlip"][ele]["amount"]*100)/100).replace(
                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                    "$1,"
                  )}
                </span>
              </div>
              <div className="bet-history-email-container" >
                <span>To Win: </span>
                <span style={{ marginBottom: "4px" }}>
                  $
                  {JSON.stringify(Math.round(bet["betSlip"][ele]["toWin"]*100)/100).replace(
                    /(\d)(?=(\d\d\d)+(?!\d))/g,
                    "$1,"
                  )}
                </span>
              </div>
              
            </div>
          ))}
          </div>  

          </div>
        
        <div style={{ width: "20%", backgroundColor: "white" }}></div>
        <div
          className="bet-history-email-container"
          style={{ borderTop: "1px lightgrey solid" , color:'white', padding:'5px'}}
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
          </span>
        </div>
      </div>
    );
  }
}

export default withRouter(BetHistorySlip);
