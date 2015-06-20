Template.companyEdit.helpers({

  isOwned: function(){
      var user = Meteor.user();
      var mail = user.emails[0].address;
	  console.log('dddd');
        if (this.company.employees.indexOf(mail)>-1)
        {return true;}
        else
        {return false;}
      },

  linkRepresentative: function() {
        return UserProfiles.findOne({"contact_mail":this.rep_email});
      }
});