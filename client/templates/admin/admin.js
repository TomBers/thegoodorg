var user = Meteor.user();
Template.admin.rendered = function(){
  Meteor.subscribe("Companies");
  Meteor.subscribe('Projects');
  Meteor.subscribe('UserProfiles');
  Session.set('company_id');
}

Template.splash.rendered = function(){

}

Template.admin_listCompanies.events({
  'click .btn-primary' :function(e,template){
    Session.set('_id', template.data.company_id);
  }
})


Template.admin.helpers({
  userMailAddress: function() {
    var user = Meteor.user();
    if (user && user.emails)

      return user.emails[0].address;
  }


  ,myCompanies: function(){
    var user = Meteor.user();
    if (user && user.emails)
    return Companies.find({employees:user.emails[0].address});
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

});


Template.admin_listCompanies.helpers({
  myProjects: function(){

    return Projects.find({company_id:this._id});
    }

});

// if (Meteor.isClient) {
// AutoForm.hooks({
//   makeProject: {
//     before: {
//       insert: function(doc, template) {
//         doc.company_id = Session.get('company_id');
//         return doc;
//       }
//     }
//   },
//   addCmp:{
//     after:{
//       update: function(a,b,c){
//         console.log('UPDATE');
//       }
//     }
//   },
//   editcmpny:{
//     before:{
//       update: function(a,b,c){
//         console.log('UPDATE');
//       }
//     }
//   }
// });
//
// }
// var postHooks = {
//   before: {
//     insert: function(doc) {
//       console.log(Session.get('company_id'));
//       doc.company_id = Session.get('company_id');
//       return doc;
//     }
//   },
//   onSuccess: function(operation, result, template) {
//     // alert('Thank you for your inquiry! We will get back to you shortly.');
//   }
// }
// AutoForm.addHooks('makeProject', postHooks);
//

var postHooks = {
  after: {
    update: function(doc) {
      console.log('Update!!');
      // return doc;
    }
  }
}
AutoForm.addHooks('editcmpny', postHooks);
