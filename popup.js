document.addEventListener('DOMContentLoaded', function () {
    const FixPageButton = document.getElementById('FixPage');
    FixPageButton.addEventListener('click', function () {
        chrome.tabs.executeScript({
            //searches the body of a document and replaces
            //every "protest" with "riot"
            //TODO: Filter out links to prevent broken links
            code: "let fix = document.body.innerHTML;" +
                "fix = fix.replace(/(?!\\B\"[^\"]*)(protest)(?![^\"]*\"\\B)/g, 'riot');" +
                "fix = fix.replace(/(?!\\B\"[^\"]*)(Protest)(?![^\"]*\"\\B)/g, 'Riot');" +
                "fix = fix.replace(/(?!\\B\"[^\"]*)(PROTEST)(?![^\"]*\"\\B)/g, 'RIOT');" +
                "document.body.innerHTML = fix;"});

  /*        This would have filtered by element
            function ElementalReplace(e) {
                const list = document.getElementsByTagName(e);
                let str = "";
                let k;
                for (k = 0;k < list.length; ++k) {
                    list[k].innerHTML = list[k].innerHTML.replace(/protest/g, 'riot');
                    list[k].innerHTML = list[k].innerHTML.replace(/Protest/g, 'Riot');
                    list[k].innerHTML = list[k].innerHTML.replace(/PROTEST/g, 'RIOT');
                }
            }

        const elements = ['p', 'h1', 'h2', 'h3', 'h4', 'h5']; //,'div'];

        let e;
        for (e of elements) {
                ElementalReplace(e);
            }*/

    }, false);
}, false);