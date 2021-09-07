/*
 Third party
 */

//= ../vendor/jquery/dist/jquery.min.js
//= ../vendor/owl.carousel/dist/owl.carousel.min.js

$(function(){

	 $('.owl-carousel').owlCarousel({
	 	nav : true,
	 	navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		loop: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	})
});