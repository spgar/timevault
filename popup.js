
info = ['Here is some information.',
        'This is additional information.',
        'Even more information.',
        'This is even more additional information.',
        'You have exhausted the information.',
];

document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get('level', function(result) {
        if (typeof result.level === 'undefined') {
            chrome.storage.local.set({'level': 0});
        } else {
            chrome.storage.local.set({'level': result.level + 1});
        }

        infoIndex = Math.min(result.level, info.length - 1);
        document.getElementById('information').textContent = info[infoIndex];
    });
});