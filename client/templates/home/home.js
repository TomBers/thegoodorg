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
			 cause_toggle_status[obj.label].count +=1;
	    }else{
			$(obj.img_class).css("background-image", "");
			cause_toggle_status[obj.label].count -=1;
	    }
		updateToggleLabel(obj.label);
    }
}

function resLabel() {
	  $('#ProjectOneLabel').html("Environment");
	  $('#ProjectTwoLabel').html("Health");
	  $('#ProjectThreeLabel').html("Human Rights");
   }


 //true  = all selected
var cause_toggle_status = {
	"#ProjectOneLabel":{count:0,status:false},
	"#ProjectTwoLabel":{count:0,status:false},
	"#ProjectThreeLabel":{count:0,status:false}
 };

function toggleAllCause(causeIn){
	var currentStatus = cause_toggle_status[causeIn].status;
	currentStatus = !currentStatus;
	console.log(currentStatus);
	 var tmp = Session.get('arrCause');
	var x;
	for (x in cause_map){
		var obj = cause_map[x];
		if(obj.label==causeIn){
			  if ($.inArray(x, tmp) != -1) {
				if(!currentStatus){
					//remove
					 tmp = _.without(tmp, x);
					 $(obj.img_class).css("background-image", "");
					 cause_toggle_status[causeIn].count -=1;
				}
			  }
			  else{
				if(currentStatus){
					//add
					 tmp.push(x);
					$(obj.img_class).css("background-image", obj.background_image);
					 cause_toggle_status[causeIn].count +=1;
				}
			  }
		}
	}
	fadeElements();
	updateToggleLabel(causeIn);
	Session.set('arrCause',tmp);
}


function updateToggleLabel(labelIn){
		if(cause_toggle_status[labelIn].count==5){
			$(labelIn).attr('title','Click to deselect all');
			cause_toggle_status[labelIn].status=true;
		}

		if(cause_toggle_status[labelIn].count==0){
			$(labelIn).attr('title','Click to select all');
			cause_toggle_status[labelIn].status=false;
		}
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


function reinitSelected(){
console.log("reenable");
	var tmpc = Session.get('arrCause');
	var xc;
	for (xc in tmpc){
		var obj = cause_map[tmpc[xc]];
		if(obj){
			$(obj.img_class).css("background-image", obj.background_image);
		}
	}

	var tmpi = Session.get('interest');
	var xi;
	for (xi in tmpi){
		var obj = interest_map[tmpi[xi]];
		if(obj){
				$(obj.img_class).css("background-image", obj.background_image);
		}
	}

	fadeElements();
}

var isInitialPageLoad = true;
function initAllSelectionsAtStart(){
 //setTimeout(function(){hideCollaborateHelpPopup()},5000);

 if(isInitialPageLoad){
 setTimeout(function(){toggleCause("Wildlife & Habitat")},1);
 setTimeout(function(){toggleCause("Sustainable Transport")},1);
 setTimeout(function(){toggleCause("Sustainable Products")},1);
 setTimeout(function(){toggleCause("Green Technology")},1);
 setTimeout(function(){toggleCause("Energy Management")},1);

 setTimeout(function(){toggleCause("Senior Health")},1);
 setTimeout(function(){toggleCause("Rehabilitation")},1);
 setTimeout(function(){toggleCause("Fitness & Exercise")},1);
 setTimeout(function(){toggleCause("Special Needs")},1);
 setTimeout(function(){toggleCause("Mental Health")},1);

 setTimeout(function(){toggleCause("Food & Shelter")},1);
 setTimeout(function(){toggleCause("Accessibility")},1);
 setTimeout(function(){toggleCause("Community")},1);
 setTimeout(function(){toggleCause("Skills & Employment")},1);
 setTimeout(function(){toggleCause("Education")},1);


 setTimeout(function(){toggleInterest("Donate Materials")},1);
 setTimeout(function(){toggleInterest("Monetary Donations")},1);
 setTimeout(function(){toggleInterest("Volunteering")},1);
 setTimeout(function(){toggleInterest("Research Agreements")},1);
 setTimeout(function(){toggleInterest("Product collaboration")},1);
 setTimeout(function(){toggleInterest("Brand Collaboration")},1);
 setTimeout(function(){toggleInterest("Lecturing Opportunites")},1);
 isInitialPageLoad= false;
 }
}





var isFirstClick = true;
  function fadeElements(){
//console.log("fade");
//console.log(isFirstClick);
		  $('.project-nav-one').css("display", "block");
		  $('.project-nav-project:first-of-type').fadeIn(700);
		  $('.project-nav-project:nth-child(2)').fadeIn(1400);
		  $('.project-nav-project:nth-child(3)').fadeIn(2100);
		  $('.project-nav-project:nth-child(4)').fadeIn(2800);
		  $('.project-nav-project:nth-child(5)').fadeIn(3500);
		  $('.project-nav-project:nth-child(6)').fadeIn(4200);
		  $('.project-nav-project:nth-child(7)').fadeIn(4900);
	if(isFirstClick){
		  $('.project-nav-msg-triangle').css("display", "block");
		  isFirstClick = false;
		  setTimeout(function(){hideCollaborateHelpPopup();  isFirstClick = false;},5000);
	}
  }

/* Causes actions */

  function hideCollaborateHelpPopup(){
	$('.project-nav-msg-triangle').css("display", "none");
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
  },

  "click #close-button-nav":function(event, template){
	event.preventDefault();
  	//$('.project-nav-msg-triangle').attr("style", "display: none !important");
	hideCollaborateHelpPopup();
  },

  "click .causeLabel": function(event, template){

	var cause = '#'+event.target.id;
	toggleAllCause(cause);
  },



  "click #clearAllSelections":function(){

   setTimeout(function(){toggleCause("Wildlife & Habitat")},0);
   setTimeout(function(){toggleCause("Sustainable Transport")},0);
   setTimeout(function(){toggleCause("Sustainable Products")},0);
   setTimeout(function(){toggleCause("Green Technology")},0);
   setTimeout(function(){toggleCause("Energy Management")},0);

   setTimeout(function(){toggleCause("Senior Health")},0);
   setTimeout(function(){toggleCause("Rehabilitation")},0);
   setTimeout(function(){toggleCause("Fitness & Exercise")},0);
   setTimeout(function(){toggleCause("Special Needs")},0);
   setTimeout(function(){toggleCause("Mental Health")},0);

   setTimeout(function(){toggleCause("Food & Shelter")},0);
   setTimeout(function(){toggleCause("Accessibility")},0);
   setTimeout(function(){toggleCause("Community")},0);
   setTimeout(function(){toggleCause("Skills & Employment")},0);
   setTimeout(function(){toggleCause("Education")},0);


   setTimeout(function(){toggleInterest("Donate Materials")},0);
   setTimeout(function(){toggleInterest("Monetary Donations")},0);
   setTimeout(function(){toggleInterest("Volunteering")},0);
   setTimeout(function(){toggleInterest("Research Agreements")},0);
   setTimeout(function(){toggleInterest("Product collaboration")},0);
   setTimeout(function(){toggleInterest("Brand Collaboration")},0);
   setTimeout(function(){toggleInterest("Lecturing Opportunites")},0);

 }





});


Template.home.rendered = function(){
//Session.set('arrCause', []);
//Session.set('interest', []);

  Meteor.subscribe('Projects');
  Meteor.subscribe('UserProfiles');
  Meteor.subscribe("Companies");
  Session.set('company_id', this.data.company_id);
  Session.set('projectId', this.data._id);
	reinitSelected();
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



  initAllSelectionsAtStart();
  $('#filter_graphic').css("height", "515px");
	setTimeout(function(){$('#filter_graphic').css("height", "");},6000);
  });
}
