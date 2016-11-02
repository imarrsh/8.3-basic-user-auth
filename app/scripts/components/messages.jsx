var React = require('react');

// layout components
var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var Section = require('./layout/layouts.jsx').Section;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;

var MessagesContainer = React.createClass({
  render: function(){
    return(
      <AppWrapper>
        <Section id="messages">
          <ContainerRow>

            <h1>Messages</h1>

          </ContainerRow>
        </Section>
      </AppWrapper>
    );
  }
});

module.exports = {
  MessagesContainer: MessagesContainer
}
