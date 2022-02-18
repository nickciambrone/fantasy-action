import React from "react";
import "./rosters.styles.scss";
import { connect } from "react-redux";
import { dropPlayer, clearRosters } from "../../redux/lineup/lineup.actions";


const Rosters = ({ team, userTeam, opponentTeam, dropPlayer, clearRosters, location }) => {
  return (
    // <div className='rosters'>
    // <table id='roster'>
    // <tr>
    // <th>Position</th><th>Player</th></tr>
    //     {team==='user' ?
    //     Object.keys(userTeam).map(ele=><tr><td>{ele}</td><td><div className='player-slot'>{userTeam[ele]['name']} {userTeam[ele]['name']=='' ? '-' :  <span onClick={()=>dropPlayer(userTeam[ele]['name'],userTeam[ele]['name'])} className='drop-player'>&#10006;</span>}</div></td></tr>) :
    //     Object.keys(opponentTeam).map(ele=><tr><td>{ele}</td><td>{opponentTeam[ele]['name']} {opponentTeam[ele]['name']=='' ? '-' :
    //    }</td></tr>)}
    // </table>
    // </div>
    <div className="rosters" style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}>
      <div
        id="roster-container"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              height: "50px",
              width: "20px",
              borderBottom: "1px solid rgb(109, 109, 109)",
            }}
          ></div>
          {Object.keys(userTeam).map((ele) => (
            <div
              className="roster-row"
              style={{ display: "flex", flexDirection: "row", height: "30px" }}
            >
              <div
                style={{ width: "21%", textAlign: "left", paddingLeft: "2px" }}
              ></div>
              <div
                className="player-slot drop-player"
                style={{ width: "79%", textAlign: "left" }}
              ></div>
            </div>
          ))}
        </div>

        <div className="rosters-roster" style={{ width: "100%" }}>
          <div
            className="roster-header "
            style={{ display: "flex", flexDirection: "row", width: "100%"
          }}
          >
            <div
              style={{
                width: "21%",
                paddingLeft: "2px",
                textAlign: "left",
                alignSelf: "flex-end",
              }}
            >
              Position
            </div>
            <div
              style={{
                width: "50%",
                textAlign: "left",
                alignSelf: "flex-end",
                paddingLeft: "6px",
              }}
            >
              Player
            </div>
            <div
            className = 'clear-lineup-button'
            style={{
              width: "27.5%",
              textAlign: "left",
              alignSelf: "flex-end",
              marginRight:'1.5%'
            }}
          >
          <div onClick ={()=>clearRosters()}
          style ={{borderRadius:'3px',padding:'4px',width:'80%',backgroundColor:"#c01f5c",color:'white', textAlign:'center', border:'1px solid black', position:'relative', top:'7px'}}>Clear Lineup</div>
          </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {team === "user"
              ? Object.keys(userTeam).map((ele) => (
                  <div
                    className="roster-row"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      height: "30px",
                    }}
                  >
                    <div
                      style={{
                        width: "21%",
                        paddingLeft: "2px",
                        textAlign: "left",
                        alignSelf: "flex-end",
                      }}
                    >
                      {ele + ":"}
                    </div>
                    <div
                      className="player-slot"
                      style={{
                        width: "79%",
                        textAlign: "left",
                        alignSelf: "flex-end",
                      }}
                    >
                      {userTeam[ele]["name"]}{" "}
                      {userTeam[ele]["name"] === "" ? (
                        "-"
                      ) : (
                        <span
                          onClick={() => dropPlayer(userTeam[ele]["name"], ele)}
                          className="drop-player"
                        >
                          &#10006;
                        </span>
                      )}
                    </div>
                  </div>
                ))
              : Object.keys(opponentTeam).map((ele) => (
                  <div
                    className="roster-row"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      height: "30px",
                    }}
                  >
                    <div
                      style={{
                        width: "21%",
                        paddingLeft: "2px",
                        textAlign: "left",
                        alignSelf: "flex-end",
                      }}
                    >
                      {" "}
                      {ele + ":"}
                    </div>
                    <div
                      style={{
                        width: "79%",
                        textAlign: "left",
                        alignSelf: "flex-end",
                      }}
                    >
                      {opponentTeam[ele]["name"]}{" "}
                      {opponentTeam[ele]["name"] === "" ? (
                        "-"
                      ) : (
                        <span
                          onClick={() =>
                            dropPlayer(opponentTeam[ele]["name"], ele)
                          }
                          className="drop-player"
                        >
                          &#10006;
                        </span>
                      )}
                    </div>
                  </div>
                ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="" style={{ height: "30px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dropPlayer: (player, position) => dispatch(dropPlayer({ player, position })),
  clearRosters: () => dispatch(clearRosters()),

});
const mapStateToProps = (state) => ({
  userTeam: state.lineup.userTeam,
  opponentTeam: state.lineup.opponentTeam,
});
export default connect(mapStateToProps, mapDispatchToProps)(Rosters);
