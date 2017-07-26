const express = require('express');
const app = express();

const request = require('request');

app.get('/', function (req, res) {
  request('http://data.lalaapp.wedeploy.io/location', function (error, response, body) {
    res.send(JSON.parse(body).map(x => `<img width="200px" style="display:block" src="${x.image}">`).join(''));
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
