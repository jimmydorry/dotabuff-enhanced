chrome.tabs.onUpdated.addListener(function(tabId, changedInfo, tab) {
  var mid = 0;
  var strURL = tab.url.split("/")[tab.url.split("/").length - 1];
  
  if (strURL.indexOf("#") !== -1){
    strURL = strURL.substr(0, strURL.indexOf("#"));
  }
  if (strURL.indexOf("?") !== -1){
    strURL = strURL.substr(0, strURL.indexOf("?"));
  }
  mid = strURL;

  if (changedInfo.status == "complete" && ((tab.url.split("/")[tab.url.split("/").length - 2] == "matches" && mid > 0) || (tab.url.split("/")[tab.url.split("/").length - 3] == "matches" && tab.url.split("/")[tab.url.split("/").length - 2] > 0 && tab.url.split("/")[tab.url.split("/").length - 1] == "skills"))) {
    chrome.tabs.executeScript(tabId, {"file": "jquery-1.9.1.min.js"}, function() {
	  chrome.tabs.executeScript(tabId, {"file": "func-v0.2.js"});
    });
  }
  if (changedInfo.status == "complete" && ((tab.url.split("/")[tab.url.split("/").length - 2] == "players" && tab.url.split("/")[tab.url.split("/").length - 1] > 0) || (tab.url.split("/")[tab.url.split("/").length - 3] == "players" && tab.url.split("/")[tab.url.split("/").length - 2] > 0))){
    chrome.tabs.executeScript(tabId, {"file": "jquery-1.9.1.min.js"}, function() {
	  chrome.tabs.executeScript(tabId, {"file": "sig_gen.js"});
    });
  
  }
  if (changedInfo.status == "complete" && (tab.url.split("/")[3] == "topics" && tab.url.split("/")[4].length > 0)){
	chrome.tabs.executeScript(tabId, {"file": "jquery-1.9.1.min.js"}, function() {
	  chrome.tabs.executeScript(tabId, {"file": "comments.js"});
    });
  
  }
});