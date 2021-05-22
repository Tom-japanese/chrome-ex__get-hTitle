//----------------------

console.log('background.js');


var elems = '';
chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse){
      elems = request.value;
      sendResponse({returnValue: "受け取りました！"});
    }
  );