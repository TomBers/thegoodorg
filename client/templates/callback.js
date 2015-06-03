Template.displayCallbacks.helpers({
  callbackReqsOut: function() {
    var user = Meteor.user();
    if (user && user.emails)
      return ContactReqs.find({from_id:user.emails[0].address});
  },

  callbackReqsIn: function() {
    var user = Meteor.user();
    if (user && user.emails)
      return ContactReqs.find({to_id:user.emails[0].address});
  }

});

// ignore code below...


//
// var user = Meteor.user();
// Template.callback.rendered = function(){
//   Meteor.subscribe('UserProfiles');
//   // Session.set('from_ID', '');
//   // Session.set('to_ID', '');
//   // Session.set('project_ID', '');
// }
//
//
// Template.callback.helpers({
//   userMailAddress: function() {
//     var user = Meteor.user();
//     if (user && user.emails)
//       return user.emails[0].address;
//   },
//
//   isRegistered: function(){
//     var user = Meteor.user();
//     Session.set('from_ID', UserProfiles.findOne({loginID:user.emails[0].address})._id);
//     Session.set('to_ID', '2');
//     Session.set('project_ID', '3');
//
//     try
//
//       {return UserProfiles.findOne({loginID:user.emails[0].address});}
//     catch(e)
//       {return null;}
//   },
//
//   // callbackDetails: function(){
//   //   Session.set('project_ID', this._id);
//   //   Session.set('from_ID', UserProfiles.findOne({loginID:Meteor.user().emails[0].address}));
//   //
//   //     return true; //currentUserID
//   // },
//
//
//   checkActive: function(){
//     var user = Meteor.user();
//     if (UserProfiles.find({loginID:user.emails[0].address}, {isActive: true}).limit(1))
//       {return true;}
//     else
//       {return false;}
//   }
//
// });
//
// var postHooks = {
//   before: {
//     insert: function(doc) {
//
//       doc.from_id = Session.get('from_ID');
//       doc.to_id = Session.get('to_ID');
//       doc.projectId = Session.get('project_ID');
//       doc.status = 'Requested';
//       console.log(doc);
//       return doc;
//     }
//   },
//   onSuccess: function(operation, result, template) {
//     // alert('Thank you for your inquiry! We will get back to you shortly.');
//   }
// }
//
//
// AutoForm.addHooks('makeContactReq', postHooks);
