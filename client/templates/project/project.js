Template.project.rendered = function(){
	Meteor.subscribe('UserProfiles');
	Meteor.subscribe('Companies');
	Meteor.subscribe('ContactReqs');
	Session.set('company_id', this.data.company_id);
	Session.set('projectId', this.data._id);
}

Template.project.events({
})

Template.project.helpers({
	linkCompany: function() {
		var user = Meteor.user();
		Meteor.subscribe('Companies');
    return Companies.findOne({"_id":this.company_id});
	}


});

Template.projectCard.helpers({

  linkCompany: function() {
		var user = Meteor.user();
    return Companies.findOne({"_id":this.company_id});
	}

  ,  linkCompanyOwner: function() {
    var cmpy = Companies.findOne({"_id":this.company_id});
    return UserProfiles.findOne({"loginEmail":cmpy.employees[0]});
  	}

});




Template.projectHdrBtns.helpers({
	linkCompany: function() {
		var user = Meteor.user();
		Meteor.subscribe('Companies');
    return Companies.findOne({"_id":this.company_id});
	},

	user: function(){
	var user = Meteor.user();
    return user;
	}
});

Template.projectPanelLeft.helpers({
	linkCompany: function() {
		var user = Meteor.user();
		Meteor.subscribe('Companies');
    return Companies.findOne({"_id":this.company_id});
	}
});




Template.projectPanelCentre.rendered = function(){
	Session.set('LatLng', false);
	if(this.data.postcode){
		Meteor.call("getLatLngfromAddress", this.data.postcode, function(error, result){
				   if(error){
					console.log("LatLng error");
					Session.set('LatLng', false);
					console.log(error);
				   }

				   Session.set('LatLng', result);
			});
	}
}

Template.projectPanelCentre.helpers({
	linkCompany: function() {
		var user = Meteor.user();
		Meteor.subscribe('Companies');
    return Companies.findOne({"_id":this.company_id});
	},

	lonLat: function(e) {
		return Session.get('LatLng')
	},
});



Template.projectPanelRight.helpers({

  linkCompany: function() {
		var user = Meteor.user();
    return Companies.findOne({"_id":this.company_id});
	}

  ,  linkCompanyOwner: function() {
    var cmpy = Companies.findOne({"_id":this.company_id});
//	console.log(cmpy);
    return UserProfiles.findOne({"loginEmail":cmpy.employees[0]});
  	}
	});


var requestHook = {
  before: {
    insert: function(doc) {
			doc.from = Meteor.user().emails[0].address;
			 var cmpy = Companies.findOne({"_id":Session.get('company_id')});
			doc.to = UserProfiles.findOne({"loginEmail":cmpy.employees[0]}).loginEmail;
			doc.project = Session.get('projectId');
			console.log(doc);
			
			var count = ContactReqs.find({project:doc.project,from:doc.from,to:doc.to}).count();
			console.log(count);
			if(count==0){
				return doc;
			}else{
				if(confirm('You have already contacted this company regarding this project.\nDo you want to send another message?')){
					return doc;
				}else{
					return false;
				}
			}
    }
  }
}


AutoForm.addHooks('makeContactReq', requestHook);
