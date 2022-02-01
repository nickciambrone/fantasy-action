import React from 'react';
import FormInput from '../form-input/form-input.component.jsx'
import './sign-in.styles.scss';

class SignIn extends React.Component{

    constructor(props){
        super(props)
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit = async event=>{
        event.preventDefault();
        // const {email, password} = this.state;
        // try{
        // await auth.signInWithEmailAndPassword(email, password)
        // this.setState({'email':'',password:''})

        // }catch(err){console.log('error signing in ', err.message)}

    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value})

    }

    render(){
        return (
            <div className='sign-in'>
                <h2 style={{color:'black', fontWeight:'bolder', fontFamily:'arial', textAlign:'left'}}>Sign in</h2>
                <span style={{color:'black', fontWeight:'bolder', fontFamily:'arial', textAlign:'left'}}>I already have an account</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        label='E-mail'
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        required />
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
            </div>
        )
    }

}

export default SignIn;