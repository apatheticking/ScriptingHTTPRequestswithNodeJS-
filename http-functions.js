var https = require('https');

module.exports = function getHTML (options, callback) {
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
};

