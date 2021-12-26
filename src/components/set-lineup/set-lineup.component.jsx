import React from "react";
import "./set-lineup.styles.scss";
import players from "./playerData";

import Rosters from "../rosters/rosters.component.jsx";
import { connect } from "react-redux";
import PlayerOptions from "../player-options/player-options.component";
import { changeTeam } from "../../redux/lineup/lineup.actions";
import { setTeamsFull } from "../../redux/lineup/lineup.actions";

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
  componentDidMount = ()=>{
    window.scrollTo(0, 0);
  }


  render() {
    const {
      team,
      positions,
      positionSelected,
      changeTeam,
    } = this.props;
    // let filteredPlayers = players.filter((ele, ind) => positionSelected==='All' ? ele.name.length>1 : ele.position === positionSelected)
    console.log(team);

    let filteredPlayers = players.filter((player) =>
      player.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    );
    if (positionSelected === "All") {
      filteredPlayers = players.filter((player) =>
        player.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        && ((positions.includes(player.position)) || (player.position==="DE" && positions.includes('DEF')))

      );
    } else {
      filteredPlayers = players
        .filter((player) =>
          player.name
            .toLowerCase()
            .includes(this.state.searchField.toLowerCase())
            && ((positions.includes(player.position)) || (player.position==="DE" && positions.includes('DEF')))
        )
        .filter(
          (player) =>
            player.position === positionSelected ||
            (player.position === "DE" && positionSelected === "DEF")
        );
    }

    return (
      <div className="set-lineup">
     
<div className = 'player-options-container'>
<i aria-hidden="true" role="presentation" class="eicon-menu-bar"></i>
        <PlayerOptions
          filteredPlayers={filteredPlayers}
          positions={positions}
          positionSelected={positionSelected}
          handleChange={this.handleChange}
          enableResetScrollToCoords={false}
        />
        </div>
        <div className="chose-team-and-rosters">
        <div className="choose-team" style = {{display:'flex'}}>
          <div
            id="my-team"
            className={`${
              team === "user" ? "active" : ""
            } lineup-choice my-team`}
            onClick={(e) => changeTeam(e)}
          >
            User Team
          </div>
          <div
            id="opponent"
            className={`${
              team === "opponent" ? "active" : ""
            } lineup-choice opponent`}
            onClick={(e) => changeTeam(e)}
          >
            Opponent Team
          </div>
        </div>
        <div className="roster">
          <Rosters
            team={team}

            // dropPlayer={dropPlayer}
          />
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
});

export default connect(mapStateToProps, mapDispatchToProps)(SetLineup);
