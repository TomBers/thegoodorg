Template.editProfile.helpers({


	myCompanies: function(user){
		Meteor.subscribe('Companies');
		var myCompanies = Companies.find({employees: {$in : [user.loginEmail]}});
		return myCompanies;
		},

	myProjects: function(e){
		Meteor.subscribe('Projects');
		var myProjects = Projects.find({company_id: {$in : [e._id]}});
		return myProjects;
		}
	});


Template.addNewCompany.events({

  'click #addNewCom':function(){
    Meteor.subscribe('Companies');
    var CompID = Companies.insert({name:"new company", employees:[this.user.loginEmail]});
    Router.go('/editCompany/' + CompID);
  }
});

