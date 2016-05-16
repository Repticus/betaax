$(function() {
	var interval = 5000;
	var bottomBannerWidth = $("#bottomBanner").width();
	var stopDuration = 500;
	var inDuration = 800;
	var outDuration = 2000;
	animateBottomBanner();
	function animateBottomBanner() {
		$("#bottomBanner img:last")
			.css('left', bottomBannerWidth + 'px')
			.css('display', 'block')
			.delay(interval)
			.animate({
				left: 620
			}, {
				duration: inDuration,
				specialEasing: {
					left: "linear"
				},
				complete: function() {
					$("#bottomBanner img:last")
						.delay(stopDuration)
						.animate({
							left: 100
						}, {
							duration: outDuration
						});
					$("#bottomBanner img:first")
						.animate({
							left: -480
						}, {
							duration: outDuration,
							complete: function() {
								$(this)
									.css('left', bottomBannerWidth + 'px')
									.delay(interval)
									.animate({
										left: 690
									}, {
										duration: inDuration,
										specialEasing: {
											left: "linear"
										},
										complete: function() {
											$("#bottomBanner img:first")
												.delay(stopDuration)
												.animate({
													left: 140
												}, {
													duration: outDuration
												});
											$("#bottomBanner img:last")
												.animate({
													left: -590
												}, {
													duration: outDuration,
													complete: function() {
														animateBottomBanner();
													}
												});
										}
									});
							}
						});
				}
			});
	}
});
