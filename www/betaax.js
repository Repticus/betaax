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
	animateHead();
	var duration = 1200;
	function animateHead() {
		var delay = 6000;
		$("#logo2")
				  .delay(delay)
				  .fadeToggle(duration, function () {
				  });
		$("#hdr2")
				  .delay(delay)
				  .fadeToggle(duration, function () {
					  animateHead();
				  });
	}

	$("#bannerTop h2:first")
			  .animate({top: 0}, {duration: 1000,
				  complete: function () {
					  moveTopBnr();
				  }
			  });

	function moveTopBnr() {
		var delay = 3000;
		$("#bannerTop h2:nth-child(2)")
				  .delay(delay)
				  .animate({top: 0}, {duration: duration});
		$("#bannerTop h2:first")
				  .delay(delay)
				  .animate({top: -60}, {duration: duration,
					  complete: function () {
						  $(this).css("top", 60);
						  element = $(this).detach();
						  element.appendTo("#bannerTop");
						  moveTopBnr();
					  }
				  });
	}

	$("#bnrBtm h2:first")
			  .animate({top: 0}, {duration: 1000,
				  complete: function () {
					  moveBtmBnr();
				  }
			  });

	function moveBtmBnr() {
		var delay = 3000;
		$("#bnrBtm h2:nth-child(2)")
				  .delay(delay)
				  .animate({top: 0}, {duration: duration});
		$("#bnrBtm h2:first")
				  .delay(delay)
				  .animate({top: -100}, {duration: duration,
					  complete: function () {
						  $(this).css("top", 100);
						  element = $(this).detach();
						  element.appendTo("#bnrBtm");
						  moveBtmBnr();
					  }
				  });
	}
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
});
