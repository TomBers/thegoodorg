Template.project.rendered = function(){
	Meteor.subscribe('UserProfiles');
	Meteor.subscribe('Companies');
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
	console.log("error");
	Session.set('LatLng', false);
	Meteor.call("getLatLngfromAddress", this.data.postcode, function(error, result){
				   if(error){
					console.log("error");
					Session.set('LatLng', false);
					console.log(error);
				   }

				   Session.set('LatLng', result);
			});
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
			doc.from = Meteor.user()._id;
			doc.to = Session.get('company_id');
			doc.project = Session.get('projectId');
			console.log(doc);
      return doc;
    }
  }
}


AutoForm.addHooks('makeContactReq', requestHook);
