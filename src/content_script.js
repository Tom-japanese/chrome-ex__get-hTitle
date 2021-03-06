//----------------------
// console.log('content_script');

function test(){
    var elems = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    var construction = '';
    elems.forEach(elm => {
        var num = elm.nodeName.replace(/[^0-9]/g, '');// 見出しタグの番号取得
        construction += '<div style="margin-left:'+num+'em">' + elm.nodeName.toLowerCase()+':'+elm.textContent.replace(/\s+/g, '') + '</div>';
    });
    return construction;
}


// 初回読み込み時
chrome.runtime.sendMessage({value:test()},function(response){
    // 相手のメッセージリッスンが終わった後される処理
    var res = response.returnValue;
    console.log(res);
});


// タブ(別ウィンドウ)を移動した時に値を取得し直す用
window.onfocus = function () {
    chrome.runtime.sendMessage({value:test()},function(response){
        // 相手のメッセージリッスンが終わった後される処理
        var res = response.returnValue;
        console.log(res);
    });
};


