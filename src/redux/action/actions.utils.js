export const addBet = (betSlip, incomingBet) =>{
let betSlipCopy = betSlip
    if (incomingBet['id'] ==='su'){
        betSlipCopy = betSlipCopy.filter((ele)=>ele['id']!=='so')
    }
    if (incomingBet['id'] ==='so'){
        betSlipCopy = betSlipCopy.filter((ele)=>ele['id']!=='su')
    }
    if (incomingBet['id'] ==='o'){
        betSlipCopy = betSlipCopy.filter((ele)=>ele['id']!=='u')
    }
    if (incomingBet['id'] ==='u'){
        betSlipCopy = betSlipCopy.filter((ele)=>ele['id']!=='o')
    }
    if (incomingBet['id'] ==='mo'){
        betSlipCopy = betSlipCopy.filter((ele)=>ele['id']!=='mu')
    }
    if (incomingBet['id'] ==='mu'){
        betSlipCopy = betSlipCopy.filter((ele)=>ele['id']!=='mo')
    }
    betSlip.push(incomingBet)
    return betSlipCopy
}

export const updateWager = (slip, bet) =>{

    let tempSlip = slip.map(ele=> {
        if (ele['id']===bet['id']){
            ele['amount']=bet['amount']
        }
         return ele 
    })

    return tempSlip
 


}