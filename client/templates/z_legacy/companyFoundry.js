Template.companyFoundry.rendered = function(){
  Meteor.subscribe('UserProfiles');
  var user = Meteor.user();
  Session.set('from_id','');
  Session.set('to_id','');
  Session.set('project_id','');
}

Template.companyFoundry.helpers({

  isOwned: function(){
      var user = Meteor.user();
      var mail = UserProfiles.findOne({loginID:user.emails[0].address});

        if (this.employees == mail.loginEmail)
        {return true;}
        else
        {return false;}
      },

  linkRepresentative: function() {
        return UserProfiles.findOne({"loginEmail":this.employees});
      }
});



Template.companyFoundryAlt.rendered = function(){
  Meteor.subscribe('UserProfiles');
  var user = Meteor.user();
  Session.set('from_id','');
  Session.set('to_id','');
  Session.set('project_id','');
}

Template.companyFoundryAlt.helpers({

  isOwned: function(){
      var user = Meteor.user();
      var mail = UserProfiles.findOne({loginID:user.emails[0].address});

        if (this.employees == mail.loginEmail)
        {return true;}
        else
        {return false;}
      },

  linkRepresentative: function() {
        return UserProfiles.findOne({"loginEmail":this.employees});
      }
});
