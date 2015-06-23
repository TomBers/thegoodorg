
Template.company.rendered = function(){
  Meteor.subscribe('UserProfiles');
  var user = Meteor.user();
  Session.set('from_id','');
  Session.set('to_id','');
  Session.set('project_id','');
}

Template.company.helpers({

  isOwned: function(){
      var user = Meteor.user();
      var mail = user.emails[0].address;
	Session.set('company_id', this._id); //hacky
        if (this.employees.indexOf(mail)>-1)
        {return true;}
        else
        {return false;}
      },

  linkRepresentative: function() {
        return UserProfiles.findOne({"loginEmail":this.employees});
      }
});

Template.projectSummary.rendered = function(){
  Meteor.subscribe('UserProfiles');
}
Template.projectSummary.helpers({

 isOwned: function(){
      var user = Meteor.user();
      var mail = user.emails[0].address;

        if (Companies.findOne({"_id":this.company_id , employees: {$in : [mail]}}))
        {return true;}
        else
        {return false;}
      },
	  
  isRegistered: function(){
		var user = Meteor.user();
    Session.set('from_id', user.emails[0].address);
    Session.set('to_id', Companies.findOne({"_id":this.company_id}).employees[0]); //FIXME
    Session.set('project_id', this._id);
		try{
			return UserProfiles.findOne({loginID:user.emails[0].address});
		}catch(e){
			return null;
		}
	}
  });





// var postHooks = {
//   before: {
//     insert: function(doc) {
//
//       doc.from_id = Session.get('from_id');
//       doc.to_id = Session.get('to_id');
//       doc.projectId = Session.get('project_id');
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
// AutoForm.addHooks('makeContactReq2', postHooks);




var postHooksProjectInsert = {
  before: {
    insert: function(doc) {
	  doc.company_id = Session.get('company_id'); //hacky

      return doc;
    }
  }
}


AutoForm.addHooks('makeProject', postHooksProjectInsert);