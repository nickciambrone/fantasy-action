export const selectFormat = (format,) => {
  let lineup = {};

  for (const position in format) {
    if (format[position] === 1) {
     
      lineup[position] = { name: "" };
      
    }
    if (format[position] === 2) {
      lineup[[position + "1"]] = { name: "" };
      lineup[[position + "2"]] = { name: "" };
    }
    if (format[position] === 3) {
      lineup[[position + "1"]] = { name: "" };
      lineup[[position + "2"]] = { name: "" };
      lineup[[position + "3"]] = { name: "" };
    }
  }
  return lineup;
};

export const changeTeam = (currentTeam, newTeam) => {
  if (newTeam === "my-team" && currentTeam === "opponent") {
    return "user";
  }
  if (newTeam === "opponent" && currentTeam === "user") {
    return "opponent";
  } else return currentTeam;
};
export const checkForPlayer = (opponentTeam, player) => {
  let alert = false;

  for (const key in opponentTeam) {
    if (opponentTeam[key]["name"] === player.player) {
      alert = true;
    }
  }
  return alert;
};
export const addPlayer = (team, inactiveTeam, player) => {
  let tempTeam = Object.assign({}, team);
  let alreadyDrafted = false;

  for (const key in inactiveTeam) {
    if (inactiveTeam[key]["name"] === player.player) {
      alreadyDrafted = true;
    }
  }
  for (const key in team) {
    if (team[key]["name"] === player.player) {
      alreadyDrafted = true;
    }
  }
  if (alreadyDrafted) {
    return tempTeam;
  }

  //Add a Running Back
  if (player.position === "QB") {
    if (tempTeam.hasOwnProperty("QB1") && team["QB1"]["name"] === "") {
      tempTeam["QB1"]["name"] = player.player;
      tempTeam["QB1"]["projectedPoints"] = player.projectedPoints;
      tempTeam["QB1"]["position"] = player.position;
      tempTeam["QB1"]["team"] = player.team;

      return tempTeam;
    } else if (tempTeam.hasOwnProperty("QB1")) {
      tempTeam["QB2"]["name"] = player.player;
      tempTeam["QB2"]["projectedPoints"] = player.projectedPoints;
      tempTeam["QB2"]["position"] = player.position;
      tempTeam["QB2"]["team"] = player.team;

      return tempTeam;
    } else {
      tempTeam["QB"]["name"] = player.player;
      tempTeam["QB"]["projectedPoints"] = player.projectedPoints;
      tempTeam["QB"]["position"] = player.position;
      tempTeam["QB"]["team"] = player.team;

      return tempTeam;
    }
  } else if (player.position === "RB") {
    //If they dont have an RB1, just set it as the RB1
    if (team["RB1"]["name"] === "") {
      tempTeam["RB1"]["name"] = player.player;
      tempTeam["RB1"]["projectedPoints"] = player.projectedPoints;
      tempTeam["RB1"]["position"] = player.position;
      tempTeam["RB1"]["team"] = player.team;

      return tempTeam;
      //If they already have an RB1 and they dont have an rb2
    } else if (team["RB2"]["name"] === "") {
      //set it to rb2
      tempTeam["RB2"]["name"] = player.player;
      tempTeam["RB2"]["projectedPoints"] = player.projectedPoints;
      tempTeam["RB2"]["position"] = player.position;
      tempTeam["RB2"]["team"] = player.team;


      return tempTeam;
      //If they already have an rb1 and rb2 and they are in a three rb league and dont have a rb
    } else if (
      tempTeam.hasOwnProperty("RB3") &&
      tempTeam["RB3"]["name"] === ""
    ) {
      tempTeam["RB3"]["name"] = player.player;
      tempTeam["RB3"]["projectedPoints"] = player.projectedPoints;
      tempTeam["RB3"]["position"] = player.position;
      tempTeam["RB3"]["team"] = player.team;

      return tempTeam;
    } else {
      //if they have a flex1 and its empty
      if (tempTeam.hasOwnProperty('Flex1') && tempTeam['Flex1']['name']===''){
        tempTeam["Flex1"]["name"] = player.player;
        tempTeam["Flex1"]["projectedPoints"] = player.projectedPoints;
        tempTeam["Flex1"]["position"] = player.position;
        tempTeam["Flex1"]["team"] = player.team;

  
        return tempTeam;
      }
      //if they have a flex 1 but its not empty
      else if (tempTeam.hasOwnProperty('Flex1')){
        tempTeam["Flex2"]["name"] = player.player;
        tempTeam["Flex2"]["projectedPoints"] = player.projectedPoints; 
        tempTeam["Flex2"]["position"] = player.position; 
        tempTeam["Flex2"]["team"] = player.team;

        return tempTeam;

      }
      else if (tempTeam.hasOwnProperty('Flex')){ 

        tempTeam["Flex"]["name"] = player.player;
        tempTeam["Flex"]["projectedPoints"] = player.projectedPoints; 
        tempTeam["Flex"]["position"] = player.position; 
        tempTeam["Flex"]["team"] = player.team;

        return tempTeam;
      }
      else{
        if (tempTeam.hasOwnProperty('RB3')){
        tempTeam["RB3"]["name"] = player.player;
        tempTeam["RB3"]["projectedPoints"] = player.projectedPoints;
        tempTeam["RB3"]["position"] = player.position;
        tempTeam["RB3"]["team"] = player.team;
        }
        

        return tempTeam;
      }
     
    }
  }
  //Add a Wide Receiver
  else if (player.position === "WR") {
    if (team["WR1"]["name"] === "") {
      tempTeam["WR1"]["name"] = player.player;
      tempTeam["WR1"]["projectedPoints"] = player.projectedPoints;
      tempTeam["WR1"]["position"] = player.position;
      tempTeam["WR1"]["team"] = player.team;


      return tempTeam;
    } else if (team["WR2"]["name"] === "") {
      tempTeam["WR2"]["name"] = player.player;
      tempTeam["WR2"]["projectedPoints"] = player.projectedPoints;
      tempTeam["WR2"]["position"] = player.position;
      tempTeam["WR2"]["team"] = player.team;


      return tempTeam;
    } else if(tempTeam.hasOwnProperty("WR3") &&
    tempTeam["WR3"]["name"] === ""){
      

        tempTeam["WR3"]["name"] = player.player;
        tempTeam["WR3"]["projectedPoints"] = player.projectedPoints;
        tempTeam["WR3"]["position"] = player.position;
        tempTeam["WR3"]["team"] = player.team;

        return tempTeam;
      }
      else {
        if (tempTeam.hasOwnProperty('Flex1') && tempTeam['Flex1']['name']===''){
          tempTeam["Flex1"]["name"] = player.player;
          tempTeam["Flex1"]["projectedPoints"] = player.projectedPoints;
          tempTeam["Flex1"]["position"] = player.position;
          tempTeam["Flex1"]["team"] = player.team;

          return tempTeam;
        }
        //if they have a flex 1 but its not empty
        else if (tempTeam.hasOwnProperty('Flex1')){
          tempTeam["Flex2"]["name"] = player.player;
          tempTeam["Flex2"]["projectedPoints"] = player.projectedPoints; 
          tempTeam["Flex2"]["position"] = player.position; 
          tempTeam["Flex2"]["team"] = player.team;

          return tempTeam;
  
        }
        else if (team.hasOwnProperty('Flex')){ 
          tempTeam["Flex"]["name"] = player.player;
          tempTeam["Flex"]["projectedPoints"] = player.projectedPoints; 
          tempTeam["Flex"]["position"] = player.position; 
          tempTeam["Flex"]["team"] = player.team;

          return tempTeam;
        }
        else{
          if (tempTeam.hasOwnProperty('WR3')){
            tempTeam["WR3"]["name"] = player.player;
          tempTeam["WR3"]["projectedPoints"] = player.projectedPoints;
          tempTeam["WR3"]["position"] = player.position;
          tempTeam["WR3"]["team"] = player.team;
          }
          

  
          return tempTeam; 
        }
      }
    }
    else if (player.position === "TE") {
    //if we don't have a tight end, set the tight end to the player
    if(team.hasOwnProperty('TE1')&& team['TE1']['name']===''){
      tempTeam["TE1"]["name"] = player.player;
      tempTeam["TE1"]["projectedPoints"] = player.projectedPoints;
      tempTeam["TE1"]["position"] = player.position;
      tempTeam["TE1"]["team"] = player.team;

      return tempTeam;

    }
    else if (team.hasOwnProperty('TE2') && team['TE2']['name']===''){
      tempTeam["TE2"]["name"] = player.player;
      tempTeam["TE2"]["projectedPoints"] = player.projectedPoints;
      tempTeam["TE2"]["position"] = player.position;
      tempTeam["TE2"]["team"] = player.team;

      return tempTeam;
    }
    else if (team.hasOwnProperty('TE2')){
      if (tempTeam.hasOwnProperty('Flex1') && tempTeam['Flex1']['name']===''){
        tempTeam["Flex1"]["name"] = player.player;
        tempTeam["Flex1"]["projectedPoints"] = player.projectedPoints;
        tempTeam["Flex1"]["position"] = player.position;
        tempTeam["Flex1"]["team"] = player.team;

        return tempTeam;
      }
      //if they have a flex 1 but its not empty
      else if (tempTeam.hasOwnProperty('Flex1')){
        tempTeam["Flex2"]["name"] = player.player;
        tempTeam["Flex2"]["projectedPoints"] = player.projectedPoints; 
        tempTeam["Flex2"]["position"] = player.position; 
        tempTeam["Flex2"]["team"] = player.team;

        return tempTeam;

      }
      else if (team.hasOwnProperty('Flex')){ 
        tempTeam["Flex"]["name"] = player.player;
        tempTeam["Flex"]["projectedPoints"] = player.projectedPoints; 
        tempTeam["Flex"]["position"] = player.position; 
        tempTeam["Flex"]["team"] = player.team;

        return tempTeam;
      }
      else{
        tempTeam["TE2"]["name"] = player.player;
        tempTeam["TE2"]["projectedPoints"] = player.projectedPoints;
        tempTeam["TE2"]["position"] = player.position;
        tempTeam["TE2"]["team"] = player.team;

        return tempTeam;
      }
    }
    else if (team.hasOwnProperty('TE') && team['TE']['name']==='') {
      tempTeam["TE"]["name"] = player.player;
      tempTeam["TE"]["projectedPoints"] = player.projectedPoints;
      tempTeam["TE"]["position"] = player.position;
      tempTeam["TE"]["team"] = player.team;

      return tempTeam;
    }
    else if(team.hasOwnProperty('TE')){
      if (tempTeam.hasOwnProperty('Flex1') && tempTeam['Flex1']['name']===''){
        tempTeam["Flex1"]["name"] = player.player;
        tempTeam["Flex1"]["projectedPoints"] = player.projectedPoints;
        tempTeam["Flex1"]["position"] = player.position;
        tempTeam["Flex1"]["team"] = player.team;

        return tempTeam;
      }
      //if they have a flex 1 but its not empty
      else if (tempTeam.hasOwnProperty('Flex1')){
        tempTeam["Flex2"]["name"] = player.player;
        tempTeam["Flex2"]["projectedPoints"] = player.projectedPoints; 
        tempTeam["Flex2"]["position"] = player.position; 
        tempTeam["Flex2"]["team"] = player.team;

        return tempTeam;

      }
      else if (team.hasOwnProperty('Flex')){ 
        tempTeam["Flex"]["name"] = player.player;
        tempTeam["Flex"]["projectedPoints"] = player.projectedPoints; 
        tempTeam["Flex"]["position"] = player.position; 
        tempTeam["Flex"]["team"] = player.team;

        return tempTeam;
      }
      else{
        return tempTeam
      }
    }else{
      if (tempTeam.hasOwnProperty('Flex1') && tempTeam['Flex1']['name']===''){
        tempTeam["Flex1"]["name"] = player.player;
        tempTeam["Flex1"]["projectedPoints"] = player.projectedPoints;
        tempTeam["Flex1"]["position"] = player.position; 
        tempTeam["Flex1"]["team"] = player.team;

        return tempTeam;
      }
      //if they have a flex 1 but its not empty
      else if (tempTeam.hasOwnProperty('Flex1')){
        tempTeam["Flex2"]["name"] = player.player;
        tempTeam["Flex2"]["projectedPoints"] = player.projectedPoints; 
        tempTeam["Flex2"]["position"] = player.position; 
        tempTeam["Flex2"]["team"] = player.team;

        return tempTeam;

      }
      else if (team.hasOwnProperty('Flex')){ 
        tempTeam["Flex"]["name"] = player.player;
        tempTeam["Flex"]["projectedPoints"] = player.projectedPoints; 
        tempTeam["Flex"]["position"] = player.position; 
        tempTeam["Flex"]["team"] = player.team;

        return tempTeam;
      }
      else{
        return tempTeam
      }
    }

    //if we do have a tight end, but its not the same guy, make this guy the flex
  
  } else {
    if (player.position==='DE'){
      tempTeam['DEF']["name"] = player.player;
      tempTeam['DEF']["projectedPoints"] = player.projectedPoints;
      tempTeam['DEF']["position"] = player.position;
      tempTeam['DEF']["team"] = player.team;


      return tempTeam
    }
    else{
    tempTeam[player.position]["name"] = player.player;
    tempTeam[player.position]["projectedPoints"] = player.projectedPoints;
    tempTeam[player.position]["position"] = player.position;
    tempTeam[player.position]["team"] = player.team;

    return tempTeam;
    }
  }
};

export const dropPlayer = (team, player) => {
  let tempTeam = Object.assign({}, team);

  return tempTeam.payload;
};
export const updatePositions = (format) => {
  let positions = ['All','QB','RB','WR', 'TE']

 
  if (format['K'] !== 0){
    positions.push('K')
  }
  if (format['DEF'] !== 0){
    positions.push('DEF')
  }

  return positions;
};

export const clearTeam =(team)=>{
  let tempTeam = {};

  Object.keys(team).forEach(ele=>tempTeam[ele]={name:''})

return tempTeam
}