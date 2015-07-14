function build_PieChart(wrapper_Class, _data) {
	var dataset = [1, 1, 1, 1, 1];

	var colors = ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b'];

	var width = document.querySelector(wrapper_Class).offsetWidth,
		height = document.querySelector(wrapper_Class).offsetHeight,
		minOfWH = Math.min(width, height) / 2,
		initialAnimDelay = 300,
		arcAnimDelay = 150,
		arcAnimDur = 3000,
		secDur = 1000,
		secIndividualdelay = 150,
		radius;

	// calculate minimum of width and height to set chart radius
	if (minOfWH > 200) {
			radius = 200;
	} else {
			radius = minOfWH;
	}

	// append svg
	var svg = d3.select(wrapper_Class).append('svg')
		.attr({
				'width': width,
				'height': height,
				'class': 'pieChart'
		})
		.append('g');

	svg.attr({
		'transform': 'translate(' + width / 2 + ',' + height / 2 + ')'
	});

	// for drawing slices
	var arc = d3.svg.arc()
		.outerRadius(radius * 0.6)
		.innerRadius(radius * 0.35);

	// for labels and polylines
	var outerArc = d3.svg.arc()
		.innerRadius(radius * 0.85)
		.outerRadius(radius * 0.85);

	// d3 color generator
	var c10 = d3.scale.category10();

	var pie = d3.layout.pie()
		.value(function(d) {
				return d;
		});

	var draw = function() {

		svg.append("g")
				.attr("class", "lines");
		svg.append("g")
				.attr("class", "slices");
		svg.append("g")
				.attr("class", "labels");

		// define slice
		var slice = svg.select('.slices')
				.datum(dataset)
				.selectAll('path')
				.data(pie);
		slice
				.enter().append('path')
				.attr({
						'fill': function(d, i) {
								// slice color 								
								return colors[i];
						},
						'd': arc,
						'stroke-width': '25px',
				'id': function(d, i) {
								// slice color 								
								return 'seg_'+i;
						}
						,
				'cause': function(d, i) {
								// slice color 								
								return _data[i];
						}
						
				})
				.attr('transform', function(d, i) {
						return 'rotate(-180, 0, 0)';
				})
				.style('opacity', 0)
				.transition()
				.delay(function(d, i) {
						return (i * arcAnimDelay) + initialAnimDelay;
				})
				.duration(arcAnimDur)
				.ease('elastic')
				.style('opacity', 1)
				.attr({
						'transform': 'rotate(0,0,0)'
				});

		slice.transition()
				.delay(function(d, i) {
						return arcAnimDur + (i * secIndividualdelay);
				})
				.duration(secDur)
				.attr('stroke-width', '5px');

		function midAngle(d) {
				return d.startAngle + (d.endAngle - d.startAngle) / 2;
		}

		var text = svg.select(".labels").selectAll("text")
				.data(pie(dataset));

		text.enter()
				.append('text')
				.attr('dy', '0.35em')
				.style("opacity", 0)
				.style('fill', function(d, i) {
						return colors[i];
				})
				.html(function(d, i) {
						console.log(_data[i]);
						console.log(_data[i].split(' '));
						var words = _data[i].split(' ');
						if(words[1] && words[1] == '&'){
							var s = "<tspan x='0'>"+words[0]+ " &</tspan>";
								s = s+ "<tspan x='0' dy='1.2em'>"+words[2]+ "</tspan>";
							return s; 
						}
						else{
							var s = "<tspan x='0'>"+words[0]+ "</tspan>";
							 for (var i = 1; i < words.length; i++) {
								s = s+ "<tspan x='0' dy='1.2em'>"+words[i]+ "</tspan>";
							 }
							return s; 
						}
				})
				.attr('transform', function(d) {
						// calculate outerArc centroid for 'this' slice
						var pos = outerArc.centroid(d);
						// define left and right alignment of text labels 							
						pos[0] = radius * (midAngle(d) < Math.PI ? 1 : -1);
						return "translate(" + pos + ")";
				})
				.style('text-anchor', function(d) {
						return midAngle(d) < Math.PI ? "start" : "end";
				})
				.transition()
				.delay(function(d, i) {
						return arcAnimDur + (i * secIndividualdelay);
				})
				.duration(secDur)
				.style('opacity', 1);

		var polyline = svg.select(".lines").selectAll("polyline")
				.data(pie(dataset));

		polyline.enter()
				.append("polyline")
				.style("opacity", 0.5)
				.style("stroke","black")
				.attr('points', function(d) {
						var pos = outerArc.centroid(d);
						pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
						return [arc.centroid(d), arc.centroid(d), arc.centroid(d)];
						}
					)
				.transition()
				.duration(secDur)
				.delay(function(d, i) {
						return arcAnimDur + (i * secIndividualdelay);
				})
				.attr('points', function(d) {
						var pos = outerArc.centroid(d);
						pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
						return [arc.centroid(d), outerArc.centroid(d), pos];
				});
	};
  return draw;
}


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
//console.log("reenable");
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

	"click [cause]": function(event, template){
	var cause = $(event.target).attr('cause');
    //console.log(cause);
	toggleCause(cause);
  },

  "click #clearAllSelections":function(){
		var interest;
		for (interest in interest_map){
			var obj = interest_map[interest];
			if(obj){
					$(obj.img_class).css("background-image", "");
			}
		}
		Session.set('interest', []);
		
		
		var cause;
		for (cause in cause_map){
			var obj = cause_map[cause];
			if(obj){
					$(obj.img_class).css("background-image", "");
			}
		}
		Session.set('arrCause', []);
		
		var causeLabel;
		for (causeLabel in cause_toggle_status){
			var obj = cause_toggle_status[causeLabel];
			if(obj){
					obj.count=0;
					obj.status=false;
					updateToggleLabel(causeLabel);
			}
		}
 },
 
 "mouseleave #filter_all":function(){
		$('#filter_graphic').css("height", "");
		$('.small-filter-icon').css("opacity", "1");
 },
 
 "mouseover #filter_graphic":function(){
		$('#filter_graphic').css("height", "350px");
		$('.small-filter-icon').css("opacity", "0");
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
  $('.small-filter-icon').css("opacity", "0");
  $('#filter_graphic').css("height", "350px");
	setTimeout(function(){
			$('#filter_graphic').css("height", "");
			$('.small-filter-icon').css("opacity", "1");
			
	},6000);
	
	// piecharts:
	console.log("doing chart");
	
	var chart_e = build_PieChart(".cause_env", ["Wildlife & Habitat","Sustainable Transport",
												"Sustainable Products","Green Technology",
												"Energy Management"]);
	chart_e();
	var chart_h = build_PieChart(".cause_health", ["Senior Health","Fitness & Exercise",
													"Rehabilitation",
													"Special Needs",
													"Mental Health"]);
	chart_h();
	var chart_r = build_PieChart(".cause_rights", ["Food & Shelter","Accessibility"
													,"Community","Skills & Employment",
													"Education"]);
	chart_r();
	
	
	
	
	
	
	
	
  });
}
