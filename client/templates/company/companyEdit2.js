Template.companyEdit2.rendered = function(){
//  Meteor.subscribe('Projects');
//  Meteor.subscribe('UserProfiles');
//  Meteor.subscribe("Companies");
//	Session.set("editingProject",null);

	Session.set('company_id',this.data.company._id); //hacky
	$('document').ready(function(){
	
	  initGrayOut();
		
		
		/*	
		$("div .editProject").click(function(e){
			var id = e.currentTarget.getAttribute('projectID');
			console.log(id);
			Session.set("editingProject",id);	
			
		});

	
		$("div .editBackground").click(function(e){
			console.log("editBackground click");
		});
*/		
		
		//looks shit
	//	 $('[data-toggle="tooltip"]').tooltip(); 
	});
};


Template.companyEdit2.helpers({
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
  
	console.log("form called");
	initGrayOut();
  },
}


var initGrayOut = function(){
	//apply opacity to this div
		$("div .canDarkOut").mouseover(function(e){
			$(e.currentTarget).addClass("darkOut");
		});
		
		// aggressively remove opacity on mouse out on ALL divs
		$("div .canDarkOut").mouseout(function(){
			$("div .canDarkOut").removeClass("darkOut");
		});
}


AutoForm.addHooks('makeProject', postHooksProjectInsert);