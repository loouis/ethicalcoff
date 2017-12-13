( function( $ ) {


	jQuery(function () {

		'use strict';

//----------------------------------- Variables

  var $body = $('body'),
      $closeBtn = $('.close-btn'),
      $lightbox = $('.lightbox'),
      $contactBtn = $('#contact-btn'),
			$productContactBtn = $('#product-contact-btn'),
      $menuBtn = $('.menu-btn'),
      $mainHeader = $('.main-header'),
      $fullScreenNav = $('.full-screen-nav'),
      $win = $(window),
      $winHeight = $win.height(),
      winWidth = $win.width(),
      $projectDesc = $('.project-info__desc'),
      $scrollDownArrow = $(".scroll-down-btn"),
      $productSingleOtherProductsPager = $('.product-single-other-products-pager');



//----------------------------------- init libraries

  // Sticky kit

  var productSticky = function(){
    $(".project-info").stick_in_parent({
      offset_top: -10,
      parent: '.product-container'
    });
  };

	$.scrollIt({});




  $('.project-info')
    .on('sticky_kit:bottom', function(e) {
    $(this).parent().css('position', 'static');
  }).on('sticky_kit:unbottom', function(e) {
    $(this).parent().css('position', 'relative');
  });

  // Coffee Lightbox - FancyBox
  // $(".fancybox, fancybox.ajax").fancybox({
  //   type: 'ajax',
    // closeBtn: false,
    // arrows: false
    // tpl: {
    //     closeBtn: '<a title="Close" class="fancybox-item fancybox-close prd-lightbox__nav__arrows--prev" href="javascript:;"></a>',
    //     next: '<a title="Next" class="fancybox-nav fancybox-next prd-lightbox__nav__arrows--prev" href="javascript:;"><span></span></a>',
    //     prev: '<a title="Previous" class="fancybox-nav fancybox-prev prd-lightbox__nav__arrows--prev" href="javascript:;"><span></span></a>'
    // }
  // });



	// $(window).on('load resize', function(){
  //
	// 	var winWidth = $(window).width();
  //
	// 	if(winWidth > 600){
  //
	// 		$(".fancybox, fancybox.ajax").fancybox({
  //       type : 'ajax',
	// 			helpers : {
	// 				media : {}
	// 			},
	// 			margin: [60, 60, 60, 60]
	// 		});
  //
	// 	}else{
  //
	// 		$(".fancybox, fancybox.ajax").fancybox({
  //       type : 'ajax',
	// 			helpers : {
	// 				media : {}
	// 			}
	// 		});
  //
	// 		// slider.destroySlider();
  //
	// 	}
  //
	// });

  //Bx-slider
  // $('.product-bx-slider').bxSlider({
  //   pagerCustom: '.product-nav-pager',
  // });



  //Bx-slider
  $('.product-text-slider').bxSlider({
    pagerCustom: '#product-text-slider-pager',
  });

	//Bx-slider
  $('#testimonial-slider').bxSlider();

  // Wow
	var wow = new WOW({
		mobile: false
	});
	wow.init();



//----------------------------------- Functionality


// Contact btn click - show lightbox
$contactBtn.on('click', function(e){
  e.preventDefault();
  $body.addClass("body--no-scroll");
  $lightbox.addClass("lightbox--visible");
});
// Product single page btn - show contact lightbox
$productContactBtn.on('click', function(e){
  e.preventDefault();
  $body.addClass("body--no-scroll");
  $lightbox.addClass("lightbox--visible");
});

// Close lightbox and fixed body
var closeLightbox = function (){
  $body.removeClass("body--no-scroll");
  $lightbox.removeClass("lightbox--visible");
}

var closeNav = function (){
  $body.removeClass("body--no-scroll");
  $fullScreenNav.removeClass("full-screen-nav--visible");
  $mainHeader.removeClass("main-header--full-nav-visible");
}

// Close lightbox or nav
$(document).keyup(function(e) {
  if (e.keyCode === 27) {
    closeLightbox();
    closeNav();
  }
});

$closeBtn.on('click', function(){
  closeLightbox();
});


$menuBtn.on('click', function(){
  $fullScreenNav.toggleClass("full-screen-nav--visible");

  $mainHeader.toggleClass("main-header--full-nav-visible");

  // $body.toggleClass("body--no-scroll")

  if( $body.hasClass("body--no-scroll") ){
    $body.removeClass("body--no-scroll")
  }else{
    $body.toggleClass("body--no-scroll");
  }

});

//------ Scroll down btn from header

$('.scroll-header-button').on("click", function(e){
  $("body, html").animate({
    scrollTop:$winHeight
  })
});

// *** Load & resize here isnt working for nav-split

$(window).bind('resize load', function(){
  if( winWidth >= 600) {
    // kwicks
    $('.kwicks').kwicks({
      maxSize: '37%',
      behavior: 'menu',
      spacing: 0,
      easing: 'easeOutCirc',
      duration: 700
    });

    // Product sticky
    productSticky();

    $(".fixed-scroll-title").stick_in_parent({
      offset_top: 30,
    });

  }else{

  }
});


//----------------------------------- About page


var aboutLogo = $(".about-logo");

var aboutScrollLogo = function(){

  var scrollTop = $(document).scrollTop();

  if( scrollTop >= 300 ){
    aboutLogo.removeClass("about-logo--not-scrolled");
  }else{
    aboutLogo.addClass("about-logo--not-scrolled");
  }
}




//----------------------------------- Product page


//---- Animate scroll icon

var scrollArrowAnimation = function(){
  $scrollDownArrow.toggleClass("scroll-down-btn--animate");
}
setInterval(scrollArrowAnimation , 1200);

var productScrollPager = function(){

  var scrollTop = $(document).scrollTop();

  if( scrollTop >= 600 ){
    $productSingleOtherProductsPager.removeClass("product-single-other-products-pager--not-scrolled");

  }else{
    $productSingleOtherProductsPager.addClass("product-single-other-products-pager--not-scrolled");

  }

}

//---- Inner scroll overview text - show top gradient so the user knows that there is more text
$projectDesc.on("scroll", function(){
	if($(this).scrollTop() >= 3){
		$(".text-wrapper").addClass("text-wrapper--scrolled");
	}else{
    $(".text-wrapper").removeClass("text-wrapper--scrolled");
  }
});


//---- Scroll Button Functionality

if(winWidth >= 600){
  $(document).on('load scroll resize', function(){
    productScrollPager();
    aboutScrollLogo();
  });
}




//----------------------------------- About page

  // //-- Parallax scroll background image
  // var $parallaxImage = $('.parallax'),
  //     $win = $(window);
  //
  // $(window).scroll(function(){
  //   // ScrollTop / image data speed
  //   var yPos = -($win.scrollTop() / $parallaxImage.data('speed'));
  //
  //   // Put together the coords
  //   var coords = '50% '+ yPos + 'px';
  //
  //   // Add coords to bg image
  //   $parallaxImage.css({ backgroundPosition: coords });
  // });




});

})( jQuery );
