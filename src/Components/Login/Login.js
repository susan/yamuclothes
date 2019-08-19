import React, {Component} from 'react';
import FormInput from '../FormInputComponent/FormInput'
import CustomButton from '../CustomButtonComponent/CustomButton'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js'

import './Login.css'

class Login extends Component {
  state= {
  	email: "",
  	password:"",
  }

  handleChange = (e) => {
  	this.setState({
      [e.target.name]: e.target.value
  		})
  }


  handleSubmit = async (e) => {
    console.log("is this firing")
  	e.preventDefault()
  	const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  render(){
  	return(
  		<>
  		<div className='sign-in'>
		      <h2>I already have an account </h2>
		      <span> Sign in with your email and password</span>

	      <form onSubmit={this.handleSubmit}>
	        <FormInput
	          name='email'
	          type='email'
	          value={this.state.email}
	          label='email'
	          required
	          handleChange={this.handleChange}
	          />
	        <FormInput
	          name='password'
	          type='password'
	          value={this.state.password}
	          label='password'
	          required
	          handleChange={this.handleChange}
	          />
	         <div className='buttons'>
	        	<CustomButton type='submit' value='submit'> SIGN IN</CustomButton>
	        	<CustomButton onClick={signInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE</CustomButton>
	         </div>
	      </form>
      </div>



      </>
  		)
  }

}

export default Login;
