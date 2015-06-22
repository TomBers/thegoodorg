
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

        if (this.employees[0] == mail.loginEmail)
        {return true;}
        else
        {return false;}
      },

  linkRepresentative: function() {
  console.log("rrrrrr");
   console.log(this.company.employees[0])
        return UserProfiles.findOne({"loginEmail":this.company.employees[0]});
      }
});

Template.companyHeader.rendered = function(){
  Meteor.subscribe('UserProfiles');}

Template.companyHeader.helpers({

  linkRepresentative: function() {
        return UserProfiles.findOne({"loginEmail":this.company.employees});
      }
});
