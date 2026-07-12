(function () {
	var current = location.pathname.split("/").pop() || "index.html";
	var isHome = current === "index.html";

	var links = [
		{ href: "resume.html", label: "Resume" },
		{ href: "research.html", label: "Research" },
		{ href: "https://vsco.co/jacob-haydel/gallery", label: "Photography ↗", external: true },
		{ href: "contact.html", label: "Contact" }
	];

	var linksHtml = links.map(function (link) {
		var isActive = link.href === current;
		var attrs = isActive ? ' class="active" aria-current="page"' : "";
		if (link.external) {
			attrs += ' target="_blank" rel="noopener noreferrer"';
		}
		return '<a href="' + link.href + '"' + attrs + '>' + link.label + "</a>";
	}).join("\n\t\t");

	var wordmarkAttrs = isHome ? ' aria-current="page"' : "";

	document.getElementById("nav-placeholder").outerHTML =
		'<nav class="topnav">\n' +
		'\t<a class="wordmark"' + wordmarkAttrs + ' href="index.html">Jacob Haydel</a>\n' +
		'\t<div class="nav-links">\n\t\t' + linksHtml + '\n\t</div>\n' +
		'</nav>';
})();
