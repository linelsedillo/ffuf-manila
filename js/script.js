
//setup function to hide element/s
function hideItem(el, index, all = true)  {

    if(all == false) { // check if the ALL parameter is false

        if(typeof index !== "number" || index == undefined ) { // check the param INDEX is number or undefined
            index = 0; // then set to 0 as default

            el[index].style.display = "none";

        } else {
            el[index].style.display = "none";
        }

    } else { //if ALL param is true. display none all the elements
        for(i=0; i < el.length; i++) {
            el[i].style.display = "none";
        }
    }

}

//setup function to display element/s
function displayItem(el, index, all = false)  { 

    if(all == false) {  // check if the ALL parameter is false
        if(typeof index !== "number" || index == undefined ) { // check the param INDEX is number or undefined
            index = 0; //then set to 0 and display the element
            el[index].style.display = "block";

        } else {
            el[index].style.display = "block";
        }

    } else { //if ALL param is true. display all the elements
        for(i=0; i < el.length; i++) {
            el[i].style.display = "block";
        }
    }

}


function wideSlider() {

    let slideItems = document.getElementsByClassName("sliderItems"), //get the all the slider items
         slidewrap = document.getElementById("img-slider"); //get the parent of slider items
         
         for(i=0; i < slideItems.length; i ++) {
            slideItems[i].style.height = "840px";
         }

    hideItem(slideItems); //hide all slider
    displayItem(slideItems); //display the 1st slider

    setInterval(function(){
        slidewrap.appendChild(slideItems[0]); //put the 1st slider to the last after the interval

        hideItem(slideItems,0,false);

        setTimeout(function(){
            hideItem(slideItems);
            displayItem(slideItems);
        }, 1)

    }, 6000);

};

wideSlider();

function miniSlider() {

    let slideItems = document.getElementsByClassName("m-sliderItems"), //get the all the slider items
         slidewrap = document.getElementById("m-img-slider"); //get the parent of slider items


        //  for(i=0; i < slideItems.length; i ++) {
        //     slideItems[i].style.height = "480px";
        //  }

    hideItem(slideItems); //hide all slider
    displayItem(slideItems); //display the 1st slider

    setInterval(function(){
        slidewrap.appendChild(slideItems[0]); //put the 1st slider to the last after the interval

        hideItem(slideItems,0,false);

        setTimeout(function(){
            hideItem(slideItems);
            displayItem(slideItems);
        }, 1)

    }, 26000);

};

miniSlider();


/*Slider for Headlines*/ 
let hItems = document.getElementsByClassName("h-items"),
      wrap = document.getElementById("moveTop"),
       end = document.getElementById("headlines").offsetHeight,
         a = hItems.length-1,
         b = end*a;

function slideUp(){

    $("#moveTop").animate({bottom: "+="+end+"px"},1000 ,function(){

        if(wrap.style.bottom >= b+"px") {
            wrap.style.bottom = "0px"
        }
    });

}

function slideDown(){

    if(wrap.style.bottom <= "0px") {
        wrap.style.bottom = "0px"
    } else {

        $("#moveTop").animate({bottom: "+="+"-"+end+"px"},1000);

    }

} 


function contentSlider () {
   
    let animate = setInterval(slideUp, 6000),
       lastItem = hItems[hItems.length-1];
    
   $('#prev').click(function(){
        //wrap.insertBefore(lastItem, hItems[0]);
        slideDown()
   })

   $("#next").click(function(){
        slideUp()
    });


}

contentSlider();


// Making the Nav white background when scroll down
$(window).scroll(function() {
    if ($(document).scrollTop() > 80) {
      $(".logoNnav").addClass("scroll-d-c-event");
      $(".mobi-btn").css("color","red");

      $(".mobi-btn").css("color","red");
    } else {
      $(".logoNnav").removeClass("scroll-d-c-event");
      $(".mobi-btn").css("color","white");
    }
});

//sliding dropdown of nav menu for mobile view

     
$( ".p" ).click(function() {
    event.preventDefault();    
    let next = $(this).next(".colapsable-nv"),
        notNext = $(".colapsable-nv").not(next);

    next.slideToggle("fast");
    notNext.slideUp();
    
});


  $( ".up" ).click(function() {
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
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


        
  