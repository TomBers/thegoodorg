var user = Meteor.user();

Template.company.rendered = function(){
  Meteor.subscribe('UserProfiles');
  // console.log(this.data);
  Session.set('ownerId', this.data.company.cid);
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

var postHooks = {
  before: {
    insert: function(doc) {
      // console.log(doc);
      // console.log(Session.get('ownerId'));
      doc.ownerId = Session.get('ownerId');
      return doc;
    }
  },
  onSuccess: function(operation, result, template) {
    // alert('Thank you for your inquiry! We will get back to you shortly.');
  }
}


AutoForm.addHooks('makeProject', postHooks);
