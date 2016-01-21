function save_options() {
    var timeout = document.getElementById('timeout').value;
    chrome.storage.local.set({'timeout': timeout}, function() {
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {
    chrome.storage.local.get('timeout', function(result) {
        document.getElementById('timeout').value = result.timeout;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
