import React from "react";
import "./instructions.styles.scss";

class Instructions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: false,
    };
  }
  render() {
    return (
      <div
        className="instructions"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          backgroundColor: "#121212",
          padding: "15px",
          borderRadius: "4px",
        }}
      >
        <div style={{ fontWeight: "bold" }}>
          Choose a fantasy lineup, then place bets on it
        </div>
        <div>
          <div
            style={{
              cursor: "pointer",
              fontSize: "14px",
              display: "flex",
              flexDirection: "column",
              justifyContent:'center'
            }}
          >
            <div>See more instructions </div>
            <div style={{width:'100%',display:'flex', justifyContent:'center'}} >
            <div
              style={{
                backgroundColor: "white",
                width: "23px",
                height:'23px',
                textAlign: "center",
                borderRadius:'15px',

              }}
            >
              <i class="arrow down"></i>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Instructions;
