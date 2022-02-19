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
          Build a fantasy lineup, then place bets on it
        </div>
        <div>
          <div
            style={{
              
              fontSize: "14px",
              display: "flex",
              flexDirection: "column",
              justifyContent:'center'
            }}
          >
         
            <div style={{width:'100%',display:'flex', justifyContent:'center', padding:'5px'}} >
            { this.state.details ?
              <div
              style={{
                backgroundColor: "white",
                width: "23px",
                height:'23px',
                textAlign: "center",
                borderRadius:'15px',
                transform: 'rotate(180deg)',
                cursor:'pointer'


              }}
              onClick={()=>this.setState({details:!this.state.details})}
            >
              <i class="arrow down"></i>
            </div> :
                <div
              style={{
                backgroundColor: "white",
                width: "23px",
                height:'23px',
                textAlign: "center",
                borderRadius:'15px',
                cursor:'pointer'


              }}
              onClick={()=>this.setState({details:!this.state.details})}
            >
              <i class="arrow down"></i>
            </div>

            }
            
          </div>
          { this.state.details ?
          <div>
          <ol style={{textAlign:'left'}}>
            <li>Choose the format of the fantasy team you want to build</li>
            <li>Draft a team</li>
            <li>Bet on alternate point totals and other prop bets</li>

          </ol> 
          </div>
          :''
          }
          </div>
        </div>
      </div>
    );
  }
}
export default Instructions;
