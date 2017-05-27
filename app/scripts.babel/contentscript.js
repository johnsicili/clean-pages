'use strict';

var $body = $('body');

// RIGHT SIDEBAR AND MAIN REGION ADJUSTMENTS

// define selectors
var rightArr = ['secondary-content', 'widget-area', 'content__secondary-column', 'sidebar_contents', 'sidebar', 'column2', 'side-col', 'right-rail'];
var rightClass = [];
var rightId = [];
var rightMisc = ['aside', 'section.col-md-4'];

var mainArr = ['primary', 'main', 'primary-content', 'content-area', 'content__main-column', 'main-content', 'column1'];
var mainClass = [];
var mainId = [];
var mainMisc = ['div[role=main]', 'section.col-md-8'];

// turn selectors in ids and classes
for (var i = 0; i < rightArr.length; i++) {
	rightClass.push('.' + rightArr[i]);
	rightId.push('#' + rightArr[i]);
}
for (var i = 0; i < mainArr.length; i++) {
	mainClass.push('.' + mainArr[i]);
	mainId.push('#' + mainArr[i]);
}

// make selectors jquery readable
var rightSelectors = rightClass.concat(rightId, rightMisc);
var mainSelectors = mainClass.concat(mainId, mainMisc);
rightSelectors = rightSelectors.join(', ');
mainSelectors = mainSelectors.join(', ');

var $rightSelectors = $(rightSelectors);
var $mainSelectors = $(mainSelectors);

$rightSelectors.css({
	'display': 'none'
});
$body.find($mainSelectors).css({
	'max-width': '100%',
	'width': 'initial',
	'float': 'none'
});


// SOCIAL
var $social = $('body [class*="share"], body [class*="social"], body [class*="follow"], body [id*="share"]');
$social.css('display', 'none');


// LEGAL
var $legal = $('body [class*="legal"], body [class*="policy"], body [class*="terms"], body [class*="colophon"], body [class*="copy"]');
$legal.css('display', 'none');


// COMMENTS
var $comments = $('body [class*="comments"], body [class*="comment"], body [id*="comments"]');
$comments.css('display', 'none');
