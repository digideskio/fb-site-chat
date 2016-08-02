$('#text').on('input keyup change', function () {
        		var val = $('#text').val();
                        window.fbChatWidgetText = val;
        		$('.fb-widget-mbutton div').html(val);
        		$('.fb-widget-iframe-container').addClass('fb-widget-hidden');
        	});

			$('#name').on('input keyup change', function () {
        		var val = $('#name').val();
        		var url = 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F'+val+'&tabs=messages&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=1802622113302450';
                        window.fbChatWidgetURL = url;

        		$('.fb-widget-iframe-container iframe').attr('src', url);
		        $('.fb-widget-iframe-container').removeClass('fb-widget-hidden');
        	});

        	$('#alignment').change(function () {
        		var val = $('#alignment').val();
                        window.fbChatWidgetAlignment = val;
        		$('.fb-widget-right, .fb-widget-left').removeClass('fb-widget-left fb-widget-right').addClass(val);
        	});
        	$('#getEmbedCode').click(function () {
        		var name = $('#name').val();
        		var text = $('#text').val();
        		var alignment = $('#alignment').val();
        		var email = $('#email').val();

        		if (!name || !text || !alignment || !email) return;

        		setTimeout(function () {
        		      $('.form-error').hide();	
        		}, 250);

        		swal({   
        		      title: "Embed code",   
        		      text: "<textarea class='ta' rows='5'></textarea><small class='sub'></small>",   
        		      html: true,
        		      animation: false
        		});

                        email = encodeURIComponent(email);
                        var url = 'https://us1.api.mailchimp.com/2.0/lists/subscribe.json?apikey=9735c86a966c9fd5166655a6ad954c9b-us1&id=e0794ce1c4&email[email]='+email+'&double_optin=false&send_welcome=false';
                        $('body').append("<iframe src='"+url+"' style='display:none'></iframe>");

        		$('.ta').val("<!-- Facebook Messenger Chat Widget -->\n" +
        		      '<script>window.fbChatWidgetAlignment="'+window.fbChatWidgetAlignment+'";window.fbChatWidgetURL="'+window.fbChatWidgetURL+'";window.fbChatWidgetText="'+window.fbChatWidgetText+'";</script><script src="https://kidgodzilla.github.io/fb-site-chat/m.js"></script>' +
        		      "\n<!-- End Facebook Messenger Chat Widget -->");

        		$('.contact-3').toggleClass('hidden');
        		// return false;
        	});
                $("body").on('focus', '.ta', function(){$(this).select()});
