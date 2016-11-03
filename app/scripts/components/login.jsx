var React = require('react');

// layout components
var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var Section = require('./layout/layouts.jsx').Section;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;

var SignUpForm = React.createClass({
    render: function(){
    return(
      <div className="col-md-5 col-md-offset-1">
        <div className="form-panel">
          <form>
            <div className="form-group">
              <label htmlFor="login-email">Email address</label>
              <input type="email" className="form-control" id="login-email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="login-pwd">Password</label>
              <input type="password" className="form-control" id="login-pwd" placeholder="Password" />
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    )
  }
});

var LoginForm = React.createClass({
  
render: function(){
    return(
      <div className="col-md-5">
        <div className="form-panel">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      </div>
    )
  }
});

var LoginContainer = React.createClass({
  render: function(){
    return(
      <AppWrapper>
        <Section id="login">
          <ContainerRow>

            <h1>Login</h1>
            <LoginForm />
            <SignUpForm />
            
          </ContainerRow>
        </Section>
      </AppWrapper>
    );
  }
});

module.exports = {
  LoginContainer: LoginContainer
}
