var user = Meteor.user();

Template.company.rendered = function(){
  Meteor.subscribe('UserProfiles');
  // console.log(this.data);
  Session.set('ownerId', this.data.company.cid);
  Session.set('from_id','');
  Session.set('to_id','');
  Session.set('project_id','')
  // console.log(this.data.company.cid);
}

Template.company.helpers({

  isOwned: function(){
      var user = Meteor.user();
      var mail = UserProfiles.findOne({loginID:user.emails[0].address});

        if (this.rep_email == mail.contact_mail)
        {return true;}
        else
        {return false;}
      },

  'linkRepresentative': function() {
        return UserProfiles.findOne({"contact_mail":this.rep_email});
      }
});

Template.projectSummary.helpers({

  isRegistered: function(){
		var user = Meteor.user();
    Session.set('from_id', user.emails[0].address);
    Session.set('to_id', Companies.findOne({"cid":this.ownerId}).rep_email);
    Session.set('project_id', this._id)
		try{
			return UserProfiles.findOne({loginID:Meteor.user().emails[0].address});
		}catch(e){
			return null;
		}
	}
  });

var postHooks = {
  before: {
    insert: function(doc) {

      doc.from_id = Session.get('from_id');
      doc.to_id = Session.get('to_id');
      doc.projectId = Session.get('project_id');
      doc.status = 'Requested';
      console.log(doc);
      return doc;
    }
  },
  onSuccess: function(operation, result, template) {
    // alert('Thank you for your inquiry! We will get back to you shortly.');
  }
}


AutoForm.addHooks('makeContactReq', postHooks);
