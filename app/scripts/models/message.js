// models/message

var Backbone = require('backbone');

var Message = Backbone.Model.extend({
  idAttribute: 'objectId',
  defaults: {
    content: ''
  },
  urlRoot: 'https://mt-parse-server.herokuapp.com/classes/Message'
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
