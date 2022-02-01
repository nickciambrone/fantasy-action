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
import Sidebar from "../../components/sidebar/sidebar.component";
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
        <div className = 'view-lines-main'>
        <div className = 'sidebar-container'>
        <Sidebar/>
       
      </div>
        <div className="view-lines-content" style={{ display: "flex" }}>
          <div className="left-view-lines">
            <div className="left-top" style={{ marginBottom: "6px" }}>
             
             
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
                    </div>
                    <div style={{ display: "flex" }}>
                      <div
                        className="teams-view-lines"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "15%",
                          textAlign:'center'
                        }}
                      >
                        <span
                          style={{
                            padding: "7px",
                            height: "30px",
                            marginBottom: "3px",
                          }}
                        >
                          Over{" "}
                        </span>
                        <span style={{ padding: "7px", height: "30px" }}>
                          Under{" "}
                        </span>
                      </div>
                      <div
                        className="lines-view-lines"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          width: "85%",
                        }}
                      >
                        <ViewLinesTile id="0a" type="O/U" line={-175}>
                          O {(Math.round((total-20)*100))/100} <span style={{ color: "green" }}>-175</span>

                        </ViewLinesTile>
                        <ViewLinesTile id="0b" type="O/U" line={-125}>
                          O {Math.round(total * 100) / 100} 
                          <span style={{ color: "green" }}> -125</span>
                        </ViewLinesTile>

                        <ViewLinesTile id="0c" type="O/U" line={155}>
                        O {(Math.round(total * 100) / 100)+20} 
                        <span style={{ color: "green" }}> +155</span>
                      </ViewLinesTile>

                      <ViewLinesTile id="1a" type="O/U" line={155}>
                      U {(Math.round((total-20)*100))/100} 
                      <span style={{ color: "green" }}> +155</span>
                    </ViewLinesTile>
                    <ViewLinesTile id="1b" type="O/U" line={105}>
                    U {(Math.round(total * 100) / 100)} 
                    <span style={{ color: "green" }}> +105</span>
                  </ViewLinesTile>
                  <ViewLinesTile id="1c" type="O/U" line={-165}>
                    U {(Math.round(total * 100) / 100)+20} 
                    <span style={{ color: "green" }}> -165</span>
                  </ViewLinesTile>
                      </div>
                    </div>
                  </div>
                </div>
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
        <div className="bet-slip-container">
              <BetSlip />
            </div>
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
  total: selectUserTotalProjected(state),
  betSlip: state.action.slip.map((ele) => ele.id),
});
const mapDispatchToProps = (dispatch) => ({
  addBet: (e) => dispatch(addBet(e)),
  setFormatFalse: () => dispatch(setFormatFalse()),
  setBetsFalse: () => dispatch(setBetsFalse()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewLines);
