import { withRouter } from "react-router-dom";
import TitleContainer from "../../components/title-container/title-container.component";
import SignUpWithGoogle from "../../components/sign-up-with-google/sign-up-with-google.component";
import SignUpWithFacebook from "../../components/sign-up-with-facebook/sign-up-with-facebook.component";
import BackSmoke from './vectorstock_35553777.png'
import "./homepage.styles.scss";
import Instructions from '../instructions/instructions.component'
const HomePage = ({ history, match }) => {
  return (
    <div className="homepage" style={{backgroundImage:`url(${BackSmoke})`, color:'white', height:'100vh'}}>
      <TitleContainer />
      <div
        class="jumbotron-custom"
        style={{ textAlign: "center", borderRadius: "3px", paddingTop:'15px' }}
      >
        <div style={{display:'flex', justifyContent:'center', textAlign:'left', fontSize:'20px'}}>
         <Instructions />
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
          style={{border:'none'}}
        >
          Build team
        </button>
      </div>
    </div>
  );
};

export default withRouter(HomePage);
