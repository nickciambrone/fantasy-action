import React from 'react';
import {signInWithGoogle} from '../../firebase/firebase.utils.js'
import './sign-up-with-google.styles.scss'
const SignUpWithGoogle = ()=>{
    return(
        <div className='sign-up-with-google' >
        <div class="btn-google btn-block text-uppercase btn-outline" style={{width:'100%', padding:'7px 4px', borderRadius:'4px'}} onClick = {signInWithGoogle}><img src="https://img.icons8.com/color/16/000000/google-logo.png" /> Continue With Google</div> 
      

        </div>
    )
}

export default SignUpWithGoogle