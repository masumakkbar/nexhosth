(function ($) {
    "use strict";
////////////////////////////////////////////////////////////////////////
// 01. Screen Width
var device_width = window.screen.width;

if (jQuery("#h5_nh_headline-ticker").length > 0) {
	$("#h5_nh_headline-ticker").bxSlider({
		minSlides: 1,
		maxSlides: 1,
		slideMargin: 0,
		ticker: true,
		speed: 25000,
	});
}


////////////////////////////////////////////////////////////////////////
// 05. data background
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
});

////////////////////////////////////////////////////////////////////////
// 04. nice select
$('.has-nice-select ,.has-nice-select-2').niceSelect();

// 15. magnificPopup video view
$('.popup-video').magnificPopup({
	type: 'iframe'
});

///////////////////////////////////////////////////////////////////////
// 02. Mobile menu 

$('.cl_menubar').on('click', function () {

	$('.zq_mobile_menu').addClass("open");

	$('.zq_mobile_menu').animate({ left: 0 });

});

$('.zq_mobile_menu .close-menu, .one-scroll .menu-navbar .main-menu > li').on('click', function () {

	$('.zq_mobile_menu').removeClass("open").delay(300).animate({ left: "-100%" });
	$('.zq_mobile_menu .menu-navbar .main-menu .dmenu').removeClass("dopen");
	$('.zq_mobile_menu .menu-navbar .main-menu .sub-menu').slideUp();

});

$('.zq_mobile_menu .menu-navbar .main-menu > li').on('mouseenter', function () {
	$(this).removeClass('hoverd').siblings().addClass('hoverd');
});

$('.zq_mobile_menu .menu-navbar .main-menu > li').on('mouseleave', function () {
	$(this).removeClass('hoverd').siblings().removeClass('hoverd');
});


$('.main-menu > li .dmenu').on('click', function () {
	$(this).parent().parent().find(".sub-menu").toggleClass("sub-open").slideToggle();
	$(this).toggleClass("dopen");
});

////////////////////////////////////////////////////////////////////////
// 03. Search Header
$('.cl_search_popup').on('click', function() {
	$('body').addClass('search-active');
})
$(".ba-search-popup .ba-color-layer").on("click", function () {
	$("body").removeClass("search-active");
});


function sliderActive() {
	/*------------------------------------
	Slider
	--------------------------------------*/
	if (jQuery(".h4_nh_slider_active").length > 0) {
		let sliderActive1 = '.h4_nh_slider_active';
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			rtl: false,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			speed: 1000,
			effect: 'fade',
			autoplay: {
				delay: 5000,
			},

			// Navigation arrows
			navigation: {
				nextEl: '.h4_nh_nav-next',
				prevEl: '.h4_nh_nav-prev',
			},

			a11y: false
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + ' [data-animation]').each(function () {
					let anim = $(this).data('animation');
					let delay = $(this).data('delay');
					let duration = $(this).data('duration');

					$(this).removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration
						})
						.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
				});
			};
			animated();
			// Make animated when slide change
			init.on('slideChange', function () {
				$(sliderActive1 + ' [data-animation]').removeClass('animated');
			});
			init.on('slideChange', animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}
}
sliderActive();

/////////////////////////////////////////////////////
// 03. Cursor Animations
  var client_cursor = document.getElementById("client_cursor");
  function mousemoveHandler(e) {
    try {
      const target = e.target;

      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        }
      })
      let t2 = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        }
      })

      // Main Cursor Moving 
      tl.to(".cursor1", {
        ease: "power2.out"
      })
        .to(".cursor2", {
          ease: "power2.out"
        }, "-=0.4")

    } catch (error) {
      console.log(error)
    }

  }
  document.addEventListener("mousemove", mousemoveHandler);

//////////////////////////////////////////////////////////////////////////////////
// 04. Active GSAP
  if (document.querySelector("#has_smooth").classList.contains("has-smooth")) {
    const smoother = ScrollSmoother.create({
      smooth: 1.35,
      effects: device_width < 1025 ? false : true,
      smoothTouch: 0.1,
      normalizeScroll: false,
      ignoreMobileResize: true,
    });
  }



///////////////////////////////////////////////////////////////////////
// 11. brand active
const brandActiveOne = new Swiper(".nh_brand-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	speed: 2000,
	autoplay: {
		delay: 800,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			},
		481: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 4,
		},
		1200: {
			slidesPerView: 5
		},
		1400: {
			slidesPerView: 5
		}
	}
});

const brandActiveTwo = new Swiper(".h2_nh_brand-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	speed: 2000,
	autoplay: {
		delay: 800,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			},
		481: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 4,
		},
		1200: {
			slidesPerView: 5
		},
		1400: {
			slidesPerView: 5
		}
	}
});

///////////////////////////////////////////////////////////////////////
// 
// domain one
const domainActive = new Swiper(".nh_inner_domain-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	speed: 2000,
	pagination: {
		el: ".nh_pagination_domain",
		clickable: true,
	},
  navigation: {
		nextEl: ".nh_inner_domain-prev",
		prevEl: ".nh_inner_domain-next",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4
		},
		1400: {
			slidesPerView: 4
		}
	}
});

///////////////////////////////////////////////////////////////////////
// 10. reason active
// reason one
const reasonActive = new Swiper(".nh_reason-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	speed: 2000,
	pagination: {
		el: ".nh_pagination_reason",
		clickable: true,
	},
  navigation: {
		nextEl: ".nh_reason-prev",
		prevEl: ".nh_reason-next",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4
		},
		1400: {
			slidesPerView: 4
		}
	}
});
// reason one
const reasonActiveTow = new Swiper(".h2_nh_reason-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	speed: 2000,
	pagination: {
		el: ".nh_pagination_reason_2",
		clickable: true,
	},
  navigation: {
		nextEl: ".h2_nh_reason-prev",
		prevEl: ".h2_nh_reason-next",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4
		},
		1400: {
			slidesPerView: 4
		}
	}
});

// service one
const serviceActiveOne = new Swiper(".h5_nh_service-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	speed: 2000,
	pagination: {
		el: ".nh_pagination_service_5",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4
		},
		1400: {
			slidesPerView: 4
		}
	}
});


// project 

const projectActive = new Swiper(".h5_nh_project-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	speed: 2000,
	pagination: {
		el: ".nh_pagination_project_5",
		clickable: true,
	},
  navigation: {
		nextEl: ".h5_nh_project-prev",
		prevEl: ".h5_nh_project-next",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 1,
		},
		1200: {
			slidesPerView: 1
		},
		1400: {
			slidesPerView: 1
		}
	}
});

// project 

const teamActive = new Swiper(".h5_nh_team-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	speed: 2000,
	pagination: {
		el: ".nh_pagination_team_5",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 3
		},
		1400: {
			slidesPerView: 3
		}
	}
});


///////////////////////////////////////////////////////////////////////
// 10. team active
// testimonial one
const testimonialActive = new Swiper(".nh_testimonial-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	speed: 2000,
	pagination: {
		el: ".nh_pagination_testimonial",
		clickable: true,
	},
  	navigation: {
		nextEl: ".nh_testimonial-prev",
		prevEl: ".nh_testimonial-next",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 1,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 2
		},
		1400: {
			slidesPerView: 2
		}
	}
});
// testimonial one
const testimonialActiveTwo = new Swiper(".h2_nh_testimonial-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	speed: 2000,
	centeredSlides: true,
	pagination: {
		el: ".nh_pagination_testimonial_2",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
			centeredSlides: false,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3
		},
		1400: {
			slidesPerView: 3
		}
	}
});


// testimonial one
var testimonial_thumbs = new Swiper(".h3_nh_testimonial-thumbs", {
	slidesPerView: 5,
    spaceBetween: 8,
    centeredSlides: true,
    loop: true,
    slideToClickedSlide: true,
	breakpoints: {
		0: {
			slidesPerView: 3,
		},
		481: {
			slidesPerView: 3,
		},
		576: {
			slidesPerView: 5,
		},
		768: {
			slidesPerView: 5,
		},
		992: {
			slidesPerView: 5,
		},
		1200: {
			slidesPerView: 5
		},
	},
});


const testimonialActiveThreeTwo = new Swiper(".h3_nh_testimonial-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	speed: 2000,
	centeredSlides: true,
	pagination: {
		el: ".nh_pagination_testimonial_3",
		clickable: true,
	},
	navigation: {
		nextEl: ".h3_nh_testimonial-prev",
		prevEl: ".h3_nh_testimonial-next",
	},
	thumbs: {
		swiper: testimonial_thumbs,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3
		},
		1400: {
			slidesPerView: 3
		}
	}
});



// blog 3
const blogActive = new Swiper(".nh_blog-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	speed: 2000,
	pagination: {
		el: ".nh_pagination_blog",
		clickable: true,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3
		},
		1400: {
			slidesPerView: 3
		}
	}
});
// blog 2
const blogActiveTwo = new Swiper(".h2_nh_blog-active", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	speed: 2000,
	pagination: {
		el: ".nh_pagination_blog_2",
		clickable: true,
	},
	navigation: {
		nextEl: ".h2_nh_blog-prev",
		prevEl: ".h2_nh_blog-next",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			},
		576: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 2,
		},
		1200: {
			slidesPerView: 3
		},
		1400: {
			slidesPerView: 3
		}
	}
});



if (jQuery("#h2_nh_hero-circle").length > 0) {
	$('#h2_nh_hero-circle').circleProgress({
		value: 0.95,
		size: 130,
		thickness: 8,
		emptyFill: "rgba(6, 177, 110, 0.1)",
		fill: {
		color: "#06B16E",
		},
		lineCap: "round",
		
	});
}

if (jQuery("#nh_hosting_details-counter-circle").length > 0) {
	$('#nh_hosting_details-counter-circle').circleProgress({
		value: 0.76,
		size: 130,
		thickness: 15,
		emptyFill: "#fff",
		fill: {
		color: "#06B16E",
		},
		lineCap: "round",
		
	});
}

if (jQuery("#nh_hosting_details-counter-circle-2").length > 0) {
	$('#nh_hosting_details-counter-circle-2').circleProgress({
		value: 0.88,
		size: 130,
		thickness: 15,
		emptyFill: "#fff",
		fill: {
		color: "#06B16E",
		},
		lineCap: "round",
		
	});
}

if (jQuery("#nh_hosting_details-counter-circle-3").length > 0) {
	$('#nh_hosting_details-counter-circle-3').circleProgress({
		value: 0.95,
		size: 130,
		thickness: 15,
		emptyFill: "#fff",
		fill: {
		color: "#06B16E",
		},
		lineCap: "round",
		
	});
}

if (jQuery("#h3_nh_headline-ticker").length > 0) {
	$("#h3_nh_headline-ticker").bxSlider({
		minSlides: 1,
		maxSlides: 1,
		slideMargin: 0,
		ticker: true,
		speed: 25000,
	});
}

})(jQuery);