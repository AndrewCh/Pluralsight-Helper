$(function () {

	$('#countCourses').click(function (){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
				chrome.tabs.sendMessage(tabs[0].id, {action: "countCourses"});
		});
	});
	
	$('#makeSortable').click(function (){
			chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
					chrome.tabs.sendMessage(tabs[0].id, {action: "makeSortable"});
			});
	});
	
	$('#revertChanges').click(function (){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
				chrome.tabs.reload(tabs[0].id);
		});
	});
	
	$('#uncountCourses').click(function (){
		 chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
				chrome.tabs.sendMessage(tabs[0].id, {action: "uncountCourses"});
		 });
	 });
	
	// $('#makeUnsortable').click(function (){
		// chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
				// chrome.tabs.sendMessage(tabs[0].id, {action: "makeUnsortable"});
		// });
	// });
});