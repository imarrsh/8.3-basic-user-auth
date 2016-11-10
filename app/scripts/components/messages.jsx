var React = require('react');

var xParseHeaders = require('../utilities').xParseHeaders;

// data
var Message = require('../models/message').Message;
var MessageCollection = require('../models/message').MessageCollection;

// layout components
var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var Section = require('./layout/layouts.jsx').Section;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;


var MessageItem = React.createClass({
  render: function(){
    var message = this.props.message;
    return(
      <div className="list-group-item">
        <strong>{message.get('username')}: </strong>{message.get('content')}
      </div>
    );
  }
});

var MessageList = React.createClass({
  render: function(){
    var messages = this.props.messages;
    return(
      <div className="list-group">
        {messages.map( message =>
          <MessageItem key={message.get('objectId') || message.cid} 
           message={message}/> )}
      </div>
    );
  }
});

var MessageInput = React.createClass({
  getInitialState: function(){
    var message = new Message();

    return {
      message: message
    };
  },

  handleInput: function(e){
    var message = this.state.message
    , name = e.target.name
    , value = e.target.value;

    message.set(name, value)

    this.setState({message: message});
  },

  handleSubmit: function(e){
    e.preventDefault();
    var message = this.state.message;
    this.props.postMessage(message);

    this.setState({message: new Message()});
  },

  render: function(){
    var message = this.state.message
    , content = message.get('content');
    return(
      <div className="chat-input">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input onChange={this.handleInput} value={content} 
              name="content" type="text" className="form-control"
              placeholder="Type your message..." />
          </div>
          <div className="form-group">
            <input type="submit" className="form-control btn btn-primary" 
              value="Beam up my message!" />
          </div>
        </form>
      </div>
    );
  }
});

var MessagesContainer = React.createClass({
  getInitialState: function(){
    return {
      messages: new MessageCollection()
    }
  },

  componentWillMount: function(){
    var messages = this.state.messages;
    var router = this.props.router;

    var user = JSON.parse(localStorage.getItem('user'))[0];
    // console.log(user[0].sessionToken);
    if (!user.sessionToken){
      router.navigate('', {trigger: true, replace: true});
    }

    xParseHeaders(user.sessionToken);

    messages.fetch()
      .then(() => this.setState({messages: messages}));
  },

  postMessage: function(message){ 
    var user = JSON.parse(localStorage.getItem('user'))[0];

    xParseHeaders(user.sessionToken);

    var messages = this.state.messages;
    // console.log(user.objectId, user.username, message);
    messages.create({
      user: {
        __type: 'Pointer',
        className: '_User',
        objectId: user.objectId
      },
      content: message.get('content'),
      username: user.username
    });

    this.setState({messages: messages});

  },

  render: function(){
    return(
      <AppWrapper>
        <Section id="messages">
          <ContainerRow>

            <h1>Messages</h1>
            <MessageList messages={this.state.messages}/>
            <MessageInput postMessage={this.postMessage}/>

          </ContainerRow>
        </Section>
      </AppWrapper>
    );
  }
});

module.exports = {
  MessagesContainer: MessagesContainer
}
