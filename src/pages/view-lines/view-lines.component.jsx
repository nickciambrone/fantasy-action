import React from "react";
import { connect } from "react-redux";
import "./view-lines.styles.scss";
import { selectUserTotalProjected } from "../../redux/lineup/lineup.selectors.js";
import { selectOpponentTotalProjected } from "../../redux/lineup/lineup.selectors.js";
import BetSlip from "../../components/bet-slip/bet-slip.component";
import { addBet } from "../../redux/action/action.actions";
import { setFormatFalse } from "../../redux/lineup/lineup.actions";
import { setBetsFalse } from "../../redux/action/action.actions";
import Lineups from "../../components/lineups/lineups.component";
import ViewLinesTile from "../../components/view-lines-tile/view-lines-tile.component";
import ChangeFormatButton from "../../components/change-format-button/change-format-button.component.js";
import Header from "../../components/header/header.component";

class ViewLines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const {
      userTeam,
      opponentTeam,
      selectUserTotalProjected,
      selectOpponentTotalProjected,
      difference,
      total,

      history,
      setBetsFalse,
    } = this.props;
    return (
      <div className="view-lines">
        <Header />
        <div className="view-lines-content" style={{ display: "flex" }}>
          <div className="left-view-lines">
            <div className="left-top" style={{ marginBottom: "6px" }}>
              <div className="back-buttons-view-lines">
                <div className="change-format-button-container-vl">
                  <ChangeFormatButton />
                </div>

                <div
                  className="edit-lineup-button-container"
                  style={{
                    color:'white',
                    fontWeight: "bolder",
                    fontSize: "15px",
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
              <div className="line-card-holder-container">
                <div
                  className="line-card-holder"
                  style={{
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    className="view-lines-card"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "#121212",
                      color: "white",
                      width: "96%",
                      marginLeft: "2%",
                      height: "100px",
                    }}
                  >
                    <div
                      className="header-view-lines"
                      style={{ display: "flex", width: "100%" }}
                    >
                      <div style={{ width: "35%" }}></div>
                      <div
                        style={{
                          width: "60%",
                          display: "flex",
                          textAlign: "center",
                        }}
                      >
                        <div style={{ width: "33%" }}>SPREAD</div>
                        <div style={{ width: "33%" }}>TOTAL</div>
                        <div style={{ width: "33%" }}>MONEYLINE</div>
                      </div>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div
                        className="teams-view-lines"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "35%",
                        }}
                      >
                        <span
                          style={{
                            padding: "7px",
                            height: "30px",
                            marginBottom: "3px",
                          }}
                        >
                          User{" "}
                        </span>
                        <span style={{ padding: "7px", height: "30px" }}>
                          Opponent{" "}
                        </span>
                      </div>
                      <div
                        className="lines-view-lines"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          width: "65%",
                        }}
                      >
                        <ViewLinesTile
                          id="su"
                          type="Spread"
                          line={
                            difference > 0
                              ? "+" + Math.round(difference * 100) / 100
                              : Math.round(difference * 100) / 100
                          }
                          spread={difference}
                        >
                          {difference > 0
                            ? "+" + Math.round(difference * 100) / 100
                            : Math.round(difference * 100) / 100}
                        </ViewLinesTile>

                        <ViewLinesTile
                          id="o"
                          type="O/U"
                          line={Math.round(total * 100) / 100}
                        >
                          O {Math.round(total * 100) / 100}
                        </ViewLinesTile>

                        <ViewLinesTile
                          id="mu"
                          type="Moneyline"
                          line={
                            difference < -20
                              ? "-800"
                              : difference < -10
                              ? "-300"
                              : difference < 0
                              ? "-170"
                              : difference < 10
                              ? "+170"
                              : difference < 20
                              ? "+300"
                              : "+800"
                          }
                        >
                          {difference < -20
                            ? "-800"
                            : difference < -10
                            ? "-300"
                            : difference < 0
                            ? "-170"
                            : difference < 10
                            ? "+170"
                            : difference < 20
                            ? "+300"
                            : "+800"}
                        </ViewLinesTile>
                        <ViewLinesTile
                          id="so"
                          type="Spread"
                          line={
                            difference > 0
                              ? Math.round(difference * 100) / -100
                              : "+" + Math.round(difference * 100) / -100
                          }
                          spread={difference}
                        >
                          {difference > 0
                            ? Math.round(difference * 100) / -100
                            : "+" + Math.round(difference * 100) / -100}
                        </ViewLinesTile>
                        <ViewLinesTile
                          id="u"
                          type="O/U"
                          line={Math.round(total * 100) / 100}
                        >
                          U {Math.round(total * 100) / 100}
                        </ViewLinesTile>
                        <ViewLinesTile
                          id="mo"
                          type="Moneyline"
                          line={
                            difference < -20
                              ? "+800"
                              : difference < -10
                              ? "+300"
                              : difference < 0
                              ? "+170"
                              : difference < 10
                              ? "-170"
                              : difference < 20
                              ? "-300"
                              : "-800"
                          }
                        >
                          {difference < -20
                            ? "+800"
                            : difference < -10
                            ? "+300"
                            : difference < 0
                            ? "+170"
                            : difference < 10
                            ? "-170"
                            : difference < 20
                            ? "-300"
                            : "-800"}
                        </ViewLinesTile>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bet-slip-container">
              <BetSlip />
            </div>
          </div>
          <Lineups
            userTeam={userTeam}
            opponentTeam={opponentTeam}
            selectOpponentTotalProjected={selectOpponentTotalProjected}
            selectUserTotalProjected={selectUserTotalProjected}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userTeam: state.lineup.userTeam,
  opponentTeam: state.lineup.opponentTeam,
  selectUserTotalProjected: selectUserTotalProjected(state),
  selectOpponentTotalProjected: selectOpponentTotalProjected(state),
  difference:
    selectOpponentTotalProjected(state) - selectUserTotalProjected(state),
  total: selectOpponentTotalProjected(state) + selectUserTotalProjected(state),
  betSlip: state.action.slip.map((ele) => ele.id),
});
const mapDispatchToProps = (dispatch) => ({
  addBet: (e) => dispatch(addBet(e)),
  setFormatFalse: () => dispatch(setFormatFalse()),
  setBetsFalse: () => dispatch(setBetsFalse()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewLines);
