import React from "react";
import { withRouter } from "react-router-dom";
import BetHistorySlip from "../bet-history-slip/bet-history-slip.component";
import PlusButton from "./plus-svgrepo-com.svg";
import { connect } from "react-redux";
import betSlipComponent from "../bet-slip/bet-slip.component";

class BetHistorySlipContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    window.scrollTo(0, 0);
    document.body.style.zoom = "100%";
  };
  componentWillUnmount = () => {};

  render() {
    let { betHistory, history } = this.props;
    let tempBetSlip = [];
    let tempBetHistory = betHistory;
    let times = [];
    if (tempBetHistory) {
    if (tempBetHistory.length > 0) {
      for (const bet in tempBetHistory) {
        console.log(tempBetHistory[bet]);
        if (Object.keys(tempBetHistory[bet]).length>0) {
          times.push(tempBetHistory[bet]["createdAt"]["seconds"]);
        }
      }
      times = times.sort().reverse();
      for (const time in times) {
        for (const bet in tempBetHistory) {
          if (Object.keys(tempBetHistory[bet]).length>0) {
            if (tempBetHistory[bet].createdAt["seconds"] == times[time]) {
              tempBetSlip.push(tempBetHistory[bet]);
            }
          }
        }
      }
    }
  }
    return (
      <div className="bet-history-slip-container">
        <h3 style={{ marginTop: "5px" }}>Your past wagers:</h3>

        {tempBetSlip.length === 0 ? (
          <span
            style={{
              marginBottom: "20px",
              backgroundColor: "white",
              padding: "5px",
              borderRadius: "3px",
              fontSize: "13px",
              fontWeight: "400",
            }}
          >
            When you place a wager, it will appear here. Press the plus sign
            below to add set your lineup and place a new wager.{" "}
          </span>
        ) : (
          tempBetSlip.map((ele) => <BetHistorySlip bet={ele} />)
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          <img
            src={PlusButton}
            alt="plus button"
            height="55px"
            width="55px"
            onClick={() => history.push("/set-lineup")}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  betHistory: state.user.currentUser.betHistory,
  currentUser: state.user.currentUser,
});
export default withRouter(
  connect(mapStateToProps, null)(BetHistorySlipContainer)
);