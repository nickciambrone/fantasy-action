import React from "react";
import { connect } from "react-redux";
import { deleteBet } from "../../redux/action/action.actions";
import { updateWager } from "../../redux/action/action.actions";
import {
  selectUserTotalProjected,
} from "../../redux/lineup/lineup.selectors.js";
import { selectOpponentTotalProjected } from "../../redux/lineup/lineup.selectors.js";
import { checkAllBetAmountsPresent } from "../../redux/action/action.selectors.js";

import "./bet-card.styles.scss";
class BetCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: "" };
  }

  handleAmountChange = (event) => {
    this.setState({ amount: event.target.value });
    let tempBet = this.props.bet;
    tempBet["amount"] = parseFloat(event.target.value);
    tempBet["toWin"] = this.calculateReturn(
      event.target.value,
      this.props.bet.line
    );

    this.props.updateWager(tempBet);
  };

  
  calculateReturn = (amount, moneyline) => {
    return parseInt(moneyline) > 0
      ? Math.round((parseInt(moneyline) / 100) * amount * 100) / 100
      : Math.round((-100 / parseInt(moneyline)) * amount * 100) / 100;
  };
  selectWager = (betId) => {
    return this.props.slip.filter((ele) => ele["id"] === betId)[0]["amount"];
  };
  selectToWin = (betId) => {
    return this.props.slip.filter((ele) => ele["id"] === betId)[0]["toWin"];
  };
  render() {
    const {
      bet,
      deleteBet,
      difference,
      selectOverUnder,
      checkAllBetAmountsPresent,
      xBetPresent,
      allowOnChange,
      selectUserTotalProjected
    } = this.props;
    return (
      <div className="bet-card">
        {xBetPresent ? (
          <div className="x-bet-container">
            <svg
              role="img"
              aria-label="Close"
              class="sportsbook__icon--ex"
              fill="#ababab"
              width="20"
              height="20"
              viewBox="0 0 32 32"
              onClick={() => deleteBet(bet.id)}
            >
              <title>Icon representing an X shape</title>
              <path d="M18.848 16.384l10.848-10.848c0.352-0.352 0.352-0.96 0-1.312l-1.44-1.44c-0.352-0.352-0.96-0.352-1.312 0l-10.88 10.848h-0.032l-10.816-10.848c-0.352-0.352-0.96-0.352-1.312 0l-1.44 1.44c-0.352 0.352-0.352 0.96 0 1.312l10.848 10.848v0.032l-10.624 10.656c-0.352 0.352-0.352 0.96 0 1.312l1.44 1.44c0.352 0.352 0.96 0.352 1.312 0l10.656-10.656h0.032l10.656 10.656c0.352 0.352 0.96 0.352 1.312 0l1.44-1.44c0.352-0.352 0.352-0.96 0-1.312l-10.688-10.688c-0.032 0.032-0.032 0.032 0 0z"></path>
            </svg>
          </div>
        ) : (
          ""
        )}

        <div
          className="bet-info-container"
          style={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
          <div
            className="bet-subject-container"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              padding: "5px",
            }}
          >
            <div className="bet-subject" style={{ textAlign: "left" }}>
              <b>
                {" "}
                {bet.id === "su" && difference > 0
                  ? "User " +
                    "+" +
                    parseFloat(Math.round(difference * 100) / 100)
                  : bet.id === "su" && difference < 0
                  ? "User " + parseFloat(Math.round(difference * 100) / 100)
                  : bet.id === "u"
                  ? "Under " + parseInt(selectOverUnder)
                  : bet.id === "o"
                  ? "Over " + parseInt(selectOverUnder)
                  : bet.id === "so" && difference > 0
                  ? "Opponent " +
                    parseFloat(Math.round(difference * 100) / 100) * -1
                  : bet.id === "so" && difference < 0
                  ? "Opponent " +
                    "+" +
                    parseFloat(Math.round(difference * 100) / 100) * -1
                  : bet.id === "mu"
                  ? "User"
                  : bet.id === "mo"
                  ? "Opponent"
                  : ""}
              </b>
            </div>
            <div className="bet-type" style={{ textAlign: "left", display:'flex', flexDirection:'column' }}>
              <b>
                {bet.id.includes('0') ? "OVER" : "UNDER"}
                </b>
            <span>
            {bet.id.includes('a') ? Math.round((selectUserTotalProjected-20)*100)/100 :''}
            {bet.id.includes('b') ? Math.round((selectUserTotalProjected)*100)/100 :''}
            {bet.id.includes('c') ? Math.round((selectUserTotalProjected+20)*100)/100 :''}

            </span>

            </div>
          </div>
          <div
            className="amount-and-line"
            style={{
              width: "60%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                textAlign: "right",
                fontWeight: "800",
              }}
            >
              {bet.line<0 ? bet.line : '+'+bet.line}
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {allowOnChange ? (
                <div
                  style={{
                    display: "flex",
                    textAlign: "right",
                    marginLeft:'auto',
                    marginRight:0,
                    width: "100%",
                  }}
                >
                <span style = {{width:'30%'}}></span>
                  <div class="betslip-wager" style = {{width:'20%'}}>$</div>
                  <input
                    style={{ width: "50%" }}
                    onChange={this.handleAmountChange}
                    step={0.01}
                    type="number"
                    placeholder="0.00"
                    class="betslip-wager-box"
                    id="betslip-wager-box__input-0"
                    // pattern="^[0-9]*[.,]{0,1}[0-9]{0,2}$"
                    max="999999.99"
                    min="0.1"
                    title="Bet Wager Amount"
                    maxLength="5"
                    value={this.selectWager(bet.id)}
                  ></input>{" "}
                </div>
              ) : (
                <div style={{ width: "100%", textAlign:'right' }}>
                  {" "}
                  Risk: <span>${this.selectWager(bet.id)}</span>
                </div>
              )}
              {this.selectToWin(bet.id) > 0 ? (
                <div
                  style={{
                    textAlign: "right",
                    fontWeight: "600",
                    fontFamily: "arial",
                  }}
                >
                  To win: $
                  <span>
                    {this.selectToWin(bet.id)
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </span>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  difference:
    selectOpponentTotalProjected(state) - selectUserTotalProjected(state),
  selectUserTotalProjected: selectUserTotalProjected(state),
  selectOpponentTotalProjected: selectOpponentTotalProjected(state),
  selectOverUnder:
    selectUserTotalProjected(state) + selectOpponentTotalProjected(state),
  slip: state.action.slip,
  checkAllBetAmountsPresent: checkAllBetAmountsPresent(state),
});
const mapDispatchToProps = (dispatch) => ({
  deleteBet: (e) => dispatch(deleteBet(e)),
  updateWager: (wager) => dispatch(updateWager(wager)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BetCard);
