Template.nproject.rendered = function(){
	console.log(this);
	console.log(Meteor.user());
	Session.set('ownerId', this.data.ownerId);
	Session.set('projectId', this.data._id);
}


Template.nproject.events({
})

Template.nproject.helpers({
	isRegistered: function(){
		// TODO check this is still valid with LinkedIn login (suspecting not)
			return UserProfiles.findOne({loginID: Meteor.user().emails[0].address});
	}
});


var requestHook = {
  before: {
    insert: function(doc) {
			doc.from = Meteor.user()._id;
			doc.to = Session.get('ownerId');
			doc.project = Session.get('projectId');
			console.log(doc);
      return doc;
    }
  },
  onSuccess: function(operation, result, template) {
    // alert('Thank you for your inquiry! We will get back to you shortly.');
  }
}


AutoForm.addHooks('makeContactReq', requestHook);
