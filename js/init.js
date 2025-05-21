/*
 * Copyright (c) 2020 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	kevin_tm_hover_3d();
//	kevin_tm_video();
	kevin_tm_nav_bg();
	kevin_tm_mobile_menu();
	kevin_tm_anchor();
	kevin_tm_down();
	kevin_tm_relative_sections_spacing();
	kevin_tm_cursor();
	kevin_tm_partners();
	kevin_tm_awards();
	kevin_tm_kenburn_slider();
	kevin_tm_imgtosvg();
	kevin_tm_popup();
	kevin_tm_data_images();
	kevin_tm_animate_text();
	kevin_tm_jarallax();
	kevin_tm_portfolio();
	kevin_tm_isotope();
	kevin_tm_contact_form();
	kevin_tm_location();
	kevin_tm_ripple();
	kevin_tm_videoplayer();
	kevin_tm_totop();
	
	
	jQuery(window).on('resize',function(){
		kevin_tm_isotope();
		kevin_tm_portfolio();
	});
	
	jQuery(window).load('body', function(){
		setTimeout(function(){
        jQuery('.kevin_tm_preloader').addClass('loaded');
    }, 1000);
		setTimeout(function(){
        kevin_tm_isotope();
    }, 5000);
		Splitting();
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// ------------------   HOVER 3D    --------------------
// -----------------------------------------------------

function kevin_tm_hover_3d(){
	
	"use strict";
	
		$(".kevin_tm_about .about_inner").hover3d({
		selector: ".main",
		shine: false,
		sensitivity: 250,
			
	});
}

// -------------------------------------------------
// -----------------    HOVER VIDEO    -------------
// -------------------------------------------------

//function kevin_tm_video(){
//  var figure = $(".portfolio_list .list_inner").hover( hoverVideo, hideVideo );
//  function hoverVideo(e) {  
//      $('video', this).get(0).play(); 
//  }
//  function hideVideo(e) {
//      $('video', this).get(0).pause(); 
//  }
//}

// -----------------------------------------------------
// --------------   TOPBAR BACKGROUND    ---------------
// -----------------------------------------------------

function kevin_tm_nav_bg(){
	
	"use strict";
	
	jQuery(window).on('scroll',function(){
		var menu	 		= jQuery('.kevin_tm_topbar');
		var WinOffset		= jQuery(window).scrollTop();
		
		if(WinOffset >= 100){
			menu.addClass('animate');
		}else{
			menu.removeClass('animate');
		}
	});
}

// -----------------------------------------------------
// ---------------   MOBILE MENU    --------------------
// -----------------------------------------------------

function kevin_tm_mobile_menu(){
	
	"use strict";
		
	var trigger			= jQuery('.kevin_tm_mobile_menu .mobile_menu_inner .trigger');
	var triggerClose	= trigger.find('a .close');
	var triggerMenu		= trigger.find('a .menu');
	var dropdown		= jQuery('.kevin_tm_mobile_menu .dropdown');
	
	trigger.on('click',function(){
		var element	= jQuery(this);
		if(element.hasClass('opened')){
			element.removeClass('opened');
			triggerMenu.removeClass('closed');
			triggerClose.removeClass('opened');
			dropdown.slideUp();
		}else{
			element.addClass('opened');
			triggerMenu.addClass('closed');
			triggerClose.addClass('opened');
			dropdown.slideDown();
		}
		return false;
	});
}

// -------------------------------------------------
// -------------------  ANCHOR ---------------------
// -------------------------------------------------

function kevin_tm_anchor(){
	
	"use strict";
	
	jQuery('.kevin_tm_topbar .menu ul li a,.kevin_tm_mobile_menu .dropdown .dropdown_inner ul li a').off().on('click',function(e){
		e.stopPropagation();
		var element = jQuery(this);
		var url			= element.attr('href');
		if(url !== '#' && url.charAt(0) === '#'){
			$('html, body').animate({
				scrollTop: $(url).offset().top-80
			}, 1000);
		}
		return false;
	});
}

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function kevin_tm_down(){
	
	"use strict";
	
	jQuery('.kevin_tm_arrow_second a').on('click',function(){
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-80
			}, 1000);
		}
		return false;
	});
}

// -----------------------------------------------------
// ---------   CONTENT BOTTOM SPACING    ---------------
// -----------------------------------------------------

function kevin_tm_relative_sections_spacing(){
	"use strict";
	
	var relSection		= jQuery('.kevin_tm_relative_sections');
	var fixedPart   	= jQuery('.kevin_tm_fixed_part');
	var fixedPartHeight	= fixedPart.height();
	var WW				= jQuery(window).width();
	
	if(WW >= 1200){
		relSection.css({marginBottom:fixedPartHeight+'px'});
	}else{
		fixedPart.addClass('active');
	}
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function kevin_tm_cursor(){
    if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
};

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function kevin_tm_partners(){
	
	"use strict";
	
		var carouse1			= jQuery('.kevin_tm_partners .owl-carousel');
		carouse1.owlCarousel({
			loop: true,
			items: 4,
			lazyLoad: true,
			margin: 40,
			autoplay: true,
			autoplayTimeout: 4000,
			smartSpeed: 2000,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
				0:{items:1},
				480:{items:2},
				768:{items:3},
				1040:{items:3},
				1200:{items:4},
				1600:{items:4},
				1920:{items:5}
			}
		});
	
		var carouse2			= jQuery('.kevin_tm_testimonials .owl-carousel');
		carouse2.owlCarousel({
			loop: true,
			items: 4,
			lazyLoad: true,
			margin: 70,
			autoplay: true,
			autoplayTimeout: 6000,
			smartSpeed: 2000,
			dots: true,
			nav: false,
			navSpeed: true,
			center: true,
			responsive:{
				0:{items:1},
				480:{items:2},
				768:{items:3},
				1040:{items:3},
				1200:{items:3},
				1600:{items:3},
				1920:{items:3}
			}
		});
		kevin_tm_imgtosvg();
	}

// -------------------------------------------------
// --------------------  AWARDS   ------------------
// -------------------------------------------------

function kevin_tm_awards(){
	
	"use strict";
	
	var list			= jQuery('.kevin_tm_awards .awards_inner .list ul li');
	var box				= jQuery('.kevin_tm_awards .right');
	var firstChildImg	= jQuery('.kevin_tm_awards .awards_inner .list ul li:nth-child(1)').find('img').attr('src');
	box.css({backgroundImage: 'url('+firstChildImg+')'});
	
	list.on('mouseenter',function(){
		var element = jQuery(this);
		
		if(!element.hasClass('active')){
			list.removeClass('active');
			element.addClass('active');
			var imgURL		= element.find('img').attr('src');
			box.css({backgroundImage: 'url('+imgURL+')'});
		}
	})
}

// -------------------------------------------------
// -------------  SLIDER KENBURN  ------------------
// -------------------------------------------------

function kevin_tm_kenburn_slider(){
	
	"use strict";
	
		jQuery(function() {
			jQuery('.kevin_tm_experience .overlay_slider,.kevin_tm_home .overlay_slider').vegas({
			timer:false,	
			animation: [ 'kenburnsUp',  'kenburnsLeft', 'kenburnsRight'],
			delay:7000,

			slides: [
				{ src: 'img/slider/5.jpg' },
				{ src: 'img/slider/6.jpg' },
				{ src: 'img/slider/7.jpg' },
			]

		});
	});
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function kevin_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function kevin_tm_popup(){
		"use strict";
	
		jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				delegate: 'a.zoom', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});

		});
		jQuery('.popup-youtube').each(function() { // the containers for all your galleries
			jQuery(this).magnificPopup({
				disableOn: 700,
				type: 'iframe',
				mainClass: 'mfp-fade',
				removalDelay: 160,
				preloader: false,
				fixedContentPos: false
			});
		});
	}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

wow = new WOW({
    animateClass: 'animated',
    offset: 10
});
wow.init();

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function kevin_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------

function kevin_tm_animate_text(){
	
	"use strict";
	
	var animateSpan			= jQuery('.kevin_tm_animation_text_word');
	var animateSpan2		= jQuery('.kevin_tm_animation_text_word2');
	
	animateSpan.typed({
		strings: ["freelancer", "developer", "photographer"],
		loop: true,
		startDelay: 1e3,
		backDelay: 2e3
	});
	animateSpan2.typed({
		strings: ["Santiago", "Developer", "Designer"],
		loop: true,
		startDelay: 1e3,
		backDelay: 2e3
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function kevin_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}

// -------------------------------------------------
// -----------------    PORTFOLIO    ---------------
// -------------------------------------------------

// filterable 

function kevin_tm_portfolio(){

	"use strict";

	if(jQuery().isotope) {

		// Needed variables
		var list 		 = jQuery('.kevin_tm_portfolio .portfolio_list ul');
		var filter		 = jQuery('.kevin_tm_portfolio .portfolio_filter ul');

		if(filter.length){
			// Isotope Filter 
			filter.find('a').on('click', function(){
				var selector = jQuery(this).attr('data-filter');
				list.isotope({ 
					filter				: selector,
					animationOptions	: {
						duration			: 750,
						easing				: 'linear',
						queue				: false
					}
				});
				return false;
			});	

			// Change active element class
			filter.find('a').on('click', function() {
				filter.find('a').removeClass('current');
				jQuery(this).addClass('current');
				return false;
			});	
		}
	}
}

// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function kevin_tm_isotope(){
	
	"use strict";
	
	var masonry = $('.masonry');
	if($().isotope){
		masonry.each(function(){
			$(this).isotope({
			  itemSelector: '.masonry_item',
			  masonry: {

			  }
			});
		});
	}
	
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function kevin_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// ----------------    PLACEHOLDER    ------------------
// -----------------------------------------------------

function kevin_tm_location(){
	var button		= jQuery('.href_location');
	button.on('click',function(){
		var element		= jQuery(this);
		var address		= element.text();
		address			= address.replace(/\ /g,'+');
		var text		= 'https://maps.google.com?q=';
		window.open(text+address);
		return false;
	});
}

// -------------------------------------------------
// -------------  RIPPLE  --------------------------
// -------------------------------------------------

function kevin_tm_ripple(){
	
	"use strict";
	
	jQuery('#ripple').ripples({
			resolution: 500,
			dropRadius: 20,
			perturbance: 0.04
		});
}

// -------------------------------------------------
// -------------  GLITCH  --------------------------
// -------------------------------------------------

$(".glitch").mgGlitch({
		destroy: false,
		glitch: true,
		scale: true,
		blend: true,
		blendModeType: "hue",
		glitch1TimeMin: 200,
		glitch1TimeMax: 400,
		glitch2TimeMin: 10,
		glitch2TimeMax: 100
	});

// -------------------------------------------------
// -------------  VIDEO PLAYER ---------------------
// -------------------------------------------------

function kevin_tm_videoplayer(){
	"use strict";
	$(".youtube-bg").mb_YTPlayer();
}

// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

function kevin_tm_totop(){
	
	"use strict";
	
	jQuery(".kevin_tm_totop").on('click', function(e) {
		e.preventDefault();		
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}