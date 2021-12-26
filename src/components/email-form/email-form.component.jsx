import React from "react";
import { connect } from "react-redux";
import {
  signInWithGoogle,
  addBetToUserObject,
} from "../../firebase/firebase.utils.js";
import { updateBetHistory } from "../../redux/user/user.action.js";
import { createBetslipCollection } from "../../firebase/firebase.utils.js";
import { withRouter, Link } from "react-router-dom";
import Check from "./success-green-check-mark.svg";
import SignUpWithGoogle from "../../components/sign-up-with-google/sign-up-with-google.component";
import SignUpWithFacebook from "../../components/sign-up-with-facebook/sign-up-with-facebook.component";
import { clearBets } from "../../redux/action/action.actions.js";
import { clearRosters } from "../../redux/lineup/lineup.actions.js";
class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      opponentEmail: "",
      betSubmitted:false
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  placeWager = async (event) => {
    event.preventDefault();
    const betRef = await addBetToUserObject(
      this.props.betSlip,
      this.props.userTeam,
      this.props.opponentTeam,
      this.props.currentUser.id,
      this.state.userEmail,
      this.state.opponentEmail
    );

    betRef.onSnapshot((snapShot) => {
      console.log(snapShot);
      this.props.updateBetHistory({
        ...snapShot.data(),
      });
    });
    this.setState({betSubmitted:true})
  };

  render() {
    return (
      <form
        onSubmit={this.placeWager}
        style={{
          textAlign: "left",
          padding: "10px 13px",
          backgroundColor: "white",
        }}
      >
        {!this.state.betSubmitted ? (
          <div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="userEmail"
                aria-describedby="emailHelp"
                name="to_name"
                onChange={this.handleChange}
                value={this.state.userEmail}
                required
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Opponent Email
              </label>
              <input
                type="email"
                className="form-control"
                id="opponentEmail"
                aria-describedby="emailHelp"
                name="to_name"
                onChange={this.handleChange}
                value={this.state.opponentEmail}
                required
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                I would like to receive marketing material
              </label>
            </div>
          </div>
        ) : (
          ""
        )}

        {this.props.currentUser ? (
          this.state.betSubmitted ? (
            <span
              style={{
                fontSize: "13px",
                marginRight: "3px",
                fontWeight: "600",
              }}
            >
              Bet placed
            </span>
          ) : (
            <input
              type="submit"
              value="Place Bets"
              style={{
                backgroundColor: "#4285f4",
                color: "white",
                padding: "10px 25px",
                fontWeight: "600",
                fontSize: "16px",
              }}
            ></input>
          )
        ) : (
          <div>
            <SignUpWithGoogle />
            <SignUpWithFacebook />
          </div>
        )}
        {this.state.betSubmitted ? (
          <img src={Check} height="40px" alt="success" />
        ) : (
          ""
        )}
        {this.state.betSubmitted ? (
          <div>
            <p style={{ marginTop: "4px", fontSize: "14px" }}>
              Press the home button to view your bet history <br />
            </p>
            <p style={{ marginTop: "4px", fontSize: "14px" }}>
              Edit wagers, lineups, or format to place another bet <br />
            </p>
          </div>
        ) : (
          ""
        )}
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  betSlip: state.action.slip,
  userTeam: state.lineup.userTeam,
  opponentTeam: state.lineup.opponentTeam,
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  updateBetHistory: (bet) => dispatch(updateBetHistory(bet)),
  clearBets: () => dispatch(clearBets()),
  clearRosters: () => dispatch(clearRosters()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EmailForm)
);
