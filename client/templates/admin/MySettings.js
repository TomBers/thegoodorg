var postHooksCompneyInsert = {
  before: {
    insert: function(doc) {
       var user = Meteor.user();
	   var email = user.emails[0].address ;
	  doc.employees = [email];
      console.log(doc.ownerId);
      return doc;
    }
  }
}


AutoForm.addHooks('makeCompney', postHooksCompneyInsert);