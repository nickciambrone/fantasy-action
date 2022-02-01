import React from "react";
import "./sidebar.styles.scss";
import ChangeFormatButton from "../change-format-button/change-format-button.component";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { changePosition } from "../../redux/lineup/lineup.actions";
import { setBetsFalse } from "../../redux/action/action.actions";
import {checkAllBetAmountsPresent} from '../../redux/action/action.selectors.js'

const Sidebar = ({ teamsFull, changePosition, history, formatSelected, checkAllBetAmountsPresent, slip}) => {
  return (
    <div className="sidebar" style={{ backgroundColor: "#242424" }}>
      <div
        className="change-format-button-container bbwb btwb"
        style={{ padding: "12px 0" }}
      >
        {" "}
        {history.location.pathname === "/set-lineup" &&
        formatSelected === false ? (
          <ChangeFormatButton activeGreen={true} />
        ) : (
          <ChangeFormatButton activeGreen={false} />
        )}
      </div>

      <div
        className="edit-lineup-button-container bbwb"
        style={{
          color: "white",
          fontWeight: "bolder",
          fontSize: "15px",
          textAlign: "center",
          padding: "12px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginRight: "5px",
            backgroundColor: "#1a411a",
            padding: "3px",
            height: "30px",
            width: "30px",
            borderRadius: "30px",
          }}
        >
          &#50;{" "}
        </div>

        {
        formatSelected === true ?
        <div
          className={`edit-lineup-text ${
            history.location.pathname === "/set-lineup" &&
            formatSelected === true
              ? "activeGreen"
              : ""
          }`}
          style={{
            backgroundColor: "transparent",
            border: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            setBetsFalse();
            history.push("/set-lineup");
          }}
        >
          Edit Lineup
        </div>:
        <div
        className={`edit-lineup-text ${
          history.location.pathname === "/set-lineup" &&
          formatSelected === true
            ? "activeGreen"
            : ""
        }`}
        style={{
          backgroundColor: "transparent",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: ".3",
              cursor: "not-allowed",
              backgroundColor: "#242424",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
        }}
        onClick={() => {
          setBetsFalse();
          history.push("/set-lineup");
        }}
      >
        Edit Lineup
      </div>}
      </div>
      <div
        className="view-lines-button-link bbwb"
        style={{
          padding: "12px 0",
          backgroundColor: "#242424",
          color: "white",
          fontWeight: "bolder",
          fontSize: "15px",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginRight: "5px",
            backgroundColor: "#1a411a",
            padding: "3px",
            height: "30px",
            width: "30px",
            borderRadius: "30px",
          }}
        >
          &#51;{" "}
        </div>{" "}
        {teamsFull === "true" ? (
          <div
            onClick={() => {
              changePosition("All");
              history.push("/view-lines");
            }}
            className={`view-lines-button ${
              history.location.pathname === "/view-lines" ? "activeGreen" : ""
            }`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            View Lines
          </div>
        ) : (
          <div
            style={{
              opacity: ".3",
              cursor: "not-allowed",
              backgroundColor: "#242424",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="view-lines-button"
          >
            View Lines
          </div>
        )}
      </div>
      <div
        className="place-bets-sb"
        style={{
          color: "white",
          fontWeight: "bolder",
          fontSize: "15px",
          textAlign: "center",
          padding: "12px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginRight: "5px",
            backgroundColor: "#1a411a",
            padding: "3px",
            height: "30px",
            width: "30px",
            borderRadius: "30px",
          }}
        >
          &#52;{" "}
        </div>
        {teamsFull === "true" && checkAllBetAmountsPresent && slip.length>0 ? (
          <div
            onClick={() => {
              changePosition("All");
              history.push("/bet-receipt");
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={`view-lines-button ${
              history.location.pathname === "/bet-receipt" ? "activeGreen" : ""
            }`}
          >
            Place Bets

          </div>
        ) : (
          <div
            style={{
              opacity: ".3",
              cursor: "not-allowed",
              backgroundColor: "#242424",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className={`view-lines-button ${
              history.location.pathname === "/bet-receipt" ? "activeGreen" : ""
            }`}
          >
            Place Bets
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  teamsFull: state.lineup.teamsFull,
  formatSelected: state.lineup.formatSelected,
  checkAllBetAmountsPresent:checkAllBetAmountsPresent(state),
  slip: state.action.slip,



});
const mapDispatchToProps = (dispatch) => ({
  changePosition: (item) => dispatch(changePosition(item)),
  setBetsFalse: () => dispatch(setBetsFalse()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Sidebar)
);
