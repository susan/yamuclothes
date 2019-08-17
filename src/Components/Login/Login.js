import React, {Component} from 'react';


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
  handleRegistration = (e, user)=> {
  	this.setState({
      user: this.state
  	})
  }

  render(){
  	console.log(this.state)
  	return(
  		<>
  		<div className="signin">
	      <h1>I already have an account </h1>
	      <p> Sign in with your email and password</p>
	      <form>
	        <input
	          name='email'
	          value={this.state.email}
	          placeholder='name'
	          onChange={this.handleChange}
	          />
	        <input
	          name='password'
	          value={this.state.password}
	          placeholder='password'
	          onChange={this.handleChange}
	          />
	        <button> SIGN IN</button>
	        <button> SIGN IN WITH GOOGLE</button>
	      </form>
      </div>

      <div className="signup">
	      <h1>I do not have an account </h1>
	      <p> Sign up with your email and password</p>
	      <form onSubmit={this.handleRegistration}>
	        <input
	          name='name'
	          value={this.state.name}
	          placeholder='display name'
	          onChange={this.handleChange}
	          />
	        <input
	          name='email'
	          value={this.state.email}
	          placeholder='email'
	          onChange={this.handleChange}
	          />
          <input
	          name='password'
	          value={this.state.password}
	          placeholder='password'
	          onChange={this.handleChange}
	          />
	          <input
	          name='password'
	          value={this.state.password}
	          placeholder='confirm password'
	          onChange={this.handleChange}
	          />

	        <button> SIGN UP</button>
	      </form>
      </div>

      </>
  		)
  }

}

export default Login;
