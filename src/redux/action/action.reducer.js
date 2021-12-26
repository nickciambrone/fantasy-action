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
      console.log(action.payload);
      if (!state.slip.map((ele) => ele["id"]).includes(action.payload.id)) {
        if (action.payload["id"] === "su") {
          return {
            ...state,
            slip: [...state.slip, action.payload].filter(
              (ele) => ele["id"] !== "so"
            ),
          };
        }
        if (action.payload["id"] === "so") {
          return {
            ...state,
            slip: [...state.slip, action.payload].filter(
              (ele) => ele["id"] !== "su"
            ),
          };
        }
        if (action.payload["id"] === "o") {
          return {
            ...state,
            slip: [...state.slip, action.payload].filter(
              (ele) => ele["id"] !== "u"
            ),
          };
        }
        if (action.payload["id"] === "u") {
          return {
            ...state,
            slip: [...state.slip, action.payload].filter(
              (ele) => ele["id"] !== "o"
            ),
          };
        }
        if (action.payload["id"] === "mu") {
          return {
            ...state,
            slip: [...state.slip, action.payload].filter(
              (ele) => ele["id"] !== "mo"
            ),
          };
        }
        if (action.payload["id"] === "mo") {
          return {
            ...state,
            slip: [...state.slip, action.payload].filter(
              (ele) => ele["id"] !== "mu"
            ),
          };
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
