import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Lineups from "../lineups/lineups.component";
import BetReceipt from "../bet-receipt/bet-receipt.component";
import "./bet-details.styles.scss";

class BetDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.betHistory.filter(ele=>ele['createdAt']['seconds']==this.props.match.params.betId)[0]['betSlip'][0]['type']
    };
  }
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
console.log(this.props.betHistory)
  console.log(this.props.match.params.betId)
    const toDateTime = (secs) => {
      var t = new Date(1970, 0, 1); // Epoch
      t.setSeconds(secs);
      return t;
    };
    const activeBet = this.props.betHistory.filter(
      (ele) => ele["createdAt"].seconds == this.props.match.params.betId
    )[0];

    let betPlacedAt = JSON.stringify(
      toDateTime(
        activeBet["createdAt"]["seconds"] +
          activeBet["createdAt"]["nanoseconds"] / 1000000000 +
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
      .replace('23:','11:')
      .replace('24:','12:')


console.log(activeBet)
    let betTypes = Object.keys(activeBet.betSlip).map((ele) => activeBet.betSlip[ele]['type']);
    console.log(betTypes);
    return (
      <div className="bet-details">
        <h3>Bet Details:</h3>
        <div
          className="bet-info-card-details"
          style={{ backgroundColor: "#242424", color: "white", padding: "7px" }}
        >
          <h4>Bet placed at: {betPlacedAt}</h4>
          <h4>User Email: {activeBet.userEmail}</h4>
          <h4>Opponent Email: {activeBet.opponentEmail}</h4>
        </div>
      <div className = 'switcher-and-lineups'>
        <div className="select-receipt-type-container" style={{}}>
          <div
            className="receipt-type-header"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              boxShadow: '0 1px 2px 1px #ddd'
            }}
          >
            {betTypes.map((ele) => (
              <div
                className="receipt-info-nav-item"
                style={{
                  width: "100%",
                  borderRight: ".5px solid black",
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                }}
                onClick={() => this.setState({ type: ele })}
              >
                <span className="receipt-type" id={ele}>
                  {ele}
                </span>
                {console.log(ele)}
                {console.log(this.state.type)}
                <span
                  className={`bet-type-nav ${
                    this.state.type === ele ? "highlighted-bet" : ""
                  }`}
                  style={{
                    width: "75%",
                    marginLeft: "12.5%",
                    height: "3px",
                  }}
                ></span>
              </div>
            ))}
          </div>
          <div className="bet-summary" style = {{boxShadow: '0 1px 2px 1px #ddd'}}>
            {Object.keys(activeBet.betSlip).map((ele) =>
              activeBet.betSlip[ele]["type"] === this.state.type ? <BetReceipt bet={activeBet.betSlip[ele]} /> : ""
            )}
          </div>
        </div>
        <Lineups
          userTeam={activeBet.userTeam}
          selectOpponentTotalProjected={120}
          selectUserTotalProjected={120}
          opponentTeam={activeBet.opponentTeam}
        />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUserID: state.user.currentUser.id,
  betHistory: state.user.currentUser.betHistory,
});

export default connect(mapStateToProps, null)(withRouter(BetDetails));
