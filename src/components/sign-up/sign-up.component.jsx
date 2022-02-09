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
    };
  }
  handleSubmit = async event =>{
    event.preventDefault();
    const { email, password, confirmPassword} = this.state;
    
    if (password!==confirmPassword){
        alert("Passwords do not match");
        return;
    }

    try{
        const {user} = await auth.createUserWithEmailAndPassword(email, password)
        createUserProfileDocument(user,{})
        this.setState({
            email:'',
            password:'',
            confirmPassword:''
        })
    }
    catch(error){

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
        <h2 style={{color:'black', fontWeight:'bolder', fontFamily:'arial', textAlign:'left'}}>I do not have a account</h2>
        <div style={{color:'black', fontFamily:'arial', textAlign:'left', fontWeight:500}}>Sign up with your email and password</div>
        <form onSubmit={this.handleSubmit}>
       
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
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
