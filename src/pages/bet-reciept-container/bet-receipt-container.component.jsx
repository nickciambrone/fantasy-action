import React from "react";
import BetReceipt from "../../components/bet-receipt/bet-receipt.component.jsx";
import { connect } from "react-redux";
import "./bet-receipt-container.styles.scss";
import BetCard from "../../components/bet-card/bet-card.component";
import { withRouter } from "react-router-dom";
import EmailForm from "../../components/email-form/email-form.component";
import Sidebar from "../../components/sidebar/sidebar.component";
import Header from "../../components/header/header.component";
import { updateBetHistory } from "../../redux/user/user.action.js";
import {
  signInWithGoogle,
  addBetToUserObject,
} from "../../firebase/firebase.utils.js";
import ChangeFormatButton from "../../components/change-format-button/change-format-button.component.js";
import { setBetsFalse, clearBets } from "../../redux/action/action.actions.js";
import SignIn from "../../components/sign-in/sign-in.component.jsx";
import SignUp from "../../components/sign-up/sign-up.component.jsx";

class BetReceiptContainer extends React.Component {
  constructor(props) {
    super(props);
  
  }
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  placeWager = async () => {
    const betRef = await addBetToUserObject(
      this.props.betSlip,
      this.props.userTeam,
      this.props.opponentTeam,
      this.props.currentUser.id,
      "",
      ""
    );
    if (betRef) {
      await betRef.onSnapshot((snapShot) => {
        console.log(snapShot);
        this.props.updateBetHistory({
          ...snapShot.data(),
        });
      });
      this.props.clearBets();
      this.props.history.push("/home");
    } else {
      alert("Bet not submitted, refresh the page and try again");
    }
    window.location.reload(false);

  };

  render() {
    let {
      betSlip,
      history,
      setBetsFalse,
      userTeam,
      opponentTeam,
      currentUser,
      updateBetHistory,
    } = this.props;
    let bets = betSlip.map((ele) => ele["type"]);
    console.log(betSlip);

    return (
      <div className="bet-receipt-container">
        <Header />
        <div className = 'bet-receipt-content-main'>
          <div  className='sidebar-container-brc'>
            <Sidebar />
          </div>
          {!currentUser ? this.props.hasAccount ? <div class="sign-in-sign-up-new">
            <SignIn />
            </div>:
            <div class="sign-in-sign-up-new">
            <SignUp />
          </div> : ""}
          <div>
            {" "}
            
          </div>
          <div>
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
                {currentUser ? (
                  <button
                    style={{
                      width: "120px",
                      padding: "8px 15px",
                      backgroundColor: "#53d337",
                      color: "#061004",
                      fontFamily: "arial",
                      fontWeight: "bolder",
                      borderRadius: "5px",
                      fontSize: "14px",
                    }}
                    onClick={() => this.placeWager()}
                  >
                    Submit
                  </button>
                ) : (
                  <div style={{ display: "flex" }}>
                    <h4
                      style={{
                        width: "50%",
                        marginLeft: "25%",
                        padding: "8px 15px",
                        fontWeight: "bolder",
                      }}
                    >
                      Sign up or Log in to place bets
                    </h4>
                  </div>
                )}
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
  userTeam: state.lineup.userTeam,
  opponentTeam: state.lineup.opponentTeam,
  currentUser: state.user.currentUser,
  hasAccount:state.user.hasAccount
});

const mapDispatchToProps = (dispatch) => ({
  updateBetHistory: (bet) => dispatch(updateBetHistory(bet)),
  setBetsFalse: () => dispatch(setBetsFalse()),
  clearBets: () => dispatch(clearBets()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BetReceiptContainer)
);
