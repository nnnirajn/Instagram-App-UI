 jQuery(document).ready(function(){
     
    "use strict";
  
     
// owl slider - logo slider     
    $("#slider1").owlCarousel({      // main slider
      loop: true,
      margin: 10,
      nav: false,
      center: true,  
      autoplay:false,
      dots:false,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 4
        }
      }
    });
   
     
     // owl slider - middle slider     
    $("#slider2").owlCarousel({      // main slider
      loop: true,
      margin: 10,
      nav: false,
      center: true,  
      autoplay:false,
      dots:true,
      margin:2,
      smartSpeed: 1000,
      responsive: {
        0: {
          items: 1
        }
      }
    });
	
     
     
 });

	
	


