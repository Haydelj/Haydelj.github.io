(function () {
	"use strict";

	/* Scrollspy for the sticky index bar — lifted from the style guide's
	   own script (~/Desktop/style-guide.html), with one adaptation: that
	   guide's index only ever held in-page anchors, so it queried every
	   `.idxbar a` directly. This page's bar also carries an external
	   "Photography" link, so targets are scoped to `[href^="#"]` first —
	   passing an absolute URL to document.querySelector() throws. */
	var links = Array.prototype.slice.call(document.querySelectorAll('.idxbar a[href^="#"]'));
	var targets = links.map(function (a) { return document.querySelector(a.getAttribute("href")); });

	function spy() {
		var best = 0, y = window.scrollY + 120;
		targets.forEach(function (el, i) { if (el && el.offsetTop <= y) best = i; });
		links.forEach(function (a, i) { a.classList.toggle("on", i === best); });
	}

	window.addEventListener("scroll", spy, { passive: true });
	spy();
})();
