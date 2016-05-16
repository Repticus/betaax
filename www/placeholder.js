$(function () {
	if (navigator.userAgent.match(/msie/i)) {
		($("input[placeholder], textarea[placeholder]")).each(function () {
			var element = $(this);
			element.val(element.attr("placeholder"));
			element.focus(removeLabel);
			element.blur(setLabel);
		});
	}
	function removeLabel() {
		var element = $(this);
		if (element.val() === element.attr("placeholder")) {
			element.val("");
		}
	}
	function setLabel() {
		var element = $(this);
		if (!element.val()) {
			element.val(element.attr("placeholder"));
		}
	}
});
