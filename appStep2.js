var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


  https.get(requestOptions, function (response) {
    var dataChunks = "";
    response.setEncoding('utf8');

    response.on('data', function (data) {
      dataChunks += data;
    });

    response.on('end', function (data) {
      console.log(dataChunks);
    });

  });

}

getAndPrintHTML();