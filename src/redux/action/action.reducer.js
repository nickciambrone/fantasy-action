import { updateWager } from "./actions.utils";
import ActionActionTypes from "./action.types";

const INITIAL_STATE = {
  slip: [],
  clearBetWarning: false,
  betPlaced:false
};

const actionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionActionTypes.ADD_BET:
      if (!state.slip.map((ele) => ele["id"]).includes(action.payload.id)) {
        return {
          ...state,
          slip:[...state.slip, action.payload]
        }
      } else {
        return state;
      }
    break;
    case ActionActionTypes.DELETE_BET:
      return {
        ...state,
        slip: state.slip.filter((ele) => ele.id !== action.payload),
        clearBetWarning: state.slip.length === 1 ? false : state.clearBetWarning,
      };
    case ActionActionTypes.TOGGLE_CLEAR_BET_WARNING:
      return {
        ...state,
        clearBetWarning: !state.clearBetWarning,
      };
    case ActionActionTypes.CLEAR_BETS:
      return {
        ...state,
        clearBetWarning: false,
        slip: [],
        betPlaced:false

      };
    case ActionActionTypes.UPDATE_WAGER:
      return {
        ...state,
        slip:updateWager(state.slip, action.payload)
  
      };
    case ActionActionTypes.SET_BETS_FALSE:
      return{
        ...state,
        slip:[]
      }
      case 'SET_BETS_PLACED_TRUE':
        return{
          ...state,
          betPlacedTrue:true
        }
    default:
      return state;
  }
};

export default actionReducer;
