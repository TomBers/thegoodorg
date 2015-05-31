//var currentUserID = Meteor.user().emails[0].address;
//Session.set('currentUserID','');
var user = Meteor.user();
Template.admin.rendered = function(){
  Meteor.subscribe('UserProfiles');
  // currentUserID = Meteor.user().emails[0].address;
}



Template.admin.helpers({
  userMailAddress: function() {
    var user = Meteor.user();
    if (user && user.emails)
  //    var userMail = user.emails[0].address;
  //    Session.set('currentUserID',varUserMail);
      //console.log("test");
      return user.emails[0].address;
  }


  ,myCompanies: function(){
    var user = Meteor.user();
    if (user && user.emails)

    return Companies.find({rep_email:user.emails[0].address}); //currentUserID
    }

    ,isRegistered: function(){
      var user = Meteor.user();
      try{
      return UserProfiles.findOne({loginID:user.emails[0].address});
    }catch(e){
      return null;
    }

    }


    ,checkActive: function(){
      var user = Meteor.user();
      if (UserProfiles.find({loginID:user.emails[0].address}, {isActive: true}).limit(1))
      {return true;}
      else
      {return false;}
    }

  // ,  myUserDetails: function(){
  //       return Companies.find({rep_email:varUserID})
  //   },
  //
  //
  // isUserAdmin : function(){
  //   var adminEmail = Meteor.user().emails[0].address;
  //   if( adminEmail === "j@da1e.com"){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
});
