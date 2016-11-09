// models/message

var Backbone = require('backbone');

var Message = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://mt-parse-server.herokuapp.com/classes/Message',
  postMessage: function(message){

  }
});

var MessageCollection = Backbone.Collection.extend({
  model: Message,
  url: 'https://mt-parse-server.herokuapp.com/classes/Message',
  parse: function(data){
    return data.results;
  }
});

module.exports = {
  Message: Message,
  MessageCollection: MessageCollection
};
