// Session.set('cause', '');
Session.set('arrCause', []);
Session.set('interest', []);

function addInterest(interest){
  var tmp = Session.get('interest');
  if ($.inArray(interest, tmp) != -1) {
    Session.set('interest', _.without(tmp, interest) )
	return false;
  }else{
    tmp.push(interest);
    Session.set('interest',tmp);
	return true;
  }

}


function addCause(causeIn){
  var tmp = Session.get('arrCause');
  if ($.inArray(causeIn, tmp) != -1) {
    Session.set('arrCause', _.without(tmp, causeIn) )
  }else{
    tmp.push(causeIn);
    Session.set('arrCause',tmp);
  }

}



Template.home.helpers({
  cause: function(){
      return Session.get('arrCause');
  },
  interest: function(){
      return Session.get('interest');
  },
  // visibleProjects: function(){
  //   console.log(Session.get('cause'));
  //   var cause = [''+Session.get('cause')];
  //   try{
  //   if(Session.get('cause') != '' && Session.get('interest').length > 0){
  //     return Projects.find({categories:{$in:cause},interactions:{$in:Session.get('interest')}});
  //   }
  //     else if(Session.get('cause') != '' && Session.get('interest').length == 0){
  //       return Projects.find({categories:{$in:cause}});
  //   }else{
  //     return Projects.find({}, {limit: 20});
  //   }
  // }catch(e){
  //
  // }
  // }
  visibleProjects: function(){
     console.log(Session.get('arrCause'));
	 console.log(Session.get('interest'));
    var causeList = Session.get('arrCause');
    try{
    if(Session.get('arrCause') != '' && Session.get('interest').length > 0){
      return Projects.find({categories:{$in:causeList},interactions:{$in:Session.get('interest')}});
    }
      else if(Session.get('arrCause') != '' && Session.get('interest').length == 0){
        return Projects.find({categories:{$in:causeList}});
    }else{
      return Projects.find({}, {limit: 20});
    }
  }catch(e){

  }
  }

});

Template.projectCard.helpers({

  linkCompany: function() {
		var user = Meteor.user();
    return Companies.findOne({"_id":this.company_id});
	}

  ,  linkCompanyOwner: function() {
    var cmpy = Companies.findOne({"_id":this.company_id});
//	console.log(cmpy);
    return UserProfiles.findOne({"loginEmail":cmpy.employees[0]});
  	}

    ,  getInterestPic: function() {

      var projIcons = [];
      var tmp = this.interactions;

      if($.inArray("Donate Materials", tmp) != -1){ projIcons.push('/images/project-nav-one-img-one.png'); }
      if($.inArray("Monetary Donations", tmp) != -1){ projIcons.push('/images/project-nav-one-img-two.png'); }
      if($.inArray("Volunteering", tmp) != -1){ projIcons.push('/images/project-nav-one-img-three.png'); }
      if($.inArray("Research Agreements", tmp) != -1){ projIcons.push('/images/project-nav-one-img-four.png'); }
      if($.inArray("Product Collaboration", tmp) != -1){ projIcons.push('/images/project-nav-one-img-five.png'); }
      if($.inArray("Product collaboration", tmp) != -1){ projIcons.push('/images/project-nav-one-img-five.png'); }
      if($.inArray("Brand Collaboration", tmp) != -1){ projIcons.push('/images/project-nav-one-img-six.png'); }
      if($.inArray("Lecturing Opportunites", tmp) != -1){ projIcons.push('/images/project-nav-one-img-seven.png'); }
      // images/project-nav-one-img-five.png

      return projIcons;
}

});




Template.home.rendered = function(){
  Meteor.subscribe('Projects');
  Meteor.subscribe('UserProfiles');
  Meteor.subscribe("Companies");
  Session.set('company_id', this.data.company_id);
  Session.set('projectId', this.data._id);

$('document').ready(function(){


  /*  -------------------------------------------------------------------- PROJECT NAVIGATION IMAGES */
var interest_map = {};
interest_map["Donate Materials"] = {img_class:".project-nav-one-img-one", background_image:"url(images/project-nav-one-img-one.png)"};
interest_map["Monetary Donations"] = {img_class:".project-nav-one-img-two", background_image:"url(images/project-nav-one-img-two.png)"};
interest_map["Volunteering"] = {img_class:".project-nav-one-img-three", background_image:"url(images/project-nav-one-img-three.png)"};
interest_map["Research Agreements"] = {img_class:".project-nav-one-img-four", background_image:"url(images/project-nav-one-img-four.png)"};
interest_map["Product collaboration"] = {img_class:".project-nav-one-img-five", background_image:"url(images/project-nav-one-img-five.png)"};
interest_map["Brand Collaboration"] = {img_class:".project-nav-one-img-six", background_image:"url(images/project-nav-one-img-six.png)"};
interest_map["Lecturing Opportunities"] = {img_class:".project-nav-one-img-seven", background_image:"url(images/project-nav-one-img-seven.png)"};

  $(".project-nav-project").on("click",function(){
  console.log("nav...");
	var interest = $(this).attr('interest');
	var obj = interest_map[interest];
	if(obj){
    if(addInterest(interest)){
			$(obj.img_class).css("background-image", obj.background_image);
	   }else{
			$(obj.img_class).css("background-image", "");
	   }
   }
  });
  /* PROJECT NAVIGATION IMAGES END */



  /*  -------------------------------------------------------------------- PROJECT ONE IMAGES */

  $(".projectOne-img-one").on("click",function(){
  	 res();
     addCause('Wildlife & Habitat');
  	 $('.project-nav-one').css("display", "block"); fadeElements();
  	 $('.project-one-msg-triangle').css("display", "block");
  	 $(".projectOne-img-one").css("background-image", "url(images/projectOne-img-one.png)");
  	 $('.project-nav-msg-triangle').css("display", "block");
  	 $('#ProjectOneLabel').html("Wildlife & Habitat");
  	 $("#close-button-one").on("click",function(){
  		 $('.project-one-msg-triangle').css("display", "none");
  	 });
  });
  $(".projectOne-img-two").on("click",function(){
  	 res();
     addCause('Sustainable Transport');
  	 $('.project-nav-one').css("display", "block"); fadeElements();
  	 $('.project-one-msg-triangle').css("display", "block");
  	 $(".projectOne-img-two").css("background-image", "url(images/projectOne-img-two.png)");
  	 $('.project-nav-msg-triangle').css("display", "block");
  	 $("#close-button-one").on("click",function(){
  		 $('.project-one-msg-triangle').css("display", "none");
  	 });
  });
  $(".projectOne-img-three").on("click",function(){
  	 res();
     addCause('Sustainable Products');
  	 $('.project-nav-one').css("display", "block"); fadeElements();
  	 $('.project-one-msg-triangle').css("display", "block");
  	 $(".projectOne-img-three").css("background-image", "url(images/projectOne-img-three.png)");
  	 $('.project-nav-msg-triangle').css("display", "block");
  	 $('#ProjectOneLabel').html("Sustainable Products");
  	 $("#close-button-one").on("click",function(){
  		 $('.project-one-msg-triangle').css("display", "none");
  	 });
  });
  $(".projectOne-img-four").on("click",function(){
  	 res();
     addCause('Green Technology');
  	 $('.project-nav-one').css("display", "block"); fadeElements();
  	 $('.project-one-msg-triangle').css("display", "block");
  	 $(".projectOne-img-four").css("background-image", "url(images/projectOne-img-four.png)");
  	 $('.project-nav-msg-triangle').css("display", "block");
  	 $('#ProjectOneLabel').html("Green Technology");
  	 $("#close-button-one").on("click",function(){
  		 $('.project-one-msg-triangle').css("display", "none");
  	 });
  });
  $(".projectOne-img-five").on("click",function(){
  	 res();
     addCause('Energy Management');
  	 $('.project-nav-one').css("display", "block"); fadeElements();
  	 $('.project-one-msg-triangle').css("display", "block");
  	 $(".projectOne-img-five").css("background-image", "url(images/projectOne-img-five.png)");
  	 $('.project-nav-msg-triangle').css("display", "block");
  	 $('#ProjectOneLabel').html("Energy Management");
  	 $("#close-button-one").on("click",function(){
  		 $('.project-one-msg-triangle').css("display", "none");
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


  /*  --------------------------------------------------------------------PROJECT TWO IMAGES */


  $(".projectTwo-img-one").on("click",function(){
  	 res();
  	 $('.project-nav-one').css("display", "block"); fadeElements();
  	 $('.project-two-msg-triangle').css("display", "block");
  	 $(".projectTwo-img-one").css("background-image", "url(images/project-two-optionOne.png)");
  	 $('.project-nav-msg-triangle').css("display", "block");
  	 $('#ProjectTwoLabel').html("Senior Health");
  	 $("#close-button-two").on("click",function(){
  	 $('.project-two-msg-triangle').css("display", "none");
  	 });
  });

  $(".projectTwo-img-two").on("click",function(){
  	 res();
  	 $('.project-nav-one').css("display", "block"); fadeElements();
  	 $('.project-two-msg-triangle').css("display", "block");
  	 $(".projectTwo-img-two").css("background-image", "url(images/project-two-optionTwo.png)");
  	 $('.project-nav-msg-triangle').css("display", "block");
  	 $('#ProjectTwoLabel').html("Rehabilitation");
  	 $("#close-button-two").on("click",function(){
  		 $('.project-two-msg-triangle').css("display", "none");
  	  });
  });

  $(".projectTwo-img-three").on("click",function(){
  	 res();
  	 $('.project-nav-one').css("display", "block"); fadeElements();
  	 $('.project-two-msg-triangle').css("display", "block");
  	 $(".projectTwo-img-three").css("background-image", "url(images/project-two-optionThree.png)");
  	 $('.project-nav-msg-triangle').css("display", "block");
  	 $('#ProjectTwoLabel').html("Fitness & Excercise");
  	 $("#close-button-two").on("click",function(){
  		 $('.project-two-msg-triangle').css("display", "none");
  	 });
  });

  $(".projectTwo-img-four").on("click",function(){
  	 res();
  	 $('.project-nav-one').css("display", "block"); fadeElements();
  	  $('.project-two-msg-triangle').css("display", "block");
  	 $(".projectTwo-img-four").css("background-image", "url(images/project-two-optionFour.png)");
  	 $('.project-nav-msg-triangle').css("display", "block");
  	 $('#ProjectTwoLabel').html("Special Needs");
  	 $("#close-button").on("click",function(){
  		 $('.project-one-msg').css("display", "none");
  	 });

  	  $("#close-button-two").on("click",function(){
  		 $('.project-two-msg-triangle').css("display", "none");
  	 });
  });

  $(".projectTwo-img-five").on("click",function(){
  	 res();
  	 $('.project-nav-one').css("display", "block"); fadeElements();
  	  $('.project-two-msg-triangle').css("display", "block");
  	 $(".projectTwo-img-five").css("background-image", "url(images/project-two-optionFive.png)");
  	 $('.project-nav-msg-triangle').css("display", "block");
  	 $('#ProjectTwoLabel').html("Mental Health");
  	 $("#close-button").on("click",function(){
  		 $('.project-one-msg').css("display", "none");
  	 });
  	 $("#close-button-two").on("click",function(){
  		 $('.project-two-msg-triangle').css("display", "none");
  	 });
  });


  $(".projectTwo-img-one").on("mouseover",function(){
  	 $('#ProjectTwoLabel').html("Senior Health");
  });
  $(".projectTwo-img-one").on("mouseout",function(){
   resLabel();
  });
  $(".projectTwo-img-two").on("mouseover",function(){
  	 $('#ProjectTwoLabel').html("Rehabilitation");
  });
  $(".projectTwo-img-two").on("mouseout",function(){
   resLabel();
  });
  $(".projectTwo-img-three").on("mouseover",function(){
  	 $('#ProjectTwoLabel').html("Fitness & Exercise");
  });
  $(".projectTwo-img-three").on("mouseout",function(){
   resLabel();
  });
  $(".projectTwo-img-four").on("mouseover",function(){
  	 $('#ProjectTwoLabel').html("Special Needs");
  });
  $(".projectTwo-img-four").on("mouseout",function(){
   resLabel();
  });
  $(".projectTwo-img-five").on("mouseover",function(){
  	 $('#ProjectTwoLabel').html("Mental Health");
  });
  $(".projectTwo-img-five").on("mouseout",function(){
   resLabel();
  });

  /*  --------------------------------------------------------------------PROJECT TWO IMAGES END */



  /*  --------------------------------------------------------------------PROJECT Three IMAGES */

  $(".projectThree-img-one").on("click",function(){
  	 res();
  	 $('.project-nav-one').css("display", "block"); fadeElements();
  	 $('.project-three-msg-triangle').css("display", "block");
  	 $(".projectThree-img-one").css("background-image", "url(images/project-three-one.png)");
  	 $('.project-nav-msg-triangle').css("display", "block");
  	 $("#close-button-three").on("click",function(){
  		 $('.project-three-msg-triangle').css("display", "none");
  	 });
  });

  $(".projectThree-img-two").on("click",function(){
  	 res();
  	 $('.project-nav-one').css("display", "block"); fadeElements();
  	 $('.project-three-msg-triangle').css("display", "block");
  	 $(".projectThree-img-two").css("background-image", "url(images/project-three-two.png)");
  	 $('.project-nav-msg-triangle').css("display", "block");
  	 $("#close-button-three").on("click",function(){
  		 $('.project-three-msg-triangle').css("display", "none");
  	 });
  });

  $(".projectThree-img-three").on("click",function(){
  	 res();
  	 $('.project-nav-one').css("display", "block"); fadeElements();
  	 $('.project-three-msg-triangle').css("display", "block");
  	 $(".projectThree-img-three").css("background-image", "url(images/project-three-three.png)");
  	 $('.project-nav-msg-triangle').css("display", "block");
  	 $("#close-button-three").on("click",function(){
  		 $('.project-three-msg-triangle').css("display", "none");
  	 });
  });

  $(".projectThree-img-four").on("click",function(){
  	 res();
  	 $('.project-nav-one').css("display", "block"); fadeElements();
  	  $('.project-three-msg-triangle').css("display", "block");
  	 $(".projectThree-img-four").css("background-image", "url(images/project-three-four.png)");
  	 $('.project-nav-msg-triangle').css("display", "block");
  	 $("#close-button-three").on("click",function(){
  		 $('.project-three-msg-triangle').css("display", "none");
  	 });
  });

  $(".projectThree-img-five").on("click",function(){
  	 res();
  	 $('.project-nav-one').css("display", "block"); fadeElements();
  	  $('.project-three-msg-triangle').css("display", "block");
  	 $(".projectThree-img-five").css("background-image", "url(images/project-three-five.png)");
  	 $('.project-nav-msg-triangle').css("display", "block");
  	 $("#close-button-three").on("click",function(){
  		 $('.project-three-msg-triangle').css("display", "none");
  	 });
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

  function fadeElements(){
  $('.project-nav-project:first-of-type').fadeIn(700);
  $('.project-nav-project:nth-child(2)').fadeIn(1400);
  $('.project-nav-project:nth-child(3)').fadeIn(2100);
  $('.project-nav-project:nth-child(4)').fadeIn(2800);
  $('.project-nav-project:nth-child(5)').fadeIn(3500);
  $('.project-nav-project:nth-child(6)').fadeIn(4200);
  $('.project-nav-project:nth-child(7)').fadeIn(4900);

  }

  function res(){

  $('.project-nav-one').css("display", "none");
  $('.project-one-msg-triangle').css("display", "none");
  $('.project-two-msg-triangle').css("display", "none");
  $('.project-three-msg-triangle').css("display", "none");
  $('.project-nav-msg-triangle').css("display", "none");


  $(".projectOne-img-one").css("background-image", "none");
  $(".projectOne-img-two").css("background-image", "none");
  $(".projectOne-img-three").css("background-image", "none");
  $(".projectOne-img-four").css("background-image", "none");
  $(".projectOne-img-five").css("background-image", "none");

  $(".projectTwo-img-one").css("background-image", "none");
  $(".projectTwo-img-two").css("background-image", "none");
  $(".projectTwo-img-three").css("background-image", "none");
  $(".projectTwo-img-four").css("background-image", "none");
  $(".projectTwo-img-five").css("background-image", "none");

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



  //open popup
  $("#login").click(function(){
  $("#message_form").fadeOut(500);
  $("#call_form").fadeOut(500);
  $("#login_form").fadeIn(1000);
  positionPopup();
  });
  $("#close").click(function(){
  $("#login_form").fadeOut(500);
  });
  function positionPopup(){
  if(!$("#login_form").is(':visible')){
  return;
  }
  $("#login_form").css({
  left: ($(window).width() - $('#login_form').width()) / 2,
  top: ($(window).width() - $('#login_form').width()) / 7,
  position:'absolute'
  });
  }
  $(window).bind('resize',positionPopup);

  $("#message").click(function(){
  $("#login_form").fadeOut(500);
  $("#call_form").fadeOut(500);
  $("#message_form").fadeIn(1000);
  positionPopupMsg();
  });
  $("#close").click(function(){
  $("#message_form").fadeOut(500);
  });
  function positionPopupMsg(){
  if(!$("#message_form").is(':visible')){
  return;
  }
  $("#message_form").css({
  left: ($(window).width() - $('#message_form').width()) / 2,
  top: ($(window).width() - $('#message_form').width()) / 7,
  position:'absolute'
  });
  }
  $(window).bind('resize',positionPopupMsg);

  $("#requestCall").click(function(){
  $("#login_form").fadeOut(500);
  $("#message_form").fadeOut(500);
  $("#call_form").fadeIn(1000);
  positionPopupCall();
  });
  $("#close").click(function(){
  $("#call_form").fadeOut(500);
  });

  function positionPopupCall(){
  if(!$("#call_form").is(':visible')){
  return;
  }
  $("#call_form").css({
  left: ($(window).width() - $('#call_form').width()) / 2 ,
  top: ($(window).width() - $('#call_form').width()) / 7,
  position:'absolute'
  });
  }
  $(window).bind('resize',positionPopupCall);





  });
}
