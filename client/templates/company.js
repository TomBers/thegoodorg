var user = Meteor.user();
Template.admin.rendered = function(){
  Meteor.subscribe('UserProfiles');
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
