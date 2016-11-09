var React = require('react');

// layout components
var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var Section = require('./layout/layouts.jsx').Section;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;

var MessageInput = React.createClass({
  render: function(){
    return(
      <div className="chat-input">
        <form action="">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Type your message..."/>
          </div>
          <div className="form-group">
            <input type="submit" className="form-control btn btn-primary" value="Beam up my message!"/>
          </div>
        </form>
      </div>
    );
  }
});

var MessagesContainer = React.createClass({
  render: function(){
    return(
      <AppWrapper>
        <Section id="messages">
          <ContainerRow>

            <h1>Messages</h1>
            <MessageInput/>

          </ContainerRow>
        </Section>
      </AppWrapper>
    );
  }
});

module.exports = {
  MessagesContainer: MessagesContainer
}
