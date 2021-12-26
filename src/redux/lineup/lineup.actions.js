import LineupActions from './lineup.types'

export const changePosition = position => ({
    type:LineupActions.CHANGE_POSITION,
    payload: position
})

export const changeTeam = team => ({
    type:LineupActions.CHANGE_TEAM,
    payload: team
})

export const addPlayer = playerInfo => ({
    type:LineupActions.ADD_PLAYER,
    payload: playerInfo
})

export const setTeamsFull = (status) => ({
    type:LineupActions.SET_TEAMS_FULL,
    payload:status
})


export const dropPlayer = position => ({
    type:LineupActions.DROP_PLAYER,
    payload: position
})

export const selectFormat = format => ({
    type:LineupActions.SELECT_FORMAT,
    payload: format
})


export const setFormatFalse = () => ({
    type:LineupActions.SET_FORMAT_FALSE,
})

export const clearRosters = () =>({
    type:'CLEAR_ROSTERS'
})