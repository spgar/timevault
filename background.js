
info = ['Here is some information.',
        'This is additional information.',
        'Even more information.',
        'This is even more additional information.',
        'You have exhausted the information.',
];

chrome.browserAction.onClicked.addListener(function() {
    chrome.storage.local.get('level', function(result) {
        chrome.browserAction.setBadgeText({text: ''});

        levelToShow = 0;
        if (typeof result.level !== 'undefined') {
            levelToShow = result.level;
        }

        infoIndex = Math.min(levelToShow, info.length - 1);
        alert(info[infoIndex]);
    });
});

chrome.alarms.onAlarm.addListener(function(alarm) {
    chrome.storage.local.get('level', function(result) {
        if (typeof result.level === 'undefined') {
            chrome.storage.local.set({'level': 0});
        } else {
            chrome.storage.local.set({'level': result.level + 1});
        }
        chrome.browserAction.setBadgeText({text: 'X'});
    });
});

chrome.alarms.create('Start', { periodInMinutes: 1});
