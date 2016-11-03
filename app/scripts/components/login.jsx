var $ = require('jquery');
var React = require('react');

// data
var UserModel = require('../models/user').UserModel;

// layout components
var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var Section = require('./layout/layouts.jsx').Section;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;

// first time users!
var SignUpForm = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      pw: '',
    }
  },
  userChange: function(e) {
    this.setState({username: e.target.value})
  },
  pwChange: function(e) {
    this.setState({pw: e.target.value})
  },
  handleSubmit: function(e){
    e.preventDefault();
    this.props.signUpUser({
      username: this.state.username,
      password: this.state.pw
    })
  },
  render: function(){
    return(
      <div className="col-md-5 col-md-offset-1">
        <div>
          <h1>First Time? Sign up!</h1>
        </div>
        <div className="form-panel">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="signup-email">Email address</label>
              <input id="signup-email" type="email" 
                className="form-control" placeholder="Email" 
                onChange={this.userChange} value={this.state.username} 
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-pwd">Password</label>
              <input id="signup-pwd" type="password" 
                placeholder="Password" className="form-control" 
                onChange={this.pwChange} value={this.state.pw}
              />
            </div>
            <button type="submit" className="btn btn-primary">Sign me up!</button>
          </form>
        </div>
      </div>
    )
  }
});


// returning users!
var LoginForm = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      pw: '',
      rememberMe: false // localStorage user login email?
    }
  },
  userChange: function(e) {
    this.setState({username: e.target.value})
  },
  pwChange: function(e) {
    this.setState({pw: e.target.value})
  },
  handleSubmit: function(e){
    e.preventDefault()
    this.props.logInUser({
      username: this.state.username,
      password: this.state.pw
    })
  },
  render: function(){
    return(
      <div className="col-md-5">
        <div>
          <h1>Returning? Login Here</h1>
        </div>
        <div className="form-panel">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input onChange={this.userChange} type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input onChange={this.userChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Log me in!</button>
          </form>
        </div>
      </div>
    )
  }
});

var LoginContainer = React.createClass({
  getInitialState: function(){
    var user = new UserModel();

    return{
      user: user
    };
  },
  signUpUser: function(userCreds){
    // console.log(userCreds);
    var user = this.state.user;
    user.signup(userCreds);
    console.log(user)
  },
  logInUser: function(userCreds){
    var user = this.state.user;
    user.login(userCreds)
  },
  render: function(){
    return(
      <AppWrapper>
        <Section id="login-panel">
          <ContainerRow>

            <SignUpForm signUpUser={this.signUpUser}/>
            <LoginForm logInUser={this.logInUser}/>
            
          </ContainerRow>
        </Section>
      </AppWrapper>
    );
  }
});

module.exports = {
  LoginContainer: LoginContainer
}
