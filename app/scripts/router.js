
var $ = require('jquery');
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
  initialize: function(){
    // set up the headers
    // $.ajaxSetup({
    //   beforeSend: function(xhr){
    //     xhr.setRequestHeader("X-Parse-Application-Id", "mtparseserver");
    //     xhr.setRequestHeader("X-Parse-REST-API-Key", "thompson1");
    //   }
    // });
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
      React.createElement(MessagesContainer, {router: this}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = {
  router: router
};
