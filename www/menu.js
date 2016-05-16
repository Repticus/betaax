$(function () {
	$("#menu")
			  .append("<li>").children().last()
			  .addClass("clr")
			  .text(getTitle)
			  .css("margin-left", getOffset());
	$("#menu img")
			  .mouseenter(eventEnter)
			  .mouseleave(eventLeave);
	function getTitle(element) {
		if (!element) {
			return $("title").text();
		} else {
			return $(element).attr("alt");
		}
	}
	function getOffset(element) {
		if (!element) {
			active = $("#menu a.active img");
			if (!active.size()) {
				active = $("#menu a:first img");
			}
			offset = active.position().left;
		} else {
			offset = $(element).position().left;
		}
		menuWidth = $("#menu").width();
		textWidth = $("#menu li.clr").width();
		if (offset + textWidth > menuWidth) {
			offset = offset + 30 - textWidth;
		}
		return (offset - 10) + "px";
	}
	function eventEnter() {
		$("#menu li.clr")
				  .stop(true)
				  .fadeOut(0)
				  .text(getTitle(this))
				  .css("margin-left", getOffset(this))
				  .fadeIn(600);
	}
	function eventLeave() {
		if (!$(this).parent().hasClass("active")) {
			$("#menu li.clr")
					  .fadeOut(600, function () {
						  $(this)
									 .text(getTitle())
									 .css("margin-left", getOffset())
									 .fadeIn(600);
					  });
		}
	}
});
