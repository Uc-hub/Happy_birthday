;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// Go to next section
	var gotToNextSection = function(){
		var el = $('.fh5co-learn-more'),
			w = el.width(),
			divide = -w/2;
		el.css('margin-left', divide);
	};

	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	// FullHeight
	var fullHeight = function() {
		if ( !isiPad() && !isiPhone() ) {
			$('.js-fullheight').css('height', $(window).height() - 49);
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height() - 49);
			})
		}
	};

	var toggleBtnColor = function() {

	
		if ( $('#fh5co-hero').length > 0 ) {	
			$('#fh5co-hero').waypoint( function( direction ) {
				if( direction === 'down' ) {
					$('.fh5co-nav-toggle').addClass('dark');
				}
			} , { offset: - $('#fh5co-hero').height() } );

			$('#fh5co-hero').waypoint( function( direction ) {
				if( direction === 'up' ) {
					$('.fh5co-nav-toggle').removeClass('dark');
				}
			} , { 
				offset:  function() { return -$(this.element).height() + 0; }
			} );
		}



	};


	// Scroll Next
	var ScrollNext = function() {
		$('body').on('click', '.scroll-btn', function(e){
			e.preventDefault();

			$('html, body').animate({
				scrollTop: $( $(this).closest('[data-next="yes"]').next()).offset().top
			}, 1000, 'easeInOutExpo');
			return false;
		});
	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas-visible') ) {

    			$('body').removeClass('offcanvas-visible');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	// Offcanvas
	var offcanvasMenu = function() {
		$('body').prepend('<div id="fh5co-offcanvas" />');
		$('#fh5co-offcanvas').prepend('<ul id="fh5co-side-links">');
		$('body').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>');

		$('.left-menu li, .right-menu li').each(function(){

			var $this = $(this);

			$('#fh5co-offcanvas ul').append($this.clone());

		});
	};

	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);

			$('body').toggleClass('fh5co-overflow offcanvas-visible');
			$this.toggleClass('active');
			event.preventDefault();

		});

		$(window).resize(function() {
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas-visible') ) {
		   	$('body').removeClass('offcanvas-visible');
		   	$('.js-fh5co-nav-toggle').removeClass('active');
		   }
		});

	};


	var testimonialFlexslider = function() {
		var $flexslider = $('.flexslider');
		$flexslider.flexslider({
		  animation: "fade",
		  manualControls: ".flex-control-nav li",
		  directionNav: false,
		  smoothHeight: true,
		  useCSS: false /* Chrome fix*/
		});
	}


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);
			
			return false;
		});
	
	};



	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 500, 'easeInOutExpo' );
					});
					
				}, 1000);
				
			}

		} , { offset: '95%' } );
	};
	
	var contentWayPoint2 = function() {
		var i = 0;
		$('.animate-box2').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box2.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInDown animated');
							el.removeClass('item-animate');
						},  k * 500, 'easeInOutExpo' );
					});
					
				}, 6000);
				
			}

		} , { offset: '95%' } );
	};

	var contentWayPoint3 = function() {
		var i = 0;
		$('.animate-box3').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box3.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 700, 'easeInOutExpo' );
					});
					
				}, 300);
				
			}

		} , { offset: '95%' } );
	};

	
	var contentWayPoint4 = function() {
		var i = 0;
		$('.animate-write1').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-write1.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp2 animated');
							el.removeClass('item-animate');
						},  k * 7000, 'easeInOutExpo' );
					});
					
				}, 7000);
				
			}

		} , { offset: '95%' } );
	};
	
	
		var contentWayPointn = function() {
		var i = 0;
		$('.animate-boxn').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-boxn.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUpn animated');
							el.removeClass('item-animate');
						},  k * 500, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};

	


	// Document on load.
	$(function(){
		ScrollNext();
		goToTop();

		// Animate
		contentWayPoint();
		contentWayPoint2();
		contentWayPoint3();
		contentWayPoint4();
		contentWayPointn();
	});


}());

function startTime(){
	 var d = new Date;
	 var day = d.getDate();
	 var month = d.getMonth();
	 var year = d.getFullYear();
	
	switch(month){
		case 0:
		month = 1;
		break;
		
		case 1:
		month = 2;
		break;
		
		case 2:
		month = 3;
		break;
		
		case 3:
		month = 4;
		break;
		
		case 4:
		month = 5;
		break;
		
		case 5:
		month = 6;
		break;
		
		case 6:
		month = 7;
		break;
		
		case 7:
		month = 8;
		break;
		
		case 8:
		month = 9;
		break;
		
		case 9:
		month = 10;
		break;
		
		case 10:
		month = 11;
		break;
		
		case 11:
		month = 12;
		break;
		
		
	}
	
	document.getElementById("day").innerHTML = day;
	document.getElementById("month").innerHTML = month;
	document.getElementById("year").innerHTML = year;
	
	if(day >= 8){
			document.getElementById("data").innerHTML = "25th Of March Is Special";
	}
}

setInterval(startTime, 1000);

window.onscroll = function() {myjunction()};

function myjunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();

    btn.classList.add("dripicons-media-pause");
	btn.classList.remove("dripicons-media-play");
		
  } else {
    video.pause();
	btn.classList.remove("dripicons-media-pause");
    btn.classList.add("dripicons-media-play");
  }
}
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}