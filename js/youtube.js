$(document).ready(function() {
			$('.btn-close').click(function(){
				$(".youtube-contents").each(function(){
					this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
				});
			});

			$(".modal-close").click(function() {
				$(".portfolio-modal").modal('hide');
				$(".youtube-contents").each(function(){
					this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
				});
			});
			
			$("#portfolioModal1").click(function(e) {
				// mouse click position
				var mouse_x = parseFloat(e.clientX);
				var mouse_y = parseFloat(e.clientY);

				// modal position
				var modal_x = parseFloat($('#portflio1-content').offset().left);
				var modal_y = parseFloat($('#portflio1-content').offset().top);

				// modal size
				var modal_w = parseFloat($('#portflio1-content').width());
				var modal_h = parseFloat($('#portflio1-content').height());

				if(mouse_x < modal_x || mouse_x > (modal_x + modal_w)) {
					if(mouse_y < modal_y || mouse_y > (modal_y + modal_h)) {
						$(".youtube-contents").each(function(){
							this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
						});
					}
				}
			});
			$("#portfolioModal2").click(function(e) {
				// mouse click position
				var mouse_x = parseFloat(e.clientX);
				var mouse_y = parseFloat(e.clientY);

				// modal position
				var modal_x = parseFloat($('#portflio2-content').offset().left);
				var modal_y = parseFloat($('#portflio2-content').offset().top);

				// modal size
				var modal_w = parseFloat($('#portflio2-content').width());
				var modal_h = parseFloat($('#portflio2-content').height());

				if(mouse_x < modal_x || mouse_x > (modal_x + modal_w)) {
					if(mouse_y < modal_y || mouse_y > (modal_y + modal_h)) {
						$(".youtube-contents").each(function(){
							this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
						});
					}
				}
			});
			$("#portfolioModal3").click(function(e) {
				// mouse click position
				var mouse_x = parseFloat(e.clientX);
				var mouse_y = parseFloat(e.clientY);

				// modal position
				var modal_x = parseFloat($('#portflio3-content').offset().left);
				var modal_y = parseFloat($('#portflio3-content').offset().top);

				// modal size
				var modal_w = parseFloat($('#portflio3-content').width());
				var modal_h = parseFloat($('#portflio3-content').height());

				if(mouse_x < modal_x || mouse_x > (modal_x + modal_w)) {
					if(mouse_y < modal_y || mouse_y > (modal_y + modal_h)) {
						$(".youtube-contents").each(function(){
							this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
						});
					}
				}
			});
			$("#portfolioModal4").click(function(e) {
				// mouse click position
				var mouse_x = parseFloat(e.clientX);
				var mouse_y = parseFloat(e.clientY);

				// modal position
				var modal_x = parseFloat($('#portflio4-content').offset().left);
				var modal_y = parseFloat($('#portflio4-content').offset().top);

				// modal size
				var modal_w = parseFloat($('#portflio4-content').width());
				var modal_h = parseFloat($('#portflio4-content').height());

				if(mouse_x < modal_x || mouse_x > (modal_x + modal_w)) {
					if(mouse_y < modal_y || mouse_y > (modal_y + modal_h)) {
						$(".youtube-contents").each(function(){
							this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
						});
					}
				}
			});

		});