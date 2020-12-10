export const styleReset = `
html {
	box-sizing: border-box;
}

*, *:before, *:after {
	box-sizing: inherit;
}

html {
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
}

body {
	-webkit-overflow-scrolling: touch;
}

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, menu, nav, output, ruby, section, summary, time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0 none;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
	display: block;
}

audio,
canvas,
progress,
video {
	display: inline-block;
}

audio:not([controls]) {
	display: none;
	height: 0;
}

a {
	background-color: transparent;
	-webkit-text-decoration-skip: objects;
}

abbr[title] {
	border-bottom: none;
	text-decoration: underline;
	text-decoration: underline dotted;
}

b,
strong {
	font-weight: inherit;
}

b,
strong {
	font-weight: bolder;
}

dfn {font-style: italic;}

mark {
	background-color: #ff0;
	color: #000;
}

svg:not(:root) {overflow: hidden;}

code,
kbd,
pre,
samp {
	font-family: monospace, monospace;
	font-size: 1em;
}

hr {
	box-sizing: content-box;
	height: 0;
	overflow: visible;
}

button,
input,
select,
textarea {
	font: inherit;
	margin: 0;
}

button,
input {
	overflow: visible;
}

button,
select {
	text-transform: none;
}

button,
html [type="button"],
[type="reset"],
[type="submit"] {
	-webkit-appearance: button;
}

input,
textarea,
button,
select,
a {
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}

address { font-style: normal; }

a:focus,
select:focus,
input:focus,
textarea:focus {
	outline: 0 none;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

button,
input[type="reset"],
input[type="button"],
input[type="submit"] {
	cursor: pointer;
}

button[disabled],
input[disabled] {
	cursor: default;
}

button {
	-webkit-appearance: none;
	-moz-appearance: none;
	background: transparent;
	padding: 0;
	border: 0;
	border-radius: 0;
	line-height: 1;
	outline: 0 none;
}

a,
a:hover {
	text-decoration: none;
}

a[href="javascript:void();"] {
	cursor: default;
}

ul,
ol {
	list-style: none;
}

blockquote,
q {
	quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

input[type="text"],
input[type="password"],
input[type="date"],
input[type="datetime"],
input[type="datetime-local"],
input[type="email"],
input[type="month"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="time"],
input[type="url"],
input[type="week"],
textarea {
	box-sizing: border-box;
	margin: 0;
}

[type="checkbox"],
[type="radio"] {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

input[type="search"] {
	-webkit-appearance: textfield;
	outline-offset: -2px;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button {
	-webkit-appearance: none;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
	height: auto;
	-webkit-appearance: none;
}

::-webkit-file-upload-button {
	-webkit-appearance: button;
	font: inherit;
}

input[type="number"] {
	-moz-appearance: textfield;
}

select {
	width: 100%;
	height: 20px;
	border: 0 none;
	background: none;
}

textarea {
	resize: none;
	border: 0 none;
	overflow: auto;
}

::-webkit-input-placeholder {
	color: #777777;
	line-height: normal;
}

::-moz-placeholder {
	color: #777777;
	opacity: 1;
}

:-ms-input-placeholder {
	color: #777777;
	line-height: normal;
}

[hidden] {
	display: none;
}`;
