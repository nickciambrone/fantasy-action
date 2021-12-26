const lineups = ({userTeam, selectOpponentTotalProjected, selectUserTotalProjected, opponentTeam}) => {
  const positions = Object.keys(userTeam)

  let tempPositions =[]
  for (const i in ["Q", "R", "W", "T", "F","K","D"]){
    for (var j=0; j<positions.length;j++){
        if (positions[j].substring(0,1)===["Q", "R", "W", "T", "F","K","D"][i]){
          tempPositions.push(positions[j])
        }
    }
  }
  console.log(tempPositions)
  
  return (
    <div className="lineups">
      <div
        className="roster-container-vl"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="view-lines-user-team">
          <div className="team" style={{ borderRight: "1px solid black" }}>
            <div
              className="first-dark"
              style={{
                display: "flex",
                flexDirection: "row",
                borderBottom: "1px solid black",
                paddingBottom: "3px",
              }}
            >
              <div
                className="first-psv"
                style={{
                  padding: "6px 3px 3px 3px",
                  alignSelf: "flex-end",
                }}
              >
                Player
              </div>
              <div
                className="first-psv-b"
                style={{
                  textAlign: "center",
                  padding: "5px",
                  alignSelf: "flex-end",
                }}
              >
                Projected Points
              </div>
            </div>

            {tempPositions.map((position, i) => (
              <div
                className="dark"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: ".25px solid #cccccc",
                }}
              >
                <div
                  className="player-slot-vl"
                  style={{ width: "75%", padding: "6px 3px" }}
                >
                  {userTeam[position].name} &nbsp; &nbsp;
                  {userTeam[position].position}&nbsp;&nbsp;
                  {userTeam[position].team}
                </div>
                <div
                  style={{
                    width: "40%",
                    textAlign: "center",
                    padding: "6px 3px",
                  }}
                >
                  {Math.round(100 * userTeam[position].projectedPoints) / 100}
                </div>
              </div>
            ))}
            <div
              className="dark"
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div className="v" style={{ width: "75%", padding: "6px 3px" }}>
                User Projected Total:
              </div>
              <div
                style={{
                  width: "40%",
                  textAlign: "center",
                  padding: "6px 3px",
                }}
              >
                {" "}
                {Math.round(selectUserTotalProjected * 100) / 100}
              </div>
            </div>
          </div>
        </div>
        <div className="view-lines-opponent-team">
          <div className="team">
            <div
              className="first-dark"
              style={{
                display: "flex",
                flexDirection: "row",
                borderBottom: "1px solid black",
                paddingBottom: "3px",
              }}
            >
              <div
                className="first-psv"
                style={{
                  padding: "6px 3px 3px 3px",
                  alignSelf: "flex-end",
                }}
              >
                Player
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "5px",
                  alignSelf: "flex-end",
                }}
                className="first-psv-b"
              >
                Projected Points
              </div>
            </div>
            {tempPositions.map((position, i) => (
              <div
                className="dark"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  borderBottom: ".25px solid #cccccc",
                }}
              >
                <div style={{ width: "60%", padding: "6px 3px" }}>
                  {opponentTeam[position].name} &nbsp;&nbsp;
                  {opponentTeam[position].position}&nbsp;&nbsp;
                  {opponentTeam[position].team}
                </div>
                <div
                  style={{
                    width: "40%",
                    textAlign: "center",
                    padding: "6px 3px",
                  }}
                >
                  {Math.round(100 * opponentTeam[position].projectedPoints) /
                    100}
                </div>
              </div>
            ))}
            <div
              className="dark"
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ width: "60%", padding: "6px 3px" }}>
                Opponent Projected Total:
              </div>
              <div
                classname="total"
                style={{
                  width: "40%",
                  textAlign: "center",
                  padding: "6px 3px",
                }}
              >
                {" "}
                {Math.round(selectOpponentTotalProjected * 100) / 100}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default lineups;