
document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get('level', function(result) {
        if (typeof result.level === 'undefined') {
            chrome.storage.local.set({'level': 0});
        }

        chrome.storage.local.set({'level': result.level + 1});
        document.getElementById('information').textContent = result.level;
    });
});