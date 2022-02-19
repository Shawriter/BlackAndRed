function listenForClicks() {

  let button = document.querySelector(".button");
  button.addEventListener("click", (e) => {

    console.log("1listen");

    function tummenna(tabs) {

      browser.tabs.sendMessage(tabs[0].id, {
        command: "darken",
      });
    }

    function reportError(error) {
      console.error(`Could not darken: ${error}`);
    }
    browser.tabs.query({
      active: true,
      currentWindow: true
    }).then(tummenna).catch(reportError);

  });

  let button2 = document.querySelector(".button_2");
  button2.addEventListener("click", (e) => {

    function vaalenna(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
        command: "lighten",
      });
    }

    function reportError(error) {
      console.error(`Could not lighten: ${error}`);
    }
    browser.tabs.query({
      active: true,
      currentWindow: true
    }).then(vaalenna).catch(reportError);
  });

}

function reportExecuteScriptError(error) {
  console.error(`Failed to execute content script: ${error.message}`);
}

function handleUpdated(tab) {

  browser.tabs.sendMessage(tab.id, {
      command: "darken",
    });

}
function onComplete(changeInfo, tab) {

    //browser.webNavigation.onCompleted.addListener(function(tab){
      browser.tabs.sendMessage(tab.id, {
          command: "darken",
        });


}
browser.tabs.executeScript({
    file: "/content_scripts/dark.js"
  })
  .then(listenForClicks)
  .catch(reportExecuteScriptError);

browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
  browser.tabs.query({
      active: true,
      currentWindow: true
    })
    .then(onComplete(changeInfo, tab));
});
