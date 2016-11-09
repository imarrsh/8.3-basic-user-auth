// models/user
var $ = require('jquery');


var Backbone = require('backbone');

var UserModel = Backbone.Model.extend({
  idAttribute: 'objectId',

  signup: function(userCreds){
    this.urlRoot = 'http://mt-parse-server.herokuapp.com/users';
    this.save(userCreds).then(function(response){
      console.log(response);

      localStorage.setItem('sessionID', JSON.stringify(response.sessionToken));
    });
  },

  login: function(userCreds){
    this.urlRoot = 'http://mt-parse-server.herokuapp.com/login?username=' +
      encodeURI(userCreds.username) + '&password=' + encodeURI(userCreds.password);

    this.fetch().then(function(response){
      localStorage.setItem('sessionID', JSON.stringify(response.sessionToken));
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
