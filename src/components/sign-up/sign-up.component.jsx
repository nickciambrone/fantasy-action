import React from "react";

import FormInput from "../form-input/form-input.component";

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      passwordMessage:false,
      emailInUse:false
    };
  }
  handleSubmit = async event =>{
    event.preventDefault();
    const { email, password, confirmPassword} = this.state;
    
    if (password!==confirmPassword){
      this.setState({passwordMessage:'Passwords do not match', emailMessage:false})
        return;
    }
   

    try{
        const {user} = await auth.createUserWithEmailAndPassword(email, password)
        createUserProfileDocument(user,{})
        this.setState({
            email:'',
            password:'',
            confirmPassword:'',
            passwordMessage:false,
            emailMessage:false

        })
    }
    catch(error){
      console.log(error.code)
      if(error.code==='auth/email-already-in-use'){
          this.setState({
      
            passwordMessage:false,
            emailMessage:'E-mail Address is already in use'
        })

      }
      if(error.code==='auth/invalid-email'){
        this.setState({
          passwordMessage:false,

        emailMessage:'Invalid E-mail Address'
        })
      }
      if(error.code==='auth/weak-password'){
        this.setState({
          passwordMessage:'Password must be atleast 6 characters',

        emailMessage:false
        })
      }

    }


}
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 style={{color:'white', fontWeight:'bolder', fontFamily:'arial', textAlign:'left'}}>I do not have a account</h2>
        <div style={{color:'white', fontFamily:'arial', textAlign:'left', fontWeight:500}}>Sign up with your email and password</div>
        <form onSubmit={this.handleSubmit}>
        {this.state.emailMessage ? <div className='alert-password-short' style={{textAlign:'left',color:'red', width:'100%'}}>{this.state.emailMessage}</div> : <span style={{height:'11.5px', color:'black'}}>{" a"}</span>}

          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          {this.state.passwordMessage ? <div className='alert-password-short' style={{textAlign:'left',color:'red', width:'100%'}} >{this.state.passwordMessage}</div> : <span style={{height:'11.5px', color:'black'}}>{" a"}</span>}
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
         {this.state.passwordMessage && this.state.passwordMessage!='Passwords do not match' ? <div className='alert-password-short' style={{textAlign:'left', width:'100%'}}> a</div> : <span style={{height:'11.5px'}}>{" a"}</span>}
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <button type="submit">CREATE ACCOUNT</button>
        </form>
      </div>
    );
  }
}
export default SignUp;
