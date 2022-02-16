import { withRouter } from "react-router-dom";
import TitleContainer from "../../components/title-container/title-container.component";
import SignUpWithGoogle from "../../components/sign-up-with-google/sign-up-with-google.component";
import SignUpWithFacebook from "../../components/sign-up-with-facebook/sign-up-with-facebook.component";

import "./homepage.styles.scss";

const HomePage = ({ history, match }) => {
  return (
    <div className="homepage">
      <TitleContainer />
      <div
        class="jumbotron"
        style={{ textAlign: "center", borderRadius: "3px", paddingTop:'30px' }}
      >
        <div style={{display:'flex', justifyContent:'center'}}>
          <ol style={{textAlign:'left', fontSize:'20px'}}>
            <li>Set a custom fantasy lineup</li>
            <li>Place prop bets with fake money</li>
            <li>Win real money if you finish in the top 100</li>
          </ol>
        </div>

        <div
          style={{
            height: "35px",
            lineHeight: "35px",
            fontSize: "14px",
            display: "flex",
          }}
        >
          <div
            className="homepage-bar"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span
              style={{ height: "18.5px", borderBottom: "1px solid lightgrey" }}
            ></span>
          </div>
          <div
            className="home-text-a"
            style={{ paddingLeft: "4px", paddingRight: "4px" }}
          >
            Sign up first:
          </div>
          <div
            className="homepage-bar-right"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span
              style={{ height: "18.5px", borderBottom: "1px solid lightgrey" }}
            ></span>
          </div>
        </div>

        <p
          style={{ display: "flex", flexDirection: "column", fontSize: "12px" }}
        >
        <div className='social-homepage-section'>
          <SignUpWithGoogle />
          <SignUpWithFacebook />
          </div>
        </p>
        <div
          style={{
            height: "35px",
            lineHeight: "35px",
            fontSize: "14px",
            display: "flex",
          }}
        >
          <div
            className="homepage-bar"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span
              style={{ height: "18.5px", borderBottom: "1px solid lightgrey" }}
            ></span>
          </div>
          <div
            className="home-text-b"
            style={{ paddingLeft: "4px", paddingRight: "4px" }}
          >
            or set lineups first:
          </div>
          <div
            className="homepage-bar-right"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <span
              style={{ height: "18.5px", borderBottom: "1px solid lightgrey" }}
            ></span>
          </div>
        </div>
        <button
          className="set-lineup-homepage"
          onClick={() => history.push("/set-lineup")}
        >
          Set lineup
        </button>
      </div>
    </div>
  );
};

export default withRouter(HomePage);
