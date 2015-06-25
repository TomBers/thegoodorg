// Session.set('cause', '');
Session.set('arrCause', []);
Session.set('interest', []);

/*  Cause selection functions */
var cause_map = {};
cause_map["Wildlife & Habitat"] = {img_class:".projectOne-img-one", label:"#ProjectOneLabel", background_image:"url(images/projectOne-img-one.png)"};  
cause_map["Sustainable Transport"] = {img_class:".projectOne-img-two", label:"#ProjectOneLabel", background_image:"url(images/projectOne-img-two.png)"};  
cause_map["Sustainable Products"] = {img_class:".projectOne-img-three", label:"#ProjectOneLabel", background_image:"url(images/projectOne-img-three.png)"};  
cause_map["Green Technology"] = {img_class:".projectOne-img-four", label:"#ProjectOneLabel", background_image:"url(images/projectOne-img-four.png)"};  
cause_map["Energy Management"] = {img_class:".projectOne-img-five", label:"#ProjectOneLabel", background_image:"url(images/projectOne-img-five.png)"};  

cause_map["Senior Health"] = {img_class:".projectTwo-img-one", label:"#ProjectTwoLabel", background_image:"url(images/project-two-optionOne.png)"};  
cause_map["Rehabilitation"] = {img_class:".projectTwo-img-two", label:"#ProjectTwoLabel", background_image:"url(images/project-two-optionTwo.png)"};      
cause_map["Fitness & Exercise"] = {img_class:".projectTwo-img-three", label:"#ProjectTwoLabel", background_image:"url(images/project-two-optionThree.png)"};      
cause_map["Special Needs"] = {img_class:".projectTwo-img-four", label:"#ProjectTwoLabel", background_image:"url(images/project-two-optionFour.png)"};      
cause_map["Mental Health"] = {img_class:".projectTwo-img-five", label:"#ProjectTwoLabel", background_image:"url(images/project-two-optionFive.png)"};      

cause_map["Food & Shelter"] = {img_class:".projectThree-img-one", label:"#ProjectThreeLabel", background_image:"url(images/project-three-one.png)"};      
cause_map["Accessibility"] = {img_class:".projectThree-img-two", label:"#ProjectThreeLabel", background_image:"url(images/project-three-two.png)"};      
cause_map["Community"] = {img_class:".projectThree-img-three", label:"#ProjectThreeLabel", background_image:"url(images/project-three-three.png)"};      
cause_map["Skills & Employment"] = {img_class:".projectThree-img-four", label:"#ProjectThreeLabel", background_image:"url(images/project-three-four.png)"};      
cause_map["Education"] = {img_class:".projectThree-img-five", label:"#ProjectThreeLabel", background_image:"url(images/project-three-five.png)"};      

function addCause(causeIn){
  var tmp = Session.get('arrCause');
  if ($.inArray(causeIn, tmp) != -1) {
    Session.set('arrCause', _.without(tmp, causeIn) )
	return false;
  }else{
    tmp.push(causeIn);
    Session.set('arrCause',tmp);
	return true;
  }

}

function toggleCause(causeIn){

var obj = cause_map[causeIn];
	if(obj){
		if(addCause(causeIn)){
			$(obj.img_class).css("background-image", obj.background_image);
			fadeElements();
	    }else{
			$(obj.img_class).css("background-image", "");
	    }
    }
}

function resLabel() {
	  $('#ProjectOneLabel').html("Environment");
	  $('#ProjectTwoLabel').html("Health");
	  $('#ProjectThreeLabel').html("Human Rights");
   }
   
/* end cause functions */


/*  interest functions */
var interest_map = {};
interest_map["Donate Materials"] = {img_class:".project-nav-one-img-one", background_image:"url(images/project-nav-one-img-one.png)"};
interest_map["Monetary Donations"] = {img_class:".project-nav-one-img-two", background_image:"url(images/project-nav-one-img-two.png)"};
interest_map["Volunteering"] = {img_class:".project-nav-one-img-three", background_image:"url(images/project-nav-one-img-three.png)"};
interest_map["Research Agreements"] = {img_class:".project-nav-one-img-four", background_image:"url(images/project-nav-one-img-four.png)"};
interest_map["Product collaboration"] = {img_class:".project-nav-one-img-five", background_image:"url(images/project-nav-one-img-five.png)"};
interest_map["Brand Collaboration"] = {img_class:".project-nav-one-img-six", background_image:"url(images/project-nav-one-img-six.png)"};
interest_map["Lecturing Opportunites"] = {img_class:".project-nav-one-img-seven", background_image:"url(images/project-nav-one-img-seven.png)"};

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

function toggleInterest(interest){
	var obj = interest_map[interest];
		if(obj){
		if(addInterest(interest)){
				$(obj.img_class).css("background-image", obj.background_image);
		   }else{
				$(obj.img_class).css("background-image", "");
		   }
	   }
}


/*  end interest functions */

var isFirstClick = true;
  function fadeElements(){  
//console.log("fade");  
	if(isFirstClick){
		  $('.project-nav-one').css("display", "block");
		  $('.project-nav-project:first-of-type').fadeIn(700);
		  $('.project-nav-project:nth-child(2)').fadeIn(1400);
		  $('.project-nav-project:nth-child(3)').fadeIn(2100);
		  $('.project-nav-project:nth-child(4)').fadeIn(2800);
		  $('.project-nav-project:nth-child(5)').fadeIn(3500);
		  $('.project-nav-project:nth-child(6)').fadeIn(4200);
		  $('.project-nav-project:nth-child(7)').fadeIn(4900);
		  $('.project-nav-msg-triangle').css("display", "block");
		  isFirstClick = false;
	}
  }


  
   
   

Template.home.helpers({
  cause: function(){
      return Session.get('arrCause');
  },
  interest: function(){
      return Session.get('interest');
  },

  visibleProjects: function(){
  //   console.log(Session.get('arrCause'));
//	 console.log(Session.get('interest'));
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


// note uses event rather than render>$('document').ready as this element is dynamic (so not in dom at start)
Template.home.events({
  "click [remove-cause]": function(event, template){
	var cause = $(event.target).attr('remove-cause');
   // console.log(cause);
	toggleCause(cause);
  },
   "click [remove-interest]": function(event, template){
	var interest = $(event.target).attr('remove-interest');
   // console.log(interest);
	toggleInterest(interest);
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

  $(".project-nav-project").on("click",function(){
  //console.log("nav...");
  hideCollaborateHelpPopup();
	var interest = $(this).attr('interest');
	toggleInterest(interest);
  });
  /* PROJECT NAVIGATION IMAGES END */

 

  /* Causes actions */
   $("[cause]").on("click",function(){

	var cause = $(this).attr('cause');
	toggleCause(cause);
   });
  
   $("[cause]").on("mouseover",function(){
	var me = $(this);
	var cause = me.attr('cause');
	var obj = cause_map[cause];
	if(obj){
		$(obj.label).html(cause);
	}
   });
  
   $("[cause]").on("mouseout",function(){
	resLabel();
   });
  
  /* Causes actions */
  
  $("#close-button-nav").one('click',function(e){
  $(this).on("click",function(ev){
  	 ev.preventDefault();
  	$('.project-nav-msg-triangle').attr("style", "display: none !important");
  });
  });

  
  function hideCollaborateHelpPopup(){
	$('.project-nav-msg-triangle').css("display", "none");
  }
  
  

  


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
