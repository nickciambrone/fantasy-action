import React from "react";
import "./bet-receipt.styles.scss";
const BetReciept = ({ bet }) => {
  return (
    <div className="bet-receipt">
      User bets opponent ${bet["amount"]} on the {bet["type"]}. If user wins,
      opponent owes them ${bet["toWin"]} If the opponent wins, user owes the
      opponent ${bet["amount"]}
    </div>
  );
};

export default BetReciept;
