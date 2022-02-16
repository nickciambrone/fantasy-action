import React from 'react';
import './sign-up-with-facebook.styles.scss'
import {signInWithFacebook} from '../../firebase/firebase.utils.js'
import FBLogo from './facebook-logo-white-11549845815wclpvkfdsb.png'

const SignUpWithFacebook = ()=>{
    return(
     
        <div className='sign-up-with-facebook' style={{cursor:'pointer', color:'white', fontWeight:'600'}} >
        <div class="btn-facebook" style={{width:'100%', backgroundColor:'#4267b2', height:'30px', padding:'5px', borderRadius:'4px'}} onClick = {signInWithFacebook}><img src={FBLogo} height='20px' /> Continue With Facebook</div> 
      

        </div>
    )
}

export default SignUpWithFacebook