import React from "react";
import Header from "../header/header.component";
import { connect } from "react-redux";
import BetHistorySlipContainer from "../bet-history-slip-container/bet-history-slip-container.component";
import { withRouter, Route } from "react-router-dom";
import BetDetails from '../bet-details/bet-details.component'
import './signed-in-home-page.styles.scss'
class SignedInHomePage extends React.Component {
  componentDidMount = ()=>{
    window.scrollTo(0, 0);
  }

  render() {
    const {   match } = this.props;

    console.log(match);
    return (
      <div className="signed-in-home-page">
        <Header />
       <Route exact path = {`${match.path}`} component ={BetHistorySlipContainer} />
       <Route path = {`${match.path}/:betId`} component ={BetDetails} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  betHistory: state.user.currentUser.betHistory,
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, null)(withRouter(SignedInHomePage));
