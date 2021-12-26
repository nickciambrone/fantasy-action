import {createSelector} from 'reselect';

export const selectUserTeam = (state) =>state.lineup.userTeam;
export const selectOpponentTeam = (state) => state.lineup.opponentTeam;
export const selectUserPlayers = createSelector(
    [selectUserTeam],
    (players)=> Object.keys(players).map(player=>players[player]['name'])
)
export const selectOpponentPlayers = createSelector(
    [selectOpponentTeam],
    (players)=> Object.keys(players).map(player=>players[player]['name'])
)

export const selectUserTotalProjected = createSelector(
    [selectUserTeam],
    (userTeam)=>Object.keys(userTeam).map(position=>userTeam[position]['projectedPoints']).reduce((curr, val)=> curr + val)
)
export const selectOpponentTotalProjected = createSelector(
    [selectOpponentTeam],
    (opponentTeam)=>Object.keys(opponentTeam).map(position=>opponentTeam[position]['projectedPoints']).reduce((curr, val)=> curr + val)
)