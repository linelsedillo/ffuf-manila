
$( ".up" ).click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
});

// Making the Nav white background when scroll down
$(window).scroll(function() {
    if ($(document).scrollTop() > 80) {
      $(".logoNnav").addClass("scroll-d-c-event");
      $(".mobi-btn").css("color","red");
    } else {
      $(".logoNnav").removeClass("scroll-d-c-event");
      $(".mobi-btn").css("color","white");
    }
});
 
$( ".p" ).click(function() {
    event.preventDefault();    
    let next = $(this).next(".colapsable-nv"),
        notNext = $(".colapsable-nv").not(next);

    next.slideToggle("fast");
    notNext.slideUp();
    
});

  
  var fadeIntoRight = 'fade-in-r';
	
  (function($, win) {
      $.fn.inViewport = function(cb) {
          return this.each(function(i,el) {
              function visPx() {
                  var H = $(this).height(),
                  r = el.getBoundingClientRect(), 
                  t = r.top, 
                  b = r.bottom;
                  return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
              } 
              visPx();
          $(win).on("resize scroll", visPx);
          });
      };
  }(jQuery, window));

  $(".fadeIn-to-right").inViewport(function(px) {
      if(px) $(this).addClass(fadeIntoRight);
  });

  var fadeIntoLeft = 'fade-in-l';
	
	(function($, win) {
		$.fn.inViewport = function(cb) {
			return this.each(function(i,el) {
				function visPx() {
					var H = $(this).height(),
					r = el.getBoundingClientRect(), 
					t = r.top, 
					b = r.bottom;
					return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
				} 
				visPx();
			$(win).on("resize scroll", visPx);
			});
		};
	}(jQuery, window));

	$(".fadeIn-to-left").inViewport(function(px) {
		if(px) $(this).addClass(fadeIntoLeft);
    });
    

    /////// script for milestones 

        var animate_els = $('.animation-element');
        var mywindow = $(window);

        function check_if_in_view() {
        var window_height = mywindow.height();
        var window_top_position = mywindow.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        
        $.each(animate_els, function() {
            var elm = $(this);
            var element_height = elm.outerHeight();
            var element_top_position = elm.offset().top;
            var element_bottom_position = (element_top_position + element_height);
        
            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
            
                elm.addClass('in-view');
                 
            } else {
                elm.removeClass('in-view');
                
            }
        });
        }

        mywindow.on('scroll resize', check_if_in_view);
        mywindow.trigger('scroll');
    