import { updateBetHistory } from './user.utils.js';

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "UPDATE_BET_HISTORY":
      return {
        ...state,
        currentUser:updateBetHistory(state.currentUser, action.payload)
      };


    default:
      return state;
  }
};

export default userReducer;