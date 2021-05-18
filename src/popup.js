// //----------------------
//     console.log('popup.js');

// // chrome.runtime.onMessage.addListener(
// //     function(request, sender, callback) {  // 1
// //         chrome.tabs.getSelected(function(tab) {  // 2
// //             callback(tab.title);
// //         });
// //         // 3
// //     }
// // );
// // chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
// // 	console.log(message)
// // 	setTimeout(function(){
// // 		sendResponse({a:1,b:2})
// // 	}, 5000)
// // 	return true
// // })
// // 
//   $("#btn").on("click", () => {
//     chrome.runtime.sendMessage({ greeting: "hello" }, function(response) {
//       console.log(response);
//     });
//   });
console.log("popup.js");

var textContents = chrome.extension.getBackgroundPage().textContents;
var textUrl = chrome.extension.getBackgroundPage().textUrl;
var div = document.getElementById('textView');
var url = document.getElementById('textUrl');
var shortCode = document.getElementById('shortCode');
div.textContent = textContents;
url.textContent = textUrl;
shortCode.textContent = '[oblink_comment url="'+textUrl+'" title="'+textContents+'"][/oblink_comment]';



function copy() {
  let range = document.createRange();
  var copyTarget = document.getElementById("shortCode");// コピー対象の要素を取得
  range.selectNodeContents(copyTarget);
  let selection = document.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");// クリップボードにコピー
}
document.getElementById("shortCode").addEventListener("click", copy);







chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  console.log(msg);//送られたメッセージをキャッチ
  sendResponse(response);//sendResponseでmsgを送ったスクリプト側にレスを返せる
});


console.log("test");
  $("#btn").on("click", () => {
    chrome.runtime.sendMessage({ greeting: "hello" }, function(response) {
      console.log(response);
    });
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      message: "これはテスト"
    });
  });

  });

$("#black").on("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      color: "black"
    });
  });
});

$("#red").on("click", () => {
  //送れない！！
  // chrome.runtime.sendMessage({ color: "red" });

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      color: "red"
    });
  });
});
