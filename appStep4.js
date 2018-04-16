var https = require('https');

function getHTML (options, callback) {

  https.get(options, function (response) {
    var dataChunks = "";
    response.setEncoding('utf8');

    response.on('data', function (data) {
      dataChunks += data;
    });

    response.on('end', function (data) {
      callback(dataChunks);
    });
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);