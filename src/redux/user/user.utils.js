export const updateBetHistory = (currentUser, wager) => {
    let tmpCurrentUser = currentUser;
    console.log(tmpCurrentUser)
    let tempUserBets = tmpCurrentUser['betHistory']
    tempUserBets.push(wager)
    tmpCurrentUser['betHistory'] = tempUserBets

    return tmpCurrentUser

}

