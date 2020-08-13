document.addEventListener('DOMContentLoaded', function () {
    const FixPageButton = document.getElementById('FixPage');
    FixPageButton.addEventListener('click', function () {
        chrome.tabs.executeScript({
        //chrome.tabs.getCurrent(function (tab) {
            code:'let bod = document.body.innerHTML;let fix = bod.replace(/protest/g, "riot");fix = fix.replace(/Protest/g, "Riot");fix = fix.replace(/PROTEST/g, "RIOT");document.body.innerHTML = fix;'

        });
    }, false);
}, false);