/*\
title: $:/plugins/ahanniga/find-in-page/update.js
type: application/javascript
module-type: library

Update highlight of searched text (find in page)

\*/

var
	Mark = require("$:/plugins/ahanniga/find-in-page/mark.js"),
	markInstance;
	previousSearchedText = '';

module.exports = function(force = false, customSearchedText = null, highlight = false) {
	var searchTiddler = $tw.wiki.getTiddlerText("$:/config/ahanniga/find-in-page/search-tiddler");
	var searchedText = customSearchedText !== null ? customSearchedText : $tw.wiki.getTiddlerText(searchTiddler) || "";
	var totalCounter = 0;

	if((searchedText === previousSearchedText) && !force) return false;

	if(!markInstance) markInstance = new Mark(document.getElementsByClassName("tc-story-river")[0]);
	markInstance.unmark();
	if(searchedText !== "") markInstance.mark(searchedText, {
		exclude: [
			".tc-tiddler-edit-frame *"
		],
		filter: function(node, term, count) {
			totalCounter = count + 1;
			return true;
		},
        highlight: highlight
	});
	setCounterTiddler(totalCounter);
	previousSearchedText = searchedText;
	return true;
};

function setCounterTiddler(totalCounter) {
	var defaultFields = $tw.wiki.getCreationFields();
	var tiddlerFields = {
		title: "$:/temp/ahanniga/find-in-page/counter",
		text: "(" + totalCounter + ")"
	};
	$tw.wiki.addTiddler(new $tw.Tiddler(tiddlerFields, defaultFields));
}
