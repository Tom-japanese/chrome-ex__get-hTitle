//----------------------

console.log('background.js');

var textTitle = '';
var textUrl = '';

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        textTitle = request.value;
        textUrl = request.url;
    }
);


