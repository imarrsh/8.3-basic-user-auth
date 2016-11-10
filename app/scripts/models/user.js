// models/user
var $ = require('jquery');
var Backbone = require('backbone');

var ParseUser = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: 'https://mt-parse-server.herokuapp.com/'
});


var UserModel = ParseUser.extend({
  signup: function(userCreds){
    this.urlRoot = this.urlRoot + 'users';
    this.save(userCreds).then(function(response){
      console.log(response);

      localStorage.setItem('sessionID', JSON.stringify(response.sessionToken));
    });
  },

  login: function(userCreds, callback){
    var urlRoot = this.urlRoot;
    this.urlRoot = this.urlRoot +
      'login?username=' + encodeURI(userCreds.username) +
      '&password=' + encodeURI(userCreds.password);

    this.fetch().then(response => {
      var userData = [];
      var user = {
        username: response.username,
        objectId: response.objectId,
        sessionToken: response.sessionToken
      };
      userData.push(user);

      localStorage.setItem('user', JSON.stringify(userData));
      //  some callback funtion, perhaps a router.navigate
      callback();
    }).fail(response => {
      // probably a better way...
      this.urlRoot = 'https://mt-parse-server.herokuapp.com/'
    });

  },

  postMessage: function(message){
    console.log('got your message:', message);
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
