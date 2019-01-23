'use strict';
var request = require('request');

var url = 'http://xmlopen.rejseplanen.dk/bin/rest.exe/location?input=roskilde&format=json';

request.get({
    url: url,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is already parsed as JSON:
      console.log(data);
    }
});