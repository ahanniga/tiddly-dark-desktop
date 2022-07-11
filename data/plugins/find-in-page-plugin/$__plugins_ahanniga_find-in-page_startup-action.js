/*\
title: $:/plugins/ahanniga/find-in-page/startup-action.js
type: application/javascript
module-type: startup

Add event listeners to highlight searched text

\*/

(function() {

	/*jslint node: false, browser: true */
	/*global $tw: true */
	"use strict";

	var updateHighlighting = require('$:/plugins/ahanniga/find-in-page/update.js');

	// Export name and synchronous status
	exports.name = "highlightsearch";
	exports.platforms = ["browser"];
	exports.after = ["story"];
	exports.synchronous = true;

	exports.startup = function() {
		$tw.wiki.addEventListener("change",function(changedTiddlers) {
			if(Object.keys(changedTiddlers).reduce(function(accumulator,current) {
				return accumulator || searchTextBecameEmpty(current) || (autoHighlightEnabled() && searchPopupBecameHidden(current,changedTiddlers[current]))
			},false)) {
				updateHighlighting();
			}
		});
		$tw.hooks.addHook("th-navigating",function(event) {
			if(autoHighlightEnabled()) {
			  // TODO: It should update highlight only if navigated from search results - how to check this?
			  setTimeout(function() {
			    updateHighlighting(true);
			  }, $tw.wiki.getTiddlerText("$:/config/AnimationDuration"));
		    }
			return (event);
		});
		$tw.hooks.addHook("th-editing-tiddler",function(event) {
			clearHighlighting();
			return (event);
		});
		$tw.hooks.addHook("th-new-tiddler",function(event) {
			clearHighlighting();
			return (event);
		});
	};

	function autoHighlightEnabled() {
		return $tw.wiki.getTiddlerText("$:/config/ahanniga/find-in-page/auto-highlight") === "yes";
	}

	function searchPopupBecameHidden(title,value) {
		return (title.indexOf("$:/state/popup/search-dropdown") === 0) && value.deleted
	}

	function searchTextBecameEmpty(title) {
		var searchTiddler = $tw.wiki.getTiddlerText("$:/config/ahanniga/find-in-page/search-tiddler");
		return title === searchTiddler && $tw.wiki.getTiddlerText(searchTiddler) === ""
	}

	function clearHighlighting() {
		setTimeout(function() {
			updateHighlighting(true, "");
		}, $tw.wiki.getTiddlerText("$:/config/AnimationDuration"));
	}
})();
