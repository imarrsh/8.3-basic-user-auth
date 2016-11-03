// models/user

var Backbone = require('backbone');

var User = Backbone.Model.extend({
  idAttribute: '_id',
  login: function(){},
  logout: function(){}
});

// Things you might need:
// SessionID
// store user data in local storage
