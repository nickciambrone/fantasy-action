import React from "react";
import "./set-lineup.styles.scss";
import players from "./playerData";

import Rosters from "../rosters/rosters.component.jsx";
import { connect } from "react-redux";
import PlayerOptions from "../player-options/player-options.component";
import { changeTeam } from "../../redux/lineup/lineup.actions";
import { setTeamsFull } from "../../redux/lineup/lineup.actions";
import Sidebar from "../sidebar/sidebar.component";
import ChangeFormatButton from "../change-format-button/change-format-button.component";
import { withRouter } from "react-router-dom";
import { changePosition } from "../../redux/lineup/lineup.actions";

class SetLineup extends React.Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
    };
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const {
      team,
      positions,
      positionSelected,
      changeTeam,
      teamsFull,
      changePosition,
      history,
    } = this.props;
    // let filteredPlayers = players.filter((ele, ind) => positionSelected==='All' ? ele.name.length>1 : ele.position === positionSelected)

    let filteredPlayers = players.filter((player) =>
      player.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    if (positionSelected === "All") {
      filteredPlayers = players.filter(
        (player) =>
          player.name
            .toLowerCase()
            .includes(this.state.searchField.toLowerCase()) &&
          (positions.includes(player.position) ||
            (player.position === "DE" && positions.includes("DEF")))
      );
    } else {
      filteredPlayers = players
        .filter(
          (player) =>
            player.name
              .toLowerCase()
              .includes(this.state.searchField.toLowerCase()) &&
            (positions.includes(player.position) ||
              (player.position === "DE" && positions.includes("DEF")))
        )
        .filter(
          (player) =>
            player.position === positionSelected ||
            (player.position === "DE" && positionSelected === "DEF")
        );
    }

    return (
      <div className="set-lineup" style={{backgroundColor:'black'}}>
        <div className="sidebar-container-sl">
          <Sidebar />
        </div>
        <div className="main-set-lineup">
        <div style={{display:'flex'}}>
        <span style={{color:'white', textAlign:'left', paddingTop:'5px', fontSize:'17px', fontWeight:600, width:'60%', padding:'0 5px'}}> <i>Select a lineup</i> <br/><div style={{fontSize:'14px'}}>When your lineup is filled out, you can set your wagers</div> </span>
          {teamsFull === "true" ? (
            <div className = 'select-wagers-next-button'
              style={{
                marginTop:'15px',
                backgroundColor: "#53d337",
                padding: "10px 10px",
                borderRadius: "3px",
                fontWeight: "bolder",
                color: "#091606",
                cursor: "pointer",
                fontSize: "13px",
                marginLeft:'auto',
                height:'40px',
                width:'135px'
              }}
              onClick={() => history.push("/view-lines")}
            >
              {" "}
              Select Wagers &raquo;
            </div>
          ) : (
            ""
          )}
          </div>
          <div className = 'player-area'>
            <div className="player-options-container">
              <input
                className="search"
                type="search"
                placeholder="Search Player"
                onChange={(e) => this.handleChange(e)}
              />

              <i
                aria-hidden="true"
                role="presentation"
                class="eicon-menu-bar"
              ></i>

              <PlayerOptions
                filteredPlayers={filteredPlayers}
                positions={positions}
                positionSelected={positionSelected}
                handleChange={this.handleChange}
                enableResetScrollToCoords={false}
              />
            </div>
            <div className="chose-team-and-rosters">
              <div className="roster">
                <Rosters
                  team={team}

                  // dropPlayer={dropPlayer}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userTeam: state.lineup.userTeam,
  opponentTeam: state.lineup.opponentTeam,
  team: state.lineup.team,
  searchField: state.lineup.searchField,
  teamsFull: state.lineup.teamsFull,
  positions: state.lineup.positions,
  positionSelected: state.lineup.positionSelected,
});
const mapDispatchToProps = (dispatch) => ({
  changeTeam: (e) => dispatch(changeTeam(e.target.id)),
  setTeamsFull: (item) => dispatch(setTeamsFull),
  changePosition: (item) => dispatch(changePosition(item)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SetLineup)
);
