export const addPlayer = (player, position, team) => {
    if (this.state.team === "user") {
      this.setState((prevState) => {
        if (position === "RB") {
          let team = Object.assign({}, prevState.userTeam);
          if (team["RB1"]["name"] === "") {
            team["RB1"]["name"] = player;
          } else if (team["RB2"]["name"] === "") {
            if (team["RB1"]["name"] !== player) {
              team["RB2"]["name"] = player;
            }
          } else {
            if (
              team["RB2"]["name"] !== player &&
              team["RB1"]["name"] !== player
            ) {
              team["Flex"]["name"] = player;
            }
          }
        } else if (position === "WR") {
          let team = Object.assign({}, prevState.userTeam);
          if (team["WR1"]["name"] === "") {
            team["WR1"]["name"] = player;
          } else if (team["WR2"]["name"] === "") {
            if (team["WR1"]["name"] !== player) {
              team["WR2"]["name"] = player;
            }
          } else {
            if (team["WR1"]["name"]!==player && team["WR2"]["name"]!==player){
              team["Flex"]["name"] = player;
            }          }
        } else {
          let team = Object.assign({}, prevState.userTeam);
          team[position]["name"] = player;
          return { ...prevState, userTeam: team };
        }
      });
    } else if (this.state.team === "opponent") {
      this.setState((prevState) => {
        if (position === "RB") {
          let team = Object.assign({}, prevState.opponentTeam);
          if (team["RB1"]["name"] === "") {
            team["RB1"]["name"] = player;
          } else if (team["RB2"]["name"] === "") {
            if (
              team["RB1"]["name"] !== player &&
              team["Flex"]["name"] !== player
            ) {
              team["RB2"]["name"] = player;
            }
          } else {
            if (
              team["RB2"]["name"] !== player &&
              team["RB1"]["name"] !== player
            ) {
              team["Flex"]["name"] = player;
            }
          }
        } else if (position === "WR") {
          let team = Object.assign({}, prevState.opponentTeam);
          if (team["WR1"]["name"] === "") {
            team["WR1"]["name"] = player;
          } else if (team["WR2"]["name"] === "") {
            if (team["WR1"]["name"] !== player) {
              team["WR2"]["name"] = player;
            }          } else {
            if (team["WR1"]["name"]!==player && team["WR2"]["name"]!==player){
              team["Flex"]["name"] = player;
            }     
          }
        } else {
          let team = Object.assign({}, prevState.opponentTeam);
          team[position]["name"] = player;
          return { ...prevState, opponentTeam: team };
        }
      });
    }
  };