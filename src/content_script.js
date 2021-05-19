//----------------------
console.log('content_script');

// 初回読み込み時
chrome.runtime.sendMessage({
    value: document.title,
    url: location.href
});

// タブ(別ウィンドウ)を移動した時に値を取得し直す用
window.onfocus = function () {
    chrome.runtime.sendMessage({
        value: document.title,
        url: location.href
    });
};



