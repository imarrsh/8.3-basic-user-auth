var $ = require('jquery');
var Backbone = require('backbone');
require('./router');

// $.ajaxSetup({
//   beforeSend: function(xhr){
//     xhr.setRequestHeader("X-Parse-Application-Id", "mtparseserver");
//     xhr.setRequestHeader("X-Parse-REST-API-Key", "thompson1");
//   }
// });

$(function(){

  Backbone.history.start();

}());


