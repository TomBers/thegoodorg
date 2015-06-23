Template.companyEdit2.rendered = function(){
//  Meteor.subscribe('Projects');
//  Meteor.subscribe('UserProfiles');
//  Meteor.subscribe("Companies");
	Session.set("editingProject",null);

	$('document').ready(function(){
	
	  
		//apply opacity to this div
		$("div .canDarkOut").mouseover(function(e){
			$(e.currentTarget).addClass("darkOut");
		});
		
		// aggressively remove opacity on mouse out on ALL divs
		$("div .canDarkOut").mouseout(function(){
			$("div .canDarkOut").removeClass("darkOut");
		});
		
		$("div .editProject").click(function(e){
			var id = e.currentTarget.getAttribute('projectID');
			console.log(id);
			Session.set("editingProject",id);	
			
		});

/*		
		$("div .editBackground").click(function(e){
			console.log("editBackground click");
		});
*/		
		
		
		 $('[data-toggle="tooltip"]').tooltip(); 
	});
};


Template.companyEdit2.helpers({

	editingProject: function(){
	console.log("eeee");
		return Session.get("editingProject");
	},
	
	getProjectDoc:function(){
		console.log("zzzz");
		return "1";
	},

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