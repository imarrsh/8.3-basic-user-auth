// models/message

var Backbone = require('backbone');

var Message = Backbone.Model.extend({
  idAttribute: '_id'
});

var MessageCollection = Backbone.Collection.extend({
  model: Message,
  url: 'http://mt-parse-server.herokuapp.com/classes/messages'
});
