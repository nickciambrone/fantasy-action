import React from 'react';
import './sign-up-with-facebook.styles.scss'
import {signInWithFacebook} from '../../firebase/firebase.utils.js'
import FaceBook from './continueWithFacebook.png'

const SignUpWithFacebook = ()=>{
    return(
        <div className='sign-up-with-facebook'  >
        <img onClick = {signInWithFacebook} width='250'  class="img" src={FaceBook} alt=""></img>


        </div>
    )
}

export default SignUpWithFacebook