import React, {Component} from 'react';
import FormInput from '../FormInputComponent/FormInput'
import CustomButton from '../CustomButtonComponent/CustomButton'

import { signInWithGoogle } from '../../firebase/firebase.utils.js'

import './Login.css'

class Login extends Component {
  state= {
  	name: "" ,
  	email: "",
  	password:"",
  }

  handleChange = (e) => {
  	this.setState({
      [e.target.name]: e.target.value
  		})
  }
  handleSubmit = (e)=> {
  	e.preventDefault()
  	this.setState({
      name: '',
      email: '',
      password: ''
  	})
  }

  render(){
  	console.log(this.state)
  	return(
  		<>
  		<div className='signin'>
		      <h2>I already have an account </h2>
		      <span> Sign in with your email and password</span>

	      <form onSubmit={this.handleSubmit}>
	        <FormInput
	          name='email'
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
	        	<CustomButton type='submit'> SIGN IN</CustomButton>
	        	<CustomButton onClick={signInWithGoogle} isGoogleSignIn> SIGN IN WITH GOOGLE</CustomButton>
	         </div>
	      </form>
      </div>



      </>
  		)
  }

}

export default Login;
