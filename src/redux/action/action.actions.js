import ActionActionTypes from './action.types'

export const addBet = bet => ({
    type:ActionActionTypes.ADD_BET,
    payload: bet
})

export const deleteBet = betId => ({
    type:ActionActionTypes.DELETE_BET,
    payload: betId
})

export const toggleClearBetWarning = () => ({
    type:ActionActionTypes.TOGGLE_CLEAR_BET_WARNING
})

export const clearBets = () => ({
    type:ActionActionTypes.CLEAR_BETS
})

export const updateWager = (wager) => ({
    type:ActionActionTypes.UPDATE_WAGER,
    payload:wager
})

export const setBetsFalse = () =>({
    type:ActionActionTypes.SET_BETS_FALSE,

})

export const setBetPlacedTrue = () =>({
    type:'SET_BETS_PLACED_TRUE',

})