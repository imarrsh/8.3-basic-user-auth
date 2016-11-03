// models/user
var $ = require('jquery');


var Backbone = require('backbone');

var UserModel = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: function(){
    return 'http://mt-parse-server.herokuapp.com/users';
  },
  signup: function(userCreds){
    this.save(userCreds).then(function(response){
      console.log(response);
    });
  },
  login: function(userCreds){
    this.fetch(userCreds).then(function(response){
      console.log(response);
    });
  },
  logout: function(){
    // do logout stuff
  }
});

// Things you might need:
// SessionID
// store user data in local storage

module.exports = {
  UserModel: UserModel
};

// {"username":"someone@somedomain.com","password":"password"}
