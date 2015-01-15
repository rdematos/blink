'use strict';
var request = require('request');
exports.handler = function(event, context) {
	request.post('https://api.spark.io/v1/devices/<SPARKCORE_ID>/blink',{ form: { 'access_token': '<SPARK_ACCESS_TOKEN' } }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            context.done(null, "blinked");
        }
    });
}

var context = {
  done: function contextDoneHandler(err, message) {
    if (err) {
      console.log('Event completed with error ' + err);
    } else {
      console.log('Event executed successfully');
    }
  }
};

exports.handler(null,context);
