import React from "react";
import "./App.css";
import HomePageContainer from "./pages/homepage-container/homepage-container.component";
import { Switch, Route, Redirect } from "react-router-dom";
import SetLineUpContainer from "./pages/set-lineup-container/set-lineup-container.component";
import ViewLines from "./pages/view-lines/view-lines.component";
import BetReceiptContainer from "./pages/bet-reciept-container/bet-receipt-container.component";
import { auth, createUserProfileDocument, fetchBetSlip } from "./firebase/firebase.utils";
import {setCurrentUser} from './redux/user/user.action.js'
import {connect} from 'react-redux'
class App extends React.Component {
 
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){

      const userRef = await createUserProfileDocument(userAuth);
      const betHistory = await fetchBetSlip(userAuth.uid)
      userRef.onSnapshot(snapshot => {
        setCurrentUser({
            id:snapshot.id,
            betHistory: betHistory,
            ...snapshot.data()
        });


      })

      


    }
    else{
      setCurrentUser(userAuth)
    }
      
    });


  };

  componentWillUnmount(){
    this.unsubscribeFromAuth();

  };
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" render={(props)=><Redirect {...props} to = '/home'/>}/>

          <Route path="/home" component={HomePageContainer} />
          <Route
            exact
            path="/set-lineup"
            component={SetLineUpContainer}
            enableResetScrollToCoords={false}
          />
    
          <Route exact path="/view-lines" render={(props)=>this.props.teamsFull==="true" ? <ViewLines {...props}/> : <Redirect to='/home' />}/>
          <Route exact path="/bet-receipt" render={(props)=>this.props.betSlip.length>0 ? <BetReceiptContainer {...props}/> : this.props.teamsFull==="true" ? <Redirect to ='/view-lines'/> : <Redirect to = '/home'/>} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  teamsFull: state.lineup.teamsFull,
  betSlip:state.action.slip
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
