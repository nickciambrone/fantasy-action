import lineupActionTypes from "./lineup.types";
import players from "./playerData";
import { updatePositions, clearTeam, selectFormat, addPlayer, changeTeam } from "./lineup.utils";
import clearBetSlipWarningComponent from "../../components/clear-bet-slip-warning/clear-bet-slip-warning.component";
const INITIAL_STATE = {
  players: players,
  searchField: "",
  team: "user",
  formatSelected: false,
  // userTeam: {
  //   QB: { name: "" },
  //   RB1: { name: "" },
  //   RB2: { name: "" },
  //   WR1: { name: "" },
  //   WR2: { name: "" },
  //   TE: { name: "" },
  //   Flex: { name: "" },
  //   K: { name: "" },
  //   DE: { name: "" },
  // },
  // opponentTeam: {
  //   QB: { name: "" },
  //   RB1: { name: "" },
  //   RB2: { name: "" },
  //   WR1: { name: "" },
  //   WR2: { name: "" },
  //   TE: { name: "" },
  //   Flex: { name: "" },
  //   K: { name: "" },
  //   DE: { name: "" },
  // },
  userTeam: {},
  opponentTeam: {},
  teamsFull: "false",
  positions: ["All", "QB", "RB", "WR", "TE", "K", "DE"],
  positionSelected: "All",
};

const lineupReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case lineupActionTypes.CHANGE_POSITION:
      return {
        ...state,
        positionSelected: action.payload,
      };
    case lineupActionTypes.CHANGE_TEAM:
      return {
        ...state,
        team: changeTeam(state.team, action.payload),
      };
    case lineupActionTypes.ADD_PLAYER:
      if (state.team === "user") {
        return {
          ...state,
          userTeam: addPlayer(
            state.userTeam,
            state.opponentTeam,
            action.payload
          ),
        };
      }
      if (state.team === "opponent") {
        return {
          ...state,
          opponentTeam: addPlayer(
            state.opponentTeam,
            state.userTeam,
            action.payload
          ),
        };
      }
      break;
    case lineupActionTypes.SET_TEAMS_FULL:
      return {
        ...state,
        teamsFull: action.payload,
      };
    case lineupActionTypes.DROP_PLAYER:
      if (state.team === "user") {
        let tempTeam = Object.assign({}, state.userTeam);
        console.log(action.payload.position);
        console.log(tempTeam[action.payload.position]);
        tempTeam[action.payload.position]["name"] = "";
        tempTeam[action.payload.position]["projectedPoints"] = "";
        tempTeam[action.payload.position]["position"] = "";
        tempTeam[action.payload.position]["team"] = "";

        return { ...state, userTeam: tempTeam };
      }
      if (state.team === "opponent") {
        let tempTeam = Object.assign({}, state.opponentTeam);
        console.log(action.payload.position);
        console.log(tempTeam[action.payload.position]);
        tempTeam[action.payload.position]["name"] = "";
        return { ...state, opponentTeam: tempTeam };
      }
      break;
    case lineupActionTypes.SELECT_FORMAT:
      return {
        ...state,
        userTeam: selectFormat(action.payload),
        opponentTeam: selectFormat(action.payload),
        formatSelected: true,
        positions: updatePositions(action.payload),
      };
    case lineupActionTypes.SET_FORMAT_FALSE:
      return { ...state, formatSelected: false, teamsFull: false };
    case 'CLEAR_ROSTERS':
      return {
        ...state,
        userTeam:clearTeam(state.userTeam),
        opponentTeam:clearTeam(state.opponentTeam),
        teamsFull:false

      }
    default:
      return state
};}
export default lineupReducer
