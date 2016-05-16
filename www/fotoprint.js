$(function() {
	showBnr2();
	$("#logo").delay(1000).animate({top: 10, left: 440, width: 100}, {duration: 1400});

	$("#foto3").css({'width': 60, 'left': 527}).delay(800).animate({top: 95}, {duration: 1000});
	$("#foto2").css({'width': 60, 'left': 466}).delay(1100).animate({top: 86}, {duration: 1000});
	$("#foto1").css({'width': 60, 'left': 405}).delay(1400).animate({top: 95}, {duration: 1000,
		complete: function() {
			$("#foto4").delay(600).animate({width: 120, 'left': 850}, {duration: 1000,
				complete: function() {
					$("#foto11").show(500, function() {
						$("#foto22").show(500, function() {
							$("#foto33").show(500);
						});
					});
				}});
			$("#foto5").animate({'width': 185, 'left': 620}, {duration: 1400});
		}
	});

	function showBnr1() {
		$("#topbnr3").delay(5000).animate({top: -80}, {duration: 1000,
			complete: function() {
				$(this).css('top', 90);
			}
		});
		$("#topbnr1")
			.delay(5000).animate({top: 2}, {duration: 1000,
			complete: function() {
				showBnr2();
			}
		});
	}
	function showBnr2() {
		$("#topbnr1").delay(5000).animate({top: -80}, {duration: 1000,
			complete: function() {
				$(this).css('top', 90);
			}
		});
		$("#topbnr2").delay(5000).animate({top: 2}, {duration: 1000,
			complete: function() {
				showBnr3();
			}
		});
	}
	function showBnr3() {
		$("#topbnr2").delay(5000).animate({top: -80}, {duration: 1000,
			complete: function() {
				$(this).css('top', 90);
			}
		});
		$("#topbnr3").delay(5000).animate({top: 2}, {duration: 1000,
			complete: function() {
				showBnr1();
			}
		});
	}
});
