
function makeNewPosition(){
    

    var h = $(window).height() ;
    var w = $(window).width() ;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
};

function animateDiv(myid){
    var newq = makeNewPosition();
    $(myid).animate({ top: newq[0], left: newq[1] }, 10000,   function(){
      animateDiv(myid);        
    });
    
};

$(document).ready(function(){

	animateDiv('#a');
    animateDiv('#b');
    animateDiv('#c');
    animateDiv('#d');


      //Tabgroup, learned from WNM617 with Hamilton
    $(".tabgroup .tab").on("click",function(e){

    var id = $(this).index();

    $(this).addClass("active")
      .siblings().removeClass("active")

    $(this).closest(".tabgroup")
        .find(".content").eq(id)
        .addClass("active")
        .siblings().removeClass("active")
  });


	$( "#section4 a" ).hover(	
		  function() {
		    $( this ).css("color", "#C8483E");
		    $( this ).parents("li").siblings().children("a").css("color", "#a1a1a1");
		  });

	$( ".no1" ).hover(	
		  function() {
		    $( ".img-class" ).attr("src","imgs/b-menu.jpg");
		    $( ".para h4" ).text( "UX Design" );
		    $( ".para p" ).text( "This application helps people to block message or social media information in order to make the user focus on working or study." );

		    // $( ".img-class"  ).fadeOut( 500 );
			$( ".img-class"  ).fadeIn( 500 );
		  });
	$( ".no2" ).hover(	
		  function() {
		    $( ".img-class" ).attr("src","imgs/d-menu.jpg");
		    $( ".para h4" ).text( "Responsive E-Commerce" );
		    $( ".para p" ).text( "This is coded by HTML, CSS, Javascript, JSON, PHP." );
		    // $( ".img-class"  ).fadeOut( 500 );
			$( ".img-class"  ).fadeIn( 500 );
		  });
	$( ".no3" ).hover(	
		  function() {
		    $( ".img-class" ).attr("src","imgs/o-landing.jpg");
		    $( ".para h4" ).text( "UX Design" );
		    $( ".para p" ).text( "Oikos is an application which helps people improve the interior design of their house." );
		 //    $( ".img-class"  ).fadeOut( 0 );
			// $( ".img-class"  ).fadeIn( 500 );
		  });
	$( ".no4" ).hover(	
		  function() {
		    $( ".img-class" ).attr("src","imgs/f-menu.jpg");
		    $( ".para h4" ).text( "UX Design" );
		    $( ".para p" ).text( "This is an app which helps foodie record the locations of food trucks and take pictures." );
		 //    $( ".img-class"  ).fadeOut( 0 );
			// $( ".img-class"  ).fadeIn( 500 );
		  });
	$( ".no5" ).hover(	
		  function() {
		    $( ".img-class" ).attr("src","imgs/p-menu.jpg");
		    $( ".para h4" ).text( "New Feature Development." );
		    $( ".para p" ).text( "A smart recommendation feature that delivers fresh music for you based on your daily activities, with just the push of one button." );
		 //    $( ".img-class"  ).fadeOut( 0 );
			// $( ".img-class"  ).fadeIn( 500 );
		  });
	$( ".no6" ).hover(	
		  function() {
		    $( ".img-class" ).attr("src","imgs/f-menu.jpg");
		    $( ".para h4" ).text( "Motion." );
		    $( ".para p" ).text( "My goal is to create a promo for this app that helps the user understand how it works." );
		 //    $( ".img-class"  ).fadeOut( 0 );
			// $( ".img-class"  ).fadeIn( 500 );
		  });


	

	$(".scrollTop").click(function() {
	    $('html, body').animate({
	      scrollTop: 0
	    }, 800);
	    return false;

  }); 



		 	
});

function openNav() {

	  document.getElementById("myNav").style.height = "100%";
	};

function closeNav() {
  document.getElementById("myNav").style.height = "0";
}


var iScrollPos = 0;

$(window).scroll(function () {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos ) {
        $( "#header" ).addClass( "active" );
    } else {
       $( "#header" ).removeClass( "active" );
    }
    iScrollPos = iCurScrollPos;






});