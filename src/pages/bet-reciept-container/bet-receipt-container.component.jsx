import React from "react";
import BetReceipt from "../../components/bet-receipt/bet-receipt.component.jsx";
import { connect } from "react-redux";
import "./bet-receipt-container.styles.scss";
import BetCard from "../../components/bet-card/bet-card.component";
import { withRouter } from "react-router-dom";
import EmailForm from "../../components/email-form/email-form.component";

import Header from "../../components/header/header.component";

import ChangeFormatButton from "../../components/change-format-button/change-format-button.component.js";
import { setBetsFalse } from "../../redux/action/action.actions.js";
class BetReceiptContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.betSlip[0]["type"],
    };
  }
  componentDidMount = () => {
    window.scrollTo(0, 0);
    
  };

  render() {
    let { betSlip, history, setBetsFalse } = this.props;
    let bets = betSlip.map((ele) => ele["type"]);
    console.log(this.state.type);

    return (
      <div className="bet-receipt-container">
        <Header />
        <div className="bet-receipt-grid">
          <div
            className="enter-emails"
            style={{
              color: "#45403d",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="back-buttons-bet-receipt">
              <div className="cfbb">
                <ChangeFormatButton />
              </div>
              <div
                className="edit-lineup-button-container"
                style={{
                  fontWeight: "bolder",
                  backgroundColor:'#242424',
                  fontSize: "15px",
                  color: "white",
                  height: "40px",
                  textAlign: "center",
                }}
                onClick={() => {
                  setBetsFalse();
                  history.push("/set-lineup");
                }}
              >
                &laquo; Edit Lineup
              </div>
            </div>
            <EmailForm />
          </div>
          <div className="check-bets">
            <div className="bet-slip">
              <div
                className="bet-slip-header"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    className="bet-slip-count-container"
                    style={{ width: "15%" }}
                  >
                    <span id="bet-slip-count">{betSlip.length}</span>
                  </div>
                  <div className="bet-slip-header-and-i">
                    <h2 style={{ marginRight: "4px" }}>BET SLIP</h2>
                  </div>
                  <div
                    className="edit-wagers-button"
                    style={{
                      paddingTop: "6px",
                      paddingBottom: "6px",
                      fontWeight: "bolder",
                      fontSize: "14px",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      border: ".25px solid lightgrey",
                      borderRadius: "1px",
                    }}
                    onClick={() => {
                      history.push("/view-lines");
                    }}
                  >
                    &laquo; Edit Wagers
                  </div>
                </div>
              </div>
              {betSlip.length === 0 ? (
                <div className="empty-bets-message">Picks appear here</div>
              ) : (
                ""
              )}

              {betSlip.length === 0 ? (
                <div className="empty-bets-message-2">
                  Place a bet in the area above and see the different
                  combinations available
                </div>
              ) : (
                ""
              )}

              <div className="bet-cards">
                {betSlip.map((ele) => (
                  <BetCard
                    xBetPresent={false}
                    allowOnChange={false}
                    bet={ele}
                  />
                ))}
              </div>
              <div className="select-receipt-type-container-br">
                <div
                  className="receipt-type-header"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                  }}
                >
                  {bets.map((ele) => (
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
                <div className="bet-summary">
                  {betSlip.map((ele) =>
                    ele["type"] === this.state.type ? (
                      <BetReceipt bet={ele} />
                    ) : (
                      ""
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  betSlip: state.action.slip,
});
const mapDispatchToProps = (dispatch) => ({
  setBetsFalse: () => dispatch(setBetsFalse()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BetReceiptContainer)
);
