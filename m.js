"use strict";

			(function () {
				function addCss (fileName) {
				  var head = document.head, link = document.createElement('link')
				  link.type = 'text/css'
				  link.rel = 'stylesheet'
				  link.href = fileName
				  head.appendChild(link)
				};

				addCss('https://kidgodzilla.github.io/fb-site-chat/fb-chat.css');
				
				document.write('<div class="fb-widget-mbutton '+window.fbChatWidgetAlignment+'" onclick="document.getElementById(\'fb-widget-iframe-container\').classList.remove(\'fb-widget-hidden\')"><div>'+window.fbChatWidgetText+'</div><img src="https://kidgodzilla.github.io/fb-site-chat/m-icon.png"></div><div id="fb-widget-iframe-container" class="fb-widget-iframe-container fb-widget-hidden '+window.fbChatWidgetAlignment+'"><div class="fb-widget-close-button" onclick="document.getElementById(\'fb-widget-iframe-container\').classList.add(\'fb-widget-hidden\')">x</div><iframe class="fb-widget-hidden" src="'+window.fbChatWidgetURL+'" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe></div>');
			})();