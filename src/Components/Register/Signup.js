import React, {Component} from 'react';

import FormInput from '../FormInputComponent/FormInput'
import CustomButton from '../CustomButtonComponent/CustomButton'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './SignupStyle.css'


class Signup extends Component {

  state= {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleChange = (e) => {
  	this.setState({
      [e.target.name]: e.target.value
  		})
  }


  handleSubmit = async (e)=> {
  	e.preventDefault()
  	const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
    	//call google database to create user
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      //then put this in our database
      await createUserProfileDocument(user, { displayName });

      //once we do this, we set state back to empty
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

	render(){
		return(
       <div className="sign-up">
	      <h2>I do not have an account </h2>
	      <span> Sign up with your email and password</span>
	      <form onSubmit={this.handleSubmit}>
	        <FormInput
	          name='displayName'
	          value={this.state.displayName}
	          label='Display Name'
	          handleChange={this.handleChange}
	          required
	          />
	        <FormInput
	          name='email'
	          type= 'email'
	          value={this.state.email}
	          label='email'
	          handleChange={this.handleChange}
	          required
	          />
          <FormInput
	          name='password'
	          type='password'
	          value={this.state.password}
	          label='password'
	          handleChange={this.handleChange}
	          required
	          />
	          <FormInput
	          name='confirmPassword'
	          type='password'
	          value={this.state.confirmPassword}
	          label='confirm Password'
	          handleChange={this.handleChange}
	          required
	          />

	        <CustomButton type='submit'> SIGN UP</CustomButton>
			</form>
      </div>
			)
	}
}

export default Signup;
