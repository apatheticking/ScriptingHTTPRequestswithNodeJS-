var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printUpperCase (html) {
  var flippedText = html.split("").reverse().join("");
  console.log(flippedText);
}

getHTML(requestOptions, printUpperCase);