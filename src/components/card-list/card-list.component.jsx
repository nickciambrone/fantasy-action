import React from "react";
import "./card-list.style.scss";
import Card from "../card/card.component";
import { connect } from "react-redux";
import { setTeamsFull } from "../../redux/lineup/lineup.actions";

class CardList extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    let userTeamFull = true;
    for (const prop in this.props.userTeam) {
      if (this.props.userTeam[prop]["name"] === "") {
        userTeamFull = false;
      }
    }

    if (userTeamFull) {
      this.props.setTeamsFull("true");
    } else {
      this.props.setTeamsFull("false");
    }
  }
  render() {
    return (
      <div className="card-list">
     
        {this.props.players.map((player, ind) => (
          <Card
            player={player.name}
            position={player.position}
            team={player.team}
            points={player.totalPoints}
            counter={ind}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userTeam: state.lineup.userTeam,
  opponentTeam: state.lineup.opponentTeam,
});
const mapDispatchToProps = (dispatch) => ({
  setTeamsFull: (status) => dispatch(setTeamsFull(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
