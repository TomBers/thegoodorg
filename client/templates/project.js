Template.project.rendered = function(){
	Meteor.subscribe('UserProfiles');
	Meteor.subscribe('Companies');
	Session.set('ownerId', this.data.ownerId);
	Session.set('projectId', this.data._id);
}

Template.project.events({
})

Template.project.helpers({
	linkCompany: function() {
		var user = Meteor.user();
    return Companies.findOne({"cid":this.ownerId});
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
  }
}


AutoForm.addHooks('makeContactReq', requestHook);
