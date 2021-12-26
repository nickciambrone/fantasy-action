import React from "react";

import "./add-player.styles.scss";
import players from "../../pages/set-lineup/playerData";
import { CardList } from "../card-list/card-list.component";
import { SearchBox } from "../search-box/search-box.component.jsx";

class AddPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
      players: players,
      searchField: "",
    };
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const{searchField,players}=this.state;
    const filteredPlayers=players.filter(player=>player.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="add-player">
        <SearchBox
          placeholder="Search Player"
          handleChange={this.handleChange}
        />
        <CardList players={filteredPlayers} />
      </div>
    );
  }
}
export default AddPlayer;
