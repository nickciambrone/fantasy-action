import React from 'react';
import FormInput from '../form-input/form-input.component.jsx'
import { auth } from '../../firebase/firebase.utils'

import './sign-in.styles.scss';
import SignUpWithFacebook from '../sign-up-with-facebook/sign-up-with-facebook.component.jsx';
import SignUpWithGoogle from '../sign-up-with-google/sign-up-with-google.component.jsx';

class SignIn extends React.Component{

    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            emailMessage:false,
            passwordMessage:false

        }
    }
    handleSubmit = async event=>{
        event.preventDefault();
        const {email, password} = this.state;
        try{
        await auth.signInWithEmailAndPassword(email, password)
        this.setState({'email':'',password:''})

        }catch(err){
            console.log('error signing in ', err.code)
            if (err.code==='auth/user-not-found'){
             this.setState({   emailMessage:'E-mail address not found', passwordMessage:false})
            }
            if(err.code==='auth/wrong-password'){
                this.setState({   passwordMessage:'Password is incorrect', emailMessage:false})

            }
        }

    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value})

    }

    render(){
        return (
            <div className='sign-in'>
                <h2 style={{color:'black', fontWeight:'bolder', fontFamily:'arial', textAlign:'left'}}>Sign in</h2>
                <div style={{color:'black', fontWeight:'bolder', fontFamily:'arial', textAlign:'left'}}>I already have an account</div>
                <form style={{marginBottom:'5px'}}onSubmit={this.handleSubmit}>
                {this.state.emailMessage ? <div style={{color:'red', width:'100%', textAlign:'left'}}>{this.state.emailMessage}</div> : <div style={{}}>test</div>}
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='E-mail'
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        required />
                        {this.state.passwordMessage ? <div style={{color:'red', width:'100%', textAlign:'left'}}>{this.state.passwordMessage}</div> : <div style={{}}>test</div>}

                    <FormInput 
                        name='password' 
                        type='password' 
                        label='Password'
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required />
            <div className='buttons'>
                    <button className = 'submit-sign-in' type='submit' > SIGN IN</button>

            </div>
                </form>
                <div style={{display:'flex', flexDirection:'column'}}>
                <div style={{width:'48%', marginBottom:'5px'}}>
                <SignUpWithFacebook/>
                </div>
                <div style={{width:'48%'}}>
                <SignUpWithGoogle/>
                </div>

                </div>
            </div>
        )
    }

}

export default SignIn;