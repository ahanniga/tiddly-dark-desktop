/* Mono look to tag labels */
span.tc-tag-label {
    padding: 6px 10px;
    border-radius: 12px;
    color: <<colour muted-foreground>> !important;
  border: 1px solid <<colour tiddler-border>>;
    background: transparent;
}

.tc-sidebar-scrollable {
	overflow: hidden;
    background-color: <<color sidebar-scrollable-bg>>;
}

::-webkit-scrollbar
{
    width: 8px;
    height: 8px;
}

::-webkit-scrollbar-thumb
{
    border-radius: 8px;
    background-color: var(--color-grey-border);
}

/* Electron: make titlebar area draggable */
.tc-topbar-left {
    left: 70px;
    top: 0px;
    width: 100%;
    height: 20px;
    -webkit-app-region: drag;
    -webkit-user-select: none;
    z-index: 200;
}

.find-in-page-searched-text {
	display: none;
}

.cm-s-tiddlywiki .CodeMirror-linenumber {
    color: <<colour muted-foreground>>;
}

@media (min-width: 960px) {
  .tc-tiddler-frame {
    padding: 5px 18px 18px 18px !important;
    border-radius: 10px;
  }
}

.tc-titlebar h2 {
  font-size: 17pt;
}

.tc-tiddler-frame .tc-tiddler-controls {
  padding: 0;
}

.tc-tiddler-controls button {
  max-width: 18px;
  margin-left: 10px;
}

textarea, input[type=text], input[type=search], input[type=""], input:not([type]) {
    border: 1px solid <<colour tiddler-border>> !important;
    border-radius: 3px !important;
    padding: 5px !important;
    outline: none !important;
    margin-right: 5px !important;
}

/* Add some space under controls */
.tc-page-controls {
    margin-bottom: 12px !important;
}

span.tc-tag-label {
  padding: 5px 7px;
}

.tc-tags-wrapper {
	padding: 0px 0px 0px 10px !important;
	margin: 12px -18px 0px -18px !important;
	border-top: 1px solid <<colour tiddler-border>> !important;
	border-bottom: 1px solid <<colour tiddler-border>> !important;
}

.tc-tags-wrapper .tc-tag-list-item {
	margin-right: 7px;
	margin-top: 8px;
	margin-bottom: 8px;
}

code, kbd, samp, pre {
	font-size: 10pt;
}

.tc-sidebar-scrollable {
    padding: 20px 0 27px 20px;
}


.hljs {
    background-color: <<colour code-background>> !important;
    line-height: 1.4;
}

a.tc-tiddlylink-external {
    text-decoration: none !important;
    color: <<colour external-link-foreground>> !important;
    background-color: inherit !important;
}

li p {
    margin: 1px !important;
}

.tc-editor-toolbar button svg {
    color: <<colour muted-foreground>>;
    fill: <<colour muted-foreground>>;
    width: 1.6em;
    height: 1.2em;
}

.tc-editor-toolbar button {
	color: <<color foreground>>;
	fill: <<color foreground>>;
	border: 1px solid <<colour tiddler-border>>;
    background-color: transparent;
}

html button {
    line-height: 1.2;
    padding: 4px 13px;
    border-radius: 7px;
    cursor: pointer;
    border: 1px solid <<colour tiddler-border>>;
    background: transparent;
    color: <<colour muted-foreground>>;
}

.tc-site-title, .tc-titlebar {
	font-size: 21pt;
}

.ͼ3 .cm-gutters {
	background-color: <<colour gutter-bg>>;
	color: <<colour muted-foreground>>;
}

.ͼ3 .cm-activeLine {
	background-color: <<colour gutter-bg>>;
}
.ͼ3 .cm-activeLineGutter {
	background-color: #3b4351;
}

.ͼ4 .cm-line ::selection, .ͼ4 .cm-line::selection {
	background-color: #2c69aa !important;
	color: #cbdbec;
}

button.tc-unfold-banner {
    display: none;
}
.tc-unfold-banner:hover {
    display: none;
}

.tc-sidebar-lists button {
	color: <<colour muted-foreground>>;
	fill: <<colour muted-foreground>>;
}

.tc-edit-texteditor.tc-edit-texteditor-body {
	min-height: 120px;
	border: 1px solid <<colour tiddler-border>>;
}

.ͼ1 .cm-scroller {
    font-family: "Hack Nerd Font";
}

hr {
    height: 0px;
    color: inherit;
    border-top: 1px solid <<colour tiddler-border>>;
    border-bottom: none;
    border-left: none;
    border-right: none;
}

/* Placeholder */
::placeholder {
  color: <<colour muted-foreground>>;
  opacity: 1; /* Firefox */
  font-style: italic !important;
}

.ͼ1 .cm-placeholder {
    color: <<colour muted-foreground>>;
    font-style: italic !important;
}

table {
  border-collapse: separate;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid <<colour tiddler-border>>;
  border-spacing: 0;
}
table th, table td {
    border-top: none;
    border-left: none;
}
table th {
    padding: 6px 15px 6px 15px;
}
table td, .tc-control-panel td {
    padding: 4px 15px 4px 15px;
    background-color: var(--color-background);
}
tr:not(:first-child) td {
  border-top: 1px solid <<colour tiddler-border>>; 
}

table>thead :first-child th {
  border-bottom: 1px solid <<colour tiddler-border>>; 
}
thead > tr > th {
    background-color: var(--color-dark-grey);
}

/* Codemirror */
.ͼ3 .cm-gutters {
    background-color: <<colour gutter-bg>>;
    color: #6a7281;
}

/* Codemirror Search */
.ͼ3 .cm-button {
    color: #7a89a0;
    border: 1px solid <<colour tiddler-border>>;
	background-image: none;
}
.ͼ1 .cm-panel.cm-search input, .ͼ1 .cm-panel.cm-search button, .ͼ1 .cm-panel.cm-search label {
    min-height: 30px;
    font-size: 10pt;
}

/* Buttons in edit mode */
.tc-tiddler-controls > span > button, .tc-tiddler-controls > span > span > button, .tc-tiddler-controls > span > span > span > button {
    margin-left: 10px;
}

.commandpalette {
	background: <<colour code-background>>;
	border: 2px solid <<colour tiddler-border>>;
    padding: 5px;
}

/* Tiddler info dropdown */
.tc-tiddler-controls button {
	max-width: inherit;
	margin-left: inherit;
}

/* Highlight punctuation too dark */
.hljs-punctuation, .hljs-tag {
    color: #98a6b5;
}

/* Drop-down select ctl */
select {
	color: <<colour muted-foreground>>;
	background: <<colour pre-background>>;
	border: 1px solid <<colour tiddler-border>>;
	border-radius: 3px;
	padding: 5px;
	outline: none;
	background-color: transparent;
}

/* temporary: remove margin on user link */
.tc-subtitle .tc-tiddlylink {
	margin-right: auto;
}

