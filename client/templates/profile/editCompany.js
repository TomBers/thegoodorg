Template.editCompany.rendered = function(){
//  Meteor.subscribe('Projects');
//  Meteor.subscribe('UserProfiles');
//  Meteor.subscribe("Companies");
//	Session.set("editingProject",null);

	Session.set('company_id',this.data.company._id); //hacky
	$('document').ready(function(){
	});
};


Template.editCompany.helpers({
/*
	editingProject: function(){
		return Session.get("editingProject");
	},
	
	getProjectDoc:function(){
		return "1";
	},
*/
  isOwned: function(){
      var user = Meteor.user();
      var mail = user.emails[0].address;
        if (this.company.employees.indexOf(mail)>-1)
        {return true;}
        else
        {return false;}
      },

  linkRepresentative: function() {
        return UserProfiles.findOne({"loginEmail":this.employees[0]});
      }
});


var postHooksProjectInsert = {
  before: {
    insert: function(doc) {
	  doc.company_id = Session.get('company_id'); //hacky
      return doc;
    }
  },
  onSuccess: function(formType, result) {

  },
}



AutoForm.addHooks('makeProject', postHooksProjectInsert);