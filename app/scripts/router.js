
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var LoginContainer = require('./components/login.jsx').LoginContainer;
var MessagesContainer = require('./components/messages.jsx').MessagesContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'messages/': 'messages'
  },
  index: function(){
    // login screen
    ReactDOM.render(
      React.createElement(LoginContainer),
      document.getElementById('app')
    );
  },
  messages: function(){
    // messages view
    ReactDOM.render(
      React.createElement(MessagesContainer),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = {
  router: router
};
