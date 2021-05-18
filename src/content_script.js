//----------------------
// console.log(document.title);
// console.log(location.href);
// console.log("content_script.js");
//     chrome.runtime.sendMessage({ greeting: "hello" }, function(response) {
//       console.log(response);
//     });

chrome.runtime.sendMessage({
    // value: document.getElementsByTagName('body')[0].outerText
    value: document.title,
    url: location.href
});

$(function () {
// console.log(document.title);
// console.log(location.href);

// $("body").prepend('<div class="txt">Hello World!</div>');
//     //↓疎通確認コード：タイトルの■が回転するはず
//     console.log('Chrome拡張の疎通確認コードが動いています。動作確認ができたら削除してください。');

// chrome.runtime.sendMessage("めっせぇじ", function (response){
// 	console.log("受け取ったデータ：", response)
// })

chrome.runtime.onMessage.addListener(function(msg) {
  $("body").css("background-color", msg.color);
  console.log(msg);
});
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  console.log(msg);//送られたメッセージをキャッチ
  sendResponse(response);//sendResponseでmsgを送ったスクリプト側にレスを返せる
});

});

