  constructor() {
    super();
    this.state = {
      searchField: "",
      
     

    };
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  handlePositionChange = (newPosition) => {
    this.setState({positionSelected:newPosition})
  }
dropPlayer = (name, position) =>{
  this.setState((prevState)=>{})
}

  addPlayer = (player, position, team) => {
    if (this.state.team === "user") {
      this.setState((prevState) => {
        if (position === "RB") {
          let team = Object.assign({}, prevState.userTeam);
          if (team["RB1"]["name"] === "") {
            team["RB1"]["name"] = player;
            return { ...prevState, userTeam: team };

          } else if (team["RB2"]["name"] === "") {
            if (team["RB1"]["name"] !== player) {
              team["RB2"]["name"] = player;
              return { ...prevState, userTeam: team };

            }
          } else {
            if (
              team["RB2"]["name"] !== player &&
              team["RB1"]["name"] !== player
            ) {
              team["Flex"]["name"] = player;
              return { ...prevState, userTeam: team };

            }
          }
        } else if (position === "WR") {
          let team = Object.assign({}, prevState.userTeam);
          if (team["WR1"]["name"] === "") {
            team["WR1"]["name"] = player;
            return { ...prevState, userTeam: team };

          } else if (team["WR2"]["name"] === "") {
            if (team["WR1"]["name"] !== player) {
              team["WR2"]["name"] = player;
              return { ...prevState, userTeam: team };

            }
          } else {
            if (team["WR1"]["name"]!==player && team["WR2"]["name"]!==player){
              team["Flex"]["name"] = player;
              return { ...prevState, userTeam: team };

            }          }
        } else {
          let team = Object.assign({}, prevState.userTeam);
          team[position]["name"] = player;
          return { ...prevState, userTeam: team };
        }
      },()=>{

        let userTeamFull=true
        for (const prop in this.state.userTeam){
            if (this.state.userTeam[prop]['name']===''){
              userTeamFull=false
            }
        }
        
        let oppTeamFull=true
        for (const prop in this.state.opponentTeam){
            if (this.state.opponentTeam[prop]['name']===''){
              userTeamFull=false
            }
        }
        if (userTeamFull && oppTeamFull){
          this.setState({teamsFull:true})
        }
      });
    } else if (this.state.team === "opponent") {
     this.setState((prevState) => {
        if (position === "RB") {
          let team = Object.assign({}, prevState.opponentTeam);
          if (team["RB1"]["name"] === "") {
            team["RB1"]["name"] = player;
            return { ...prevState, opponentTeam: team };

          } else if (team["RB2"]["name"] === "") {
            if (
              team["RB1"]["name"] !== player &&
              team["Flex"]["name"] !== player
            ) {
              team["RB2"]["name"] = player;
              return { ...prevState, opponentTeam: team };

            }
          } else {
            if (
              team["RB2"]["name"] !== player &&
              team["RB1"]["name"] !== player
            ) {
              team["Flex"]["name"] = player;
              return { ...prevState, opponentTeam: team };

            }
          }
        } else if (position === "WR") {
          let team = Object.assign({}, prevState.opponentTeam);
          if (team["WR1"]["name"] === "") {
            team["WR1"]["name"] = player;
            return { ...prevState, opponentTeam: team };

          } else if (team["WR2"]["name"] === "") {
            if (team["WR1"]["name"] !== player) {
              team["WR2"]["name"] = player;
              return { ...prevState, opponentTeam: team };

            }          } else {
            if (team["WR1"]["name"]!==player && team["WR2"]["name"]!==player){
              team["Flex"]["name"] = player;
              return { ...prevState, opponentTeam: team };

            }     
          }
        } else {
          let team = Object.assign({}, prevState.opponentTeam);
          team[position]["name"] = player;
          return { ...prevState, opponentTeam: team };
        }
      }, ()=> {
        let userTeamFull=true
        for (const prop in this.state.userTeam){
            if (this.state.userTeam[prop]['name']===''){
              userTeamFull=false
            }
        }
        
        let oppTeamFull=true
        for (const prop in this.state.opponentTeam){
            if (this.state.opponentTeam[prop]['name']===''){
              userTeamFull=false
            }
        }
        if (userTeamFull && oppTeamFull){
          this.setState({teamsFull:true})
        }

      });
    }
  
  
  };

  handleClick = (e) => {
    if (e.target.id == "my-team" && this.state.team == "opponent") {
      this.setState({ team: "user" });
    }
    if (e.target.id === "opponent" && this.state.team === "user") {

      this.setState({ team: "opponent" });
    }
  };
  render() {
    const { searchField, players, positionSelected, userTeam } = this.state;

    const positions = this.state.positions.map((ele)=> ele ==='DE' ? 'DEF' : ele)
    let filteredPlayers = players.filter((player) =>
      player.name.toLowerCase().includes(searchField.toLowerCase())
    );
    if (positionSelected==='All'){
     filteredPlayers = players.filter((player) =>
      player.name.toLowerCase().includes(searchField.toLowerCase())
    );}
    else{
       filteredPlayers = players.filter((player) =>
      player.name.toLowerCase().includes(searchField.toLowerCase())
    ).filter((player)=> (player.position ===positionSelected || (player.position=='DE' && positionSelected=='DEF')));
    }
