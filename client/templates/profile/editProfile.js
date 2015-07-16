Template.editProfile.rendered = function(){
//  Meteor.subscribe('Projects');
	// var me = Meteor.user();
	// Meteor.subscribe('UserProfiles');
	// var myProfile = UserProfiles.findOne({loginEmail:me.emails[0].address});
	// Session.set('user', user);
//  Meteor.subscribe("Companies");
// var user = Meteor.user();

	$('document').ready(function(){

		//looks shit
	//	 $('[data-toggle="tooltip"]').tooltip();
	});
};

Template.editProfile.helpers({
	resetMyProfile: function(){
		// var me = Meteor.user();
		// Meteor.subscribe('UserProfiles');
		// // var myProfile = UserProfiles.findOne({loginEmail:me.emails[0].address});
		// var myProfile = UserProfiles.findOne({loginEmail:Meteor.user().emails[0].address});
		//
    //     if (myProfile == null)
		// 		{
		// 			myProfile = UserProfiles.insert({loginEmail:me.emails[0].address});
		// 		}
    //     return myProfile;
    //   }
		Meteor.subscribe("Users");
		console.log('hello');
		    // return Session.get('user');
      }
,

	myCompanies: function(){
		Meteor.subscribe('Companies');
		var me = Meteor.user();
		var myCompanies = Companies.find({employees: {$in : [me.emails[0].address]}});

			// if (myProfile == null)
			// {
			// 	myProfile = UserProfiles.insert({loginEmail:me.email[0].address});
			// }
			return myCompanies;
		},

	myProjects: function(e){
		Meteor.subscribe('Projects');
		var me = Meteor.user();
		var myProjects = Projects.find({company_id: {$in : [e._id]}});

				// if (myProfile == null)
				// {
				// 	myProfile = UserProfiles.insert({loginEmail:me.email[0].address});
				// }
				return myProjects;
			}


  // isOwned: function(){
      // var user = Meteor.user();
      // var mail = UserProfiles.findOne({loginID:user.emails[0].address});
			//
      //   if (this.employees[0] == mail.loginEmail)
      //   {return true;}
      //   else
      //   {return false;}
      // }
	});

	Template.UProfile.helpers({

	  // isOwned: function(){
	  //     var user = Meteor.user();
	  //     var mail = UserProfiles.findOne({loginID:user.emails[0].address});
		//
	  //       if (this.employees[0] == mail.loginEmail)
	  //       {return true;}
	  //       else
	  //       {return false;}
	  //     }
		});

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
