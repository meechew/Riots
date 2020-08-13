document.addEventListener('DOMContentLoaded', function () {
    const FixPageButton = document.getElementById('FixPage');
    FixPageButton.addEventListener('click', function () {
        chrome.tabs.executeScript({
            //searches the body of a document and replaces
            //every "protest" with "riot" excluding those in quotes
            code: "let fix = document.body.innerHTML;" +
                "fix = fix.replace(/(?!\\B\"[^\"]*)(protest)(?![^\"]*\"\\B)/g, 'riot');" +
                "fix = fix.replace(/(?!\\B\"[^\"]*)(Protest)(?![^\"]*\"\\B)/g, 'Riot');" +
                "fix = fix.replace(/(?!\\B\"[^\"]*)(PROTEST)(?![^\"]*\"\\B)/g, 'RIOT');" +
                "document.body.innerHTML = fix;"});

    }, false);
}, false);