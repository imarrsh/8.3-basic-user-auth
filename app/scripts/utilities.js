// url stuff maybe?
var $ = require('jquery');

var xParseHeaders = function(sessionId){

  $.ajaxSetup({
    beforeSend: function(xhr){
      xhr.setRequestHeader('X-Parse-Application-Id', 'mtparseserver');
      xhr.setRequestHeader('X-Parse-REST-API-Key', 'thompson1');

      if (sessionId){
        xhr.setRequestHeader('X-Parse-Session-Token', sessionId);
      }
    }
  });

};

module.exports = {
  xParseHeaders: xParseHeaders
};
