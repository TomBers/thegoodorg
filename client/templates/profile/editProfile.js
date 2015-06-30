Template.editProfile.rendered = function(){
//  Meteor.subscribe('Projects');
//  Meteor.subscribe('UserProfiles');
//  Meteor.subscribe("Companies");

	$('document').ready(function(){
	
		
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
