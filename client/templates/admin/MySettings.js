Template.mySettings.rendered = function(){
//  Meteor.subscribe('Projects');
//  Meteor.subscribe('UserProfiles');
//  Meteor.subscribe("Companies");

	$('document').ready(function(){
	
	  initGrayOut();
		
		//looks shit
	//	 $('[data-toggle="tooltip"]').tooltip(); 
	});
};

var postHooksCompneyInsert = {
  before: {
    insert: function(doc) {
       var user = Meteor.user();
	   var email = user.emails[0].address ;
	  doc.employees = [email];
      return doc;
    }
  }
}


AutoForm.addHooks('makeCompney', postHooksCompneyInsert);


var initGrayOut = function(){
	//apply opacity to this div
		$("div .canDarkOut").mouseover(function(e){
			$(e.currentTarget).addClass("darkOut");
		});
		
		// aggressively remove opacity on mouse out on ALL divs
		$("div .canDarkOut").mouseout(function(){
			$("div .canDarkOut").removeClass("darkOut");
		});
}