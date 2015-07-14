Template.editProfile.rendered = function(){
//  Meteor.subscribe('Projects');
//  Meteor.subscribe('UserProfiles');
//  Meteor.subscribe("Companies");

	$('document').ready(function(){


		//looks shit
	//	 $('[data-toggle="tooltip"]').tooltip();
	});
};


Template.addNewCompany.events({

  'click #addNewCom':function(){

    Meteor.subscribe('Companies');
		var user = Meteor.user();
		var email = user.emails[0].address ;
    var CompID = Companies.insert({name:"new company", employees:[email]});
    Router.go('/editCompany/' + CompID);
  }
});


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
