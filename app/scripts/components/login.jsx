var React = require('react');

// layout components
var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var Section = require('./layout/layouts.jsx').Section;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;


var LoginForm = React.createClass({
  render: function(){
    return(
      <h1>hi</h1>
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
            
          </ContainerRow>
        </Section>
      </AppWrapper>
    );
  }
});

module.exports = {
  LoginContainer: LoginContainer
}
