import React from "react";

import FormInput from "../form-input/form-input.component";

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

import "./sign-up.styles.scss";
import SignUpWithFacebook from '../sign-up-with-facebook/sign-up-with-facebook.component.jsx';
import SignUpWithGoogle from '../sign-up-with-google/sign-up-with-google.component.jsx';
import {switchHasAccount} from '../../redux/user/user.action';
import { connect } from 'react-redux';

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
      <div className="sign-up" style={{backgroundColor:'white'}}>
        <div style={{display:'flex', flexDirection:'row', height:'35px'}}>
        <div style={{width:'50%'}}>
        <SignUpWithFacebook/>
        </div>
        <div style={{width:'50%'}}>
        <SignUpWithGoogle/>
        </div>

        </div>
        <div style={{height:'20px', fontWeight:500, fontSize:'13px', color:'black'}}>Or</div>
        <div style={{color:'black', fontFamily:'arial', textAlign:'center', fontWeight:500, fontSize:'14px'}}>Sign up with your email and password</div>

        <form onSubmit={this.handleSubmit}>
        {this.state.emailMessage ? <div className='alert-password-short' style={{textAlign:'left',color:'red', width:'100%'}}>{this.state.emailMessage}</div> : <span style={{height:'11.5px', color:'white'}}>{" a"}</span>}

          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          {this.state.passwordMessage ? <div className='alert-password-short' style={{textAlign:'left',color:'red', width:'100%'}} >{this.state.passwordMessage}</div> : <span style={{height:'11.5px', color:'white'}}>{" a"}</span>}
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
         {this.state.passwordMessage && this.state.passwordMessage!='Passwords do not match' ? <div className='alert-password-short' style={{textAlign:'left', width:'100%'}}> a</div> : <span style={{height:'11.5px', color:'white'}}>{" a"}</span>}
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <button type="submit">Create Account</button>
        </form>
        <div style={{color:'black', backgroundColor:'#f5f8fc', borderBottomLeftRadius:'8px', borderBottomRightRadius:'8px', height:'60px', fontSize:'15px', borderTop:'1px solid #cfd6db', marginTop:'5px', paddingTop:'15px'}}>Already have an account? <span style={{color:'#1495ff', cursor:'pointer'}} onClick = {()=>this.props.switchHasAccount()}>Log in instead</span></div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>({
  switchHasAccount:()=>dispatch(switchHasAccount())
}
)


export default connect(null, mapDispatchToProps)(SignUp);
