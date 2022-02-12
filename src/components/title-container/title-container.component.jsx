import React from "react";
import crown from "./crown-dynamic-color.png";
import "./title-container.styles.scss";
import { withRouter } from "react-router-dom";
const TitleContainer = ({ history }) => {
  return (
    <div className="title-container" style={{display:'flex',  justifyContent:'center'}}>
    <div className = 'title-container-main' style={{display:'flex',  alignContent:'center'}}>
    <div style={{paddingTop:'10px'}}>  <img
    height="40px"
    alt="crown logo"
    src={crown}
    style={{ marginBottom: "5px", marginRight: "4px" }}
    onClick={() => {
      history.push("/");
    }}
  />{" "}</div>
    
      <h1
      className="app-title-banner"
      style={{ fontWeight: "400", marginRight:'8px' }}
    >
      Fantasy {" "}
    </h1>
      <h1
        className="app-title-banner"
        style={{  fontWeight: "600" }}
      >
        Live Bet
      </h1>
      </div>
    </div>
  );
};

export default withRouter(TitleContainer);
