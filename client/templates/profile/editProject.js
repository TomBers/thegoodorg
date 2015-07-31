Template.editProject2.rendered = function(){
	Meteor.subscribe('UserProfiles');
	Meteor.subscribe('Companies');
	Meteor.subscribe('Projects');
}

Template.editProject2.helpers({

	  canEditProject: function(){
      var user = Meteor.user();
      var mail = user.emails[0].address;
	  var company = Companies.findOne({"_id":this.company_id});
        if (company && company.employees.indexOf(mail)>-1){
			return true;
		}else{
			var profile = UserProfiles.findOne({"loginEmail":mail});
			return profile.is_admin;
		}
      },

    linkRepresentative: function() {
        return UserProfiles.findOne({"loginEmail":this.employees[0]});
      }
});


function mapUpdate(){
console.log("exe");
var loc = $('input[name="postcode"]').val();
console.log(loc);
	Meteor.call("getLatLngfromAddress", loc, function(error, result){
			   if(error){
			    console.log("error");
				Session.set('LatLng', false);
				console.log(error);
			   }

			   Session.set('LatLng', result);
		});
}

Template.editProject2.events = {

  'keyup input[name="postcode"]': _.throttle(function(e, template) {
    console.log("call");
	//setTimeout(function(){},2000);
		mapUpdate();
  }, 3000, {leading: false, trailing: true})
}