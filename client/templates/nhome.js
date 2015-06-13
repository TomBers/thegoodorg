Template.nhome.rendered = function(){
  // alert('here');

  // JavaScript Document

$('document').ready(function(){




/*  -------------------------------------------------------------------- PROJECT NAVIGATION IMAGES */
$(".project-nav-one-img-one").on("click",function(){

 $(this).css("background-image", "url(images/project-nav-one-img-one.png)");
});
$(".project-nav-one-img-two").on("click",function(){

 $(this).css("background-image", "url(images/project-nav-one-img-two.png)");
});
$(".project-nav-one-img-three").on("click",function(){

 $(this).css("background-image", "url(images/project-nav-one-img-three.png)");
});
$(".project-nav-one-img-four").on("click",function(){

 $(this).css("background-image", "url(images/project-nav-one-img-four.png)");
});
$(".project-nav-one-img-five").on("click",function(){

 $(this).css("background-image", "url(images/project-nav-one-img-five.png)");
});
$(".project-nav-one-img-six").on("click",function(){

 $(this).css("background-image", "url(images/project-nav-one-img-six.png)");
});
$(".project-nav-one-img-seven").on("click",function(){

 $(this).css("background-image", "url(images/project-nav-one-img-seven.png)");
});
/* PROJECT NAVIGATION IMAGES END */



/*  -------------------------------------------------------------------- PROJECT ONE IMAGES */

$(".projectOne-img-one").on("click",function(){
	 res();
	 $('.project-nav-one').css("display", "block");
	 $('.project-one-msg').css("display", "block");
	 $('.project-one-msg-triangle').css("top", "160px");
	 $(".projectOne-img-one").css("background-image", "url(images/projectOne-img-one.png)");
	 $('.project-nav-msg-triangle').css("display", "block");
	 $('#ProjectOneLabel').html("Wildlife & Habitat");

	 $("#close-button").on("click",function(){
		 $('.project-one-msg').css("display", "none");
	 });

});


$(".projectOne-img-two").on("click",function(){
	 res();
	 $('.project-nav-one').css("display", "block");
	 $('.project-one-msg').css("display", "block");
	 $('.project-one-msg-triangle').css("top", "160px")
	 $(".projectOne-img-two").css("background-image", "url(images/projectOne-img-two.png)");
	  $('.project-nav-msg-triangle').css("display", "block");


	 $("#close-button").on("click",function(){
		 $('.project-one-msg').css("display", "none");
	 });
});


$(".projectOne-img-three").on("click",function(){
	 res();
	 $('.project-nav-one').css("display", "block");
	 $('.project-one-msg').css("display", "block");
	 $('.project-one-msg-triangle').css("top", "160px");
	 $(".projectOne-img-three").css("background-image", "url(images/projectOne-img-three.png)");
	  $('.project-nav-msg-triangle').css("display", "block");
	     $('#ProjectOneLabel').html("Sustainable Products");

	 $("#close-button").on("click",function(){
		 $('.project-one-msg').css("display", "none");
	 });
});


$(".projectOne-img-four").on("click",function(){
	 res();
	 $('.project-nav-one').css("display", "block");
	 $('.project-one-msg').css("display", "block");
	 $('.project-one-msg-triangle').css("top", "160px");
	 $(".projectOne-img-four").css("background-image", "url(images/projectOne-img-four.png)");
	  $('.project-nav-msg-triangle').css("display", "block");
	     $('#ProjectOneLabel').html("Green Technology");

	 $("#close-button").on("click",function(){
		 $('.project-one-msg').css("display", "none");
	 });
});


$(".projectOne-img-five").on("click",function(){
	 res();
	 $('.project-nav-one').css("display", "block");
	 $('.project-one-msg').css("display", "block");
	 $('.project-one-msg-triangle').css("top", "160px");
	 $(".projectOne-img-five").css("background-image", "url(images/projectOne-img-five.png)");
	  $('.project-nav-msg-triangle').css("display", "block");
	       $('#ProjectOneLabel').html("Energy Management");

	 $("#close-button").on("click",function(){
		 $('.project-one-msg').css("display", "none");
	 });
});



$(".projectOne-img-one").on("mouseover",function(){
	 $('#ProjectOneLabel').html("Wildlife & Habitat");
});
$(".projectOne-img-one").on("mouseout",function(){
 resLabel();
});

$(".projectOne-img-two").on("mouseover",function(){
	 $('#ProjectOneLabel').html("Sustainable Transport");
});
$(".projectOne-img-two").on("mouseout",function(){
	 resLabel();
});
$(".projectOne-img-three").on("mouseover",function(){
	 $('#ProjectOneLabel').html("Sustainable Transport");
});
$(".projectOne-img-three").on("mouseout",function(){
  resLabel();
});

$(".projectOne-img-four").on("mouseover",function(){
	     $('#ProjectOneLabel').html("Green Technology");
});
$(".projectOne-img-four").on("mouseout",function(){
  resLabel();
});
$(".projectOne-img-five").on("mouseover",function(){
	    $('#ProjectOneLabel').html("Energy Management");
});
$(".projectOne-img-five").on("mouseout",function(){
  resLabel();
});



/*  --------------------------------------------------------------------PROJECT Three IMAGES */

$(".projectThree-img-one").on("click",function(){
	 res();
	 $('.project-nav-one').css("display", "block");
	 $('.project-three-msg-triangle').css("display", "block");
	 $(".projectThree-img-one").css("background-image", "url(images/project-three-one.png)");
	 $('.project-nav-msg-triangle').css("display", "block");
});

$(".projectThree-img-two").on("click",function(){
	 res();
	 $('.project-nav-one').css("display", "block");
	 $('.project-three-msg-triangle').css("display", "block");
	 $(".projectThree-img-two").css("background-image", "url(images/project-three-two.png)");
	 $('.project-nav-msg-triangle').css("display", "block");
});

$(".projectThree-img-three").on("click",function(){
	 res();
	 $('.project-nav-one').css("display", "block");
	 $('.project-three-msg-triangle').css("display", "block");
	 $(".projectThree-img-three").css("background-image", "url(images/project-three-three.png)");
	 $('.project-nav-msg-triangle').css("display", "block");
});

$(".projectThree-img-four").on("click",function(){
	 res();
	 $('.project-nav-one').css("display", "block");
	  $('.project-three-msg-triangle').css("display", "block");
	 $(".projectThree-img-four").css("background-image", "url(images/project-three-four.png)");
	 $('.project-nav-msg-triangle').css("display", "block");
});

$(".projectThree-img-five").on("click",function(){
	 res();
	 $('.project-nav-one').css("display", "block");
	  $('.project-three-msg-triangle').css("display", "block");
	 $(".projectThree-img-five").css("background-image", "url(images/project-three-five.png)");
	 $('.project-nav-msg-triangle').css("display", "block");
});


$(".projectThree-img-one").on("mouseover",function(){
	 $('#ProjectThreeLabel').html("Food & Shelter");
});
$(".projectThree-img-one").on("mouseout",function(){
 resLabel();
});
$(".projectThree-img-two").on("mouseover",function(){
	 $('#ProjectThreeLabel').html("Accessibility");
});
$(".projectThree-img-two").on("mouseout",function(){
 resLabel();
});
$(".projectThree-img-three").on("mouseover",function(){
	 $('#ProjectThreeLabel').html("Community");
});
$(".projectThree-img-tree").on("mouseout",function(){
 resLabel();
});

$(".projectThree-img-four").on("mouseover",function(){
	 $('#ProjectThreeLabel').html("Skills & Employment");
});
$(".projectThree-img-four").on("mouseout",function(){
 resLabel();
});

$(".projectThree-img-five").on("mouseover",function(){
	 $('#ProjectThreeLabel').html("Education");
});
$(".projectThree-img-five").on("mouseout",function(){
 resLabel();
});


/*  --------------------------------------------------------------------PROJECT Three IMAGES END  */


$("#close-button-nav").one('click',function(e){
$(this).on("click",function(ev){
	 ev.preventDefault();
	$('.project-nav-msg-triangle').attr("style", "display: none !important");
});
});



function res(){

$('.project-nav-one').css("display", "none");
$('.project-one-msg').css("display", "none");
$('.project-three-msg-triangle').css("display", "none");

$('.search').css("display", "none");
$('.project-nav-msg-triangle').css("display", "none");


$(".projectOne-img-one").css("background-image", "none");
$(".projectOne-img-two").css("background-image", "none");
$(".projectOne-img-three").css("background-image", "none");
$(".projectOne-img-four").css("background-image", "none");
$(".projectOne-img-five").css("background-image", "none");

$(".projectThree-img-one").css("background-image", "none");
$(".projectThree-img-two").css("background-image", "none");
$(".projectThree-img-three").css("background-image", "none");
$(".projectThree-img-four").css("background-image", "none");
$(".projectThree-img-five").css("background-image", "none");
}

function resLabel() {
$('#ProjectOneLabel').html("PLANET");
$('#ProjectTwoLabel').html("HEALTH");
$('#ProjectThreeLabel').html("RIGHTS");
 }

/*  --------------------------------------------------------------------PROJECT TWO IMAGES */



$( "map#projectTwo" ).on({
mouseenter: function(ev) {

 var target = $(ev.target);
    var targetId = target.attr('id');
    if(targetId == 'two-optionOne') {
     $('img#projectTwo').attr('src','images/project-two-optionOne.png');
    }
	    if(targetId == 'two-optionTwo') {
     $('img#projectTwo').attr('src','images/project-two-optionTwo.png');
    }
	    if(targetId == 'two-optionThree') {
     $('img#projectTwo').attr('src','images/project-two-optionThree.png');
    }
	    if(targetId == 'two-optionFour') {
     $('img#projectTwo').attr('src','images/project-two-optionFour.png');
    }
	    if(targetId == 'two-optionFive') {
     $('img#projectTwo').attr('src','images/project-two-optionFive.png');
    }

}, mouseleave: function(ev) {

  $('img#projectTwo').attr('src','images/project-two.png');

}, click: function(ev) {


alert('Click worked');


}
});



/*  --------------------------------------------------------------------PROJECT TWO IMAGES END */


/*  --------------------------------------------------------------------PROJECT THREE IMAGES END */



$("map#projectThree").mouseover(function(ev){
    var target = $(ev.target);
    var targetId = target.attr('id');
    if(targetId == 'optionOne') {
     $('img#projectThree').attr('src','images/project-three-optionOne.png');
    }
	    if(targetId == 'optionTwo') {
     $('img#projectThree').attr('src','images/project-three-optionTwo.png');
    }
	    if(targetId == 'optionThree') {
     $('img#projectThree').attr('src','images/project-three-optionThree.png');
    }
	    if(targetId == 'optionFour') {
     $('img#projectThree').attr('src','images/project-three-optionFour.png');
    }
	    if(targetId == 'optionFive') {
     $('img#projectThree').attr('src','images/project-three-optionFive.png');
    }
});

$("map#projectThree").mouseout(function(){
     $('img#projectThree').attr('src','images/project-three.png');
});


/*  --------------------------------------------------------------------PROJECT THREE IMAGES END */




});





}
