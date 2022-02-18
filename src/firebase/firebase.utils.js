import firebase from 'firebase/compat/app';
import "firebase/auth";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyBUZLN9HrIy5-74MYc1z3LTbJn1hmGTQgc",
    authDomain: "fantasy-royale-db.firebaseapp.com",
    projectId: "fantasy-royale-db",
    storageBucket: "fantasy-royale-db.appspot.com",
    messagingSenderId: "18467685389",
    appId: "1:18467685389:web:e870d694815e961377c144"
    };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const userSnapshot = await userRef.get();

    if (!userSnapshot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date()


      try{
        await userRef.set({
          email,
          createdAt,
          ...additionalData
        })
      
      }
      catch(error){
      }
    }

    return userRef;

  }
  
  export const addBetToUserObject = async (betSlip, userTeam, opponentTeam, userID, userEmail, opponentEmail) =>{
    const betSlipRef = firestore.doc(`users/${userID}/betSlip/${Math.floor(Math.random() * 10000)}`);

    const createdAt = new Date();
    try{
      betSlip = Object.assign({}, betSlip)
 

      await betSlipRef.set({
        userTeam,
        opponentTeam,
        createdAt,
        betSlip,
        userEmail:userEmail,
        opponentEmail:opponentEmail      })
    }
    catch(error){
      return false;

    }

    return betSlipRef

  }

  export const fetchBetSlip = async (userID)=>{
    const snapshot = await firestore.collection(`users/${userID}/betSlip`).get()
    return snapshot.docs.map(doc => doc.data());

  }
  export const fetchWager = async (userID, betId)=>{
    const snapshot = await firestore.collection(`users/${userID}/betSlip`).get()

    let wagers = snapshot.docs.map(doc => doc.data())


    let wagerDetails = wagers.filter(ele=>ele['createdAt']['seconds']===parseInt(betId))
    return wagerDetails[0]

  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const facebookProvider = new firebase.auth.FacebookAuthProvider();



  googleProvider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

  export default firebase;