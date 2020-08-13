document.addEventListener('DOMContentLoaded', function () {
    const FixPageButton = document.getElementById('FixPage');
    FixPageButton.addEventListener('click', function () {
        chrome.tabs.executeScript({
            //searches the body of a document and replaces
            //every "protest" with "riot"
            //TODO: Filter out links to prevent broken links
            code: "let fix = document.body.innerHTML;" +
                "fix = fix.replace(/protest/g, 'riot');" +
                "fix = fix.replace(/Protest/g, 'Riot');" +
                "fix = fix.replace(/PROTEST/g, 'RIOT');" +
                "document.body.innerHTML = fix;"

        });
    }, false);
}, false);