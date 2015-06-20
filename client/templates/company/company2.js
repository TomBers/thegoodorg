
Template.company2.rendered = function(){
  Meteor.subscribe('UserProfiles');
  var user = Meteor.user();
  Session.set('from_id','');
  Session.set('to_id','');
  Session.set('project_id','');
}

Template.company2.helpers({

  isOwned: function(){
      var user = Meteor.user();
      var mail = UserProfiles.findOne({loginID:user.emails[0].address});

        if (this.rep_email == mail.contact_mail)
        {return true;}
        else
        {return false;}
      },

  linkRepresentative: function() {
        return UserProfiles.findOne({"contact_mail":this.company.rep_email});
      }
});
