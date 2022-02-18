export const updateBetHistory = (currentUser, wager) => {
    let tmpCurrentUser = currentUser;
    let tempUserBets = tmpCurrentUser['betHistory']
    tempUserBets.push(wager)
    tmpCurrentUser['betHistory'] = tempUserBets

    return tmpCurrentUser

}

