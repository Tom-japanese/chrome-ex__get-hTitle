//----------------------

console.log('background.js');

var textContents = '';

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        textContents = request.value;
        textUrl = request.url;
    }
);


// //変数sendをメッセージで送る
// chrome.runtime.sendMessage(send, function(response) {
//    console.log(response);//メッセージの受け手がレスを返したときキャッチできる
// });
// listen.js
// chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//   console.log(msg);//送られたメッセージをキャッチ
//   sendResponse(response);//sendResponseでmsgを送ったスクリプト側にレスを返せる
// });
// 
// 
// // 拡張機能がインストールされたときの処理
// chrome.runtime.onInstalled.addListener(function(){

//   // 親階層のメニューを生成
//   const parent_menu = chrome.contextMenus.create({
//     type: "normal",
//     id: "parent",
//     title: "背景色を変えるメニュー"
//   });

//   //子階層のメニューを親(parent_menu)に追加
//   chrome.contextMenus.create({
//     id: "red",
//     parentId: parent_menu,
//     title: "赤色"
//   });

//   chrome.contextMenus.create({
//     id: "blue",
//     parentId: parent_menu,
//     title: "青色"
//   });
// });


// /**
//   * メニューが選択されたときの処理
//   * 選択されたアイテムはこちらの関数の引数に入ってくる(今回は item)
//   * menuItemIdでmenuのidが文字列で取得できる
//   */
// chrome.contextMenus.onClicked.addListener(function(item){
//   console.log("メニューがクリックされたよ");

//   // 選ばれたメニューのidが item.menuItemId で取得できる
//   chrome.tabs.executeScript({
//     code: "document.body.style.backgroundColor = '" + item.menuItemId + "'"
//   });
// });