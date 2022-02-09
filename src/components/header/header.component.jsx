import React from "react";
import { connect } from "react-redux";
import logo from "./crown-dynamic-color.png";
import home from "./home-5-24.png";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";
import {withRouter} from 'react-router-dom'
 const Header = ({ currentUser, history }) => {
  console.log(currentUser);
  return (
    <div className="header">
       
        <Link className="option-home" to="/home">
        <div style={{display:'flex', flexDirection:'row'}}>
        <span style={{verticalAlign:'middle', lineHeight:'90px'}}><img height="40px" src={logo} alt="Logo" /></span>
        <span style={{color:'white', marginLeft:'3px', verticalAlign:'middle', lineHeight:'90px'}}>Fantasy<b> Live Bets</b>  </span>
        </div>
      </Link>
     
    {currentUser ? (
      <Link style={{color:'white', fontWeight:'bolder', marginLeft:'48%'}} className="option" to="/home">
      Bet History
    </Link>
    ) : (
      ''
    )}
        {currentUser ? (
          <div style={{color:'white'}} className="option" onClick={() =>{ auth.signOut(); }}>
            SIGN OUT
          </div>
        ) : (
          ''
        )}
       
      </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default withRouter(connect(mapStateToProps, null)(Header));
