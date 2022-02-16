export const setCurrentUser = (user)=>({
    type: 'SET_CURRENT_USER',
    payload:user
})

export const updateBetHistory = (wager)=>({
    type: 'UPDATE_BET_HISTORY',
    payload:wager
})

export const switchHasAccount = ()=>({
    type: 'SWITCH_HAS_ACCOUNT'
})

