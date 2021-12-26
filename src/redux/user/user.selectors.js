import {createSelector} from 'reselect';

export const selectUserBetHistory = (state) =>state.user.currentUser.betHistory;


export const selectWager = collectionUrlParam =>
  createSelector(
    [selectUserBetHistory],
    wagers => wagers.filter(ele=>ele['createdAt']['seconds'] === collectionUrlParam)
  );