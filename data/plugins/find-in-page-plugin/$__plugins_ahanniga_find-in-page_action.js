/*\
title: $:/plugins/ahanniga/find-in-page/action.js
type: application/javascript
module-type: widget

Move between search occurences

\*/
(function() {

    /*jslint node: false, browser: true */
    /*global $tw: true */
    "use strict";

    var Widget = require("$:/core/modules/widgets/widget.js").widget;
    var updateHighlighting = require('$:/plugins/ahanniga/find-in-page/update.js');

    var ScrollToMatch = function(parseTreeNode,options) {
        this.initialise(parseTreeNode,options);
    };

    let previousIndex = 0;
    let previousSearchText = "";

    /*
    Inherit from the base widget class
    */
    ScrollToMatch.prototype = new Widget();

    /*
    Render this widget into the DOM
    */
    ScrollToMatch.prototype.render = function(parent,nextSibling) {
        this.computeAttributes();
        this.execute();
    };

    /*
    Compute the internal state of the widget
    */
    ScrollToMatch.prototype.execute = function() {
        this.actionDirection = this.getAttribute("$direction");
    };

    /*
    Refresh the widget by ensuring our attributes are up to date
    */
    ScrollToMatch.prototype.refresh = function(changedTiddlers) {
        var changedAttributes = this.computeAttributes();
        if(changedAttributes["$direction"]) {
            this.refreshSelf();
            return true;
        }
        return this.refreshChildren(changedTiddlers);
    };

    /*
    Invoke the action associated with this widget
    */
    ScrollToMatch.prototype.invokeAction = function(triggeringWidget,event) {
        var self = this;
        var isHighlightingUpdated = updateHighlighting(true, null, true);
        var allMatches = $tw.pageContainer.querySelectorAll('mark');
        if (allMatches.length === 0 || !isHighlightingUpdated) {
            return true;
        }

        var searchText = getSearchText();
        var index = 0;
        if(searchText === previousSearchText) {
            index = this.actionDirection === "previous"
                ? getPrevIndex(allMatches.length)
                : getNextIndex(allMatches.length);
        }

        console.log(index);
        allMatches[index].scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        });

        allMatches[index].classList.add("selected")
        previousIndex = index;
        previousSearchText = searchText;

        updateCounterTiddler(["(", index + 1, "/", allMatches.length, ")"].join(""));
        return true;
    }

    function getPrevIndex(len) {
        return previousIndex - 1 < 0 ? len - 1 : previousIndex - 1;
    }

    function getNextIndex(len) {
        return previousIndex + 1 > len - 1 ? 0 : previousIndex + 1;
    }

    function getSearchText() {
        return $tw.wiki.getTiddlerText($tw.wiki.getTiddlerText("$:/config/ahanniga/find-in-page/search-tiddler"))
    }

    function updateCounterTiddler(txt) {
        var defaultFields = $tw.wiki.getCreationFields();
        var tiddlerFields = {
            title: "$:/temp/ahanniga/find-in-page/counter",
            text: txt
        };
        $tw.wiki.addTiddler(new $tw.Tiddler(tiddlerFields, defaultFields));
    }

    exports["action-scroll-to-match"] = ScrollToMatch;

})();
