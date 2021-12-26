import React from "react";
import { connect } from "react-redux";
import logo from "./crown-dynamic-color.png";
import home from "./home-4-line.svg";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";

 const Header = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div className="header">
       
        <Link className="option" to="/home">
        <img height="25px" src={home} alt="Logo" />
         <span> Home</span>
      </Link>
      <Link className="option" to="/home">
      <img height="40px" src={logo} alt="Logo" />
    </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
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

export default connect(mapStateToProps, null)(Header);
