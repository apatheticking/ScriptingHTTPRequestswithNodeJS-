var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function (response) {
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);