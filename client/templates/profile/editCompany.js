function mapUpdate(){
console.log("exe");
var loc = $('.editCompany input[name="loc"]').val();
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

Template.editCompany.events = {

  'keyup .editCompany input[name="loc"]': _.throttle(function(e, template) {
    console.log("call");
	//setTimeout(function(){},2000);
		mapUpdate();
  }, 3000, {leading: false, trailing: true})
}

Template.editCompany.helpers({

  canEditCompany: function(){
      var user = Meteor.user();
      var mail = user.emails[0].address;
        if (this.company.employees.indexOf(mail)>-1){
			return true;
		}else{
			var profile = UserProfiles.findOne({"loginEmail":mail});
			return profile.is_admin;
		}
      },

  linkRepresentative: function() {
        return UserProfiles.findOne({"loginEmail":this.employees[0]});
      },
	  
});