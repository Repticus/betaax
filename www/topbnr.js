$(function () {
	showBnr2();
	function showBnr1() {
		showFoto();
		$("#topbnr4").delay(5000).animate({top: -80}, {duration: 1000,
			complete: function () {
				$(this).css('top', 90);
			}
		});
		$("#topbnr1").delay(5000).animate({top: 2}, {duration: 1000,
			complete: function () {
				showBnr2();
			}
		});
	}
	function showBnr2() {
		$("#topbnr1").delay(5000).animate({top: -80}, {duration: 1000,
			complete: function () {
				$(this).css('top', 90);
			}
		});
		$("#topbnr2").delay(5000).animate({top: 2}, {duration: 1000,
			complete: function () {
				showBnr3();
			}
		});
	}
	function showBnr3() {
		$("#topbnr2").delay(5000).animate({top: -80}, {duration: 1000,
			complete: function () {
				$(this).css('top', 90);
			}
		});
		$("#topbnr3").delay(5000).animate({top: 2}, {duration: 1000,
			complete: function () {
				showBnr4();
			}
		});
	}
	function showBnr4() {
		$("#topbnr3").delay(5000).animate({top: -80}, {duration: 1000,
			complete: function () {
				$(this).css('top', 90);
			}
		});
		$("#topbnr4").delay(5000).animate({top: 2}, {duration: 1000,
			complete: function () {
				showBnr1();
			}
		});
	}
	function showFoto() {
		$("#logo").animate({top: 95, left: 240, width: 100}, {duration: 1400});
		$("#foto3").animate({top: 50}, {duration: 1000});
		$("#foto2").delay(300).animate({top: 39}, {duration: 1000});
		$("#foto1").delay(600).animate({top: 49}, {duration: 1000,
			complete: function () {
				hideFoto();
			}
		});
	}
	function hideFoto() {
		$("#logo").delay(2800).animate({top: 40, left: 360, width: 216}, {duration: 1400});
		$("#foto1").delay(2400).animate({top: -140}, {duration: 1000});
		$("#foto2").delay(2700).animate({top: -160}, {duration: 1000});
		$("#foto3").delay(3000).animate({top: -140}, {duration: 1000});
	}
});
