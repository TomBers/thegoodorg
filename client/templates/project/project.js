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
	},

	formatDate: function(date) {
	  // return moment(date).format('MM-DD-YYYY');
		return date.toDateString();
	},

	getInterestPic: function(e) {

		if($.inArray("Donate Materials", [e]) != -1){ return '/images/project-nav-one-img-one.png'; }
		if($.inArray("Monetary Donations", [e]) != -1){ return '/images/project-nav-one-img-two.png'; }
		if($.inArray("Volunteering", [e]) != -1){ return '/images/project-nav-one-img-three.png'; }
		if($.inArray("Research Agreements", [e]) != -1){ return '/images/project-nav-one-img-four.png'; }
		if($.inArray("Product Collaboration", [e]) != -1){ return '/images/project-nav-one-img-five.png'; }
		if($.inArray("Product collaboration", [e]) != -1){ return '/images/project-nav-one-img-five.png'; }
		if($.inArray("Brand Collaboration", [e]) != -1){ return '/images/project-nav-one-img-six.png'; }
		if($.inArray("Lecturing Opportunites", [e]) != -1){ return '/images/project-nav-one-img-seven.png'; }
},
	getInterestPics: function() {

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
