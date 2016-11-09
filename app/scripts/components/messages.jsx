var React = require('react');

var xParseHeaders = require('../utilities').xParseHeaders;

// data
var Message = require('../models/message').Message;
var MessageCollection = require('../models/message').MessageCollection;

// layout components
var AppWrapper = require('./layout/layouts.jsx').AppWrapper;
var Section = require('./layout/layouts.jsx').Section;
var ContainerRow = require('./layout/layouts.jsx').ContainerRow;


var Message = React.createClass({
  render: function(){
    var message = this.props.message;
    return(
      <div className="list-group-item">
        <p>{message.get('content')}</p>
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
          <Message key={message.get('objectId')} 
           message={message}/> )}
      </div>
    );
  }
});

var MessageInput = React.createClass({
  getInitialState: function(){
    return {
      message: ''
    };
  },

  handleInput: function(e){
    var name = e.target.name
    , value = e.target.value;

    this.setState({[name]: value});
  },

  handleSubmit: function(e){
    e.preventDefault();
    var message = this.state.message;
    this.props.postMessage(message);

    this.setState({message: ''});
  },

  render: function(){
    return(
      <div className="chat-input">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input onChange={this.handleInput} value={this.state.message} 
              name="message" type="text" className="form-control"
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

    var user = JSON.parse(localStorage.getItem('user'));
    // console.log(user[0].sessionToken);
    if (!user){
      router.navigate('', {trigger: true, replace: true});
    }

    xParseHeaders(user[0].sessionToken);

    messages.fetch()
      .then(() => this.setState({messages: messages}));
  },

  postMessage: function(message){
    console.log('got your message:', message);
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
