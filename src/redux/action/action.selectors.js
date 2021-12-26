import {createSelector} from 'reselect';

export const selectBetSlip = (state) =>state.action.slip;
export const selectBetAmounts = createSelector(
    [selectBetSlip],
    (info)=> info.map(ele=>ele['amount'])
)

export const checkAllBetAmountsPresent = createSelector(
    [selectBetAmounts],
    (amounts)=> amounts.includes('') || amounts.includes(NaN) || amounts.includes(null) || amounts.includes(0) ? false : true
)


