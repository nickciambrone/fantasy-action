import React from 'react';
import './sign-up-with-facebook.styles.scss'
import {signInWithFacebook} from '../../firebase/firebase.utils.js'
import FaceBook from './17639236_1785253958471956_282550797298827264_n.png'

const SignUpWithFacebook = ()=>{
    return(
        <div className='sign-up-with-facebook'  >
        <img onClick = {signInWithFacebook} width='250'  class="img" src={FaceBook} alt=""></img>


        </div>
    )
}

export default SignUpWithFacebook