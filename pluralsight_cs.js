chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if(request.action == "countCourses") {
		var authors = $('.author a');
		authors = $.makeArray(authors);
		var hist = {};
		authors.map(function (a) {
		if (a.title in hist)
			hist[a.title]++;
		else
			hist[a.title] = 1;
		});
		
		for (var a in hist) {
			var aName = '"' + a + '"';
			var links = $('.author a[title=' + aName + ']');
			$.each(links, function (i, v) {
				v.innerText = a + ' - ' + hist[a];
			});
		}
	}
	
	if(request.action == "uncountCourses") {
		var authors = $('.author a');
		authors = $.makeArray(authors);
		var hist = {};
		authors.map(function (a) {
		if (a.title in hist)
			hist[a.title]++;
		else
			hist[a.title] = 1;
		});
		
		for (var a in hist) {
			var aName = '"' + a + '"';
			var links = $('.author a[title=' + aName + ']');
			$.each(links, function (i, v) {
				v.innerText = a; 
			});
		}
	}
	if(request.action == "makeSortable") {
			var theadInjection= $('<thead>\
			<tr>\
				<th class="title">course</th>\
				<th class="author">author</th>\
				<th class="level">level</th>\
				<th class="rating">rating</th>\
				<th class="duration">duration</th>\
				<th class="releasedate">released</th>\
			</tr>\</thead>');
			$( '.course:not(:has(th))' ).append(theadInjection);
			$('.hoverHighlight').dataTable();
	}
	
	// if(request.action == "makeUnsortable") {
		// var oTable = $('.hoverHighlight').dataTable();
		// oTable.fnDestroy();
	// }
});

chrome.runtime.sendMessage({action: "show"});

