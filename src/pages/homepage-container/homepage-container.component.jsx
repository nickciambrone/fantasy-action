import React from 'react';
import Homepage from '../../components/homepage/homepage.component'
import SignedInHomePage from '../../components/signed-in-home-page/signed-in-home-page.component'
import {connect} from 'react-redux'
const HomePageContainer = ({currentUser}) => {
  return (
    <div className="homepage-container" >
    {currentUser ? <SignedInHomePage /> : <Homepage />}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser:state.user.currentUser
})
export default connect(mapStateToProps, null)(HomePageContainer);
