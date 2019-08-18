import React, {Component} from 'react';
import FormInput from '../FormInputComponent/FormInput'
import CustomButton from '../CustomButtonComponent/CustomButton'

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
      user: this.state
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
	        <CustomButton type='submit'> SIGN IN</CustomButton>
	        <CustomButton type='submit'> SIGN IN WITH GOOGLE</CustomButton>
	      </form>
      </div>

      <div className="signup">
	      <h2>I do not have an account </h2>
	      <span> Sign up with your email and password</span>
	      <form onSubmit={this.handleRegistration}>
	        <FormInput
	          name='name'
	          value={this.state.name}
	          label='display name'
	          handleChange={this.handleChange}
	          />
	        <FormInput
	          name='email'
	          value={this.state.email}
	          label='email'
	          handleChange={this.handleChange}
	          />
          <FormInput
	          name='password'
	          type='password'
	          value={this.state.password}
	         label='password'
	          handleChange={this.handleChange}
	          />
	          <FormInput
	          name='password'
	          type='password'
	          value={this.state.password}
	          label='confirm password'
	          handleChange={this.handleChange}
	          />

	        <CustomButton type='submit'> SIGN UP</CustomButton>
	      </form>
      </div>

      </>
  		)
  }

}

export default Login;
