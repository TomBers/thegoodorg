
Template.company2.rendered = function(){
  Meteor.subscribe('UserProfiles');
  var user = Meteor.user();

  Session.set('from_id','');
  Session.set('to_id','');
  Session.set('project_id','');
}

Template.company2.helpers({

  isOwned: function(){
      var user = Meteor.user();
      var mail = UserProfiles.findOne({loginID:user.emails[0].address});

        if (this.employees[0] == mail.loginEmail)
        {return true;}
        else
        {return false;}
      },

  linkRepresentative: function() {
  console.log("rrrrrr");
   console.log(this.company.employees[0])
        return UserProfiles.findOne({"loginEmail":this.company.employees[0]});
      }
});

Template.companyHeader.rendered = function(){
  Meteor.subscribe('UserProfiles');}

Template.companyHeader.helpers({

  linkRepresentative: function() {
        return UserProfiles.findOne({"loginEmail":this.company.employees[0]});
      }
});

Template.companyAbout.helpers({

  linkRepresentative: function(e) {
    Meteor.subscribe('UserProfiles');
        return UserProfiles.findOne({"loginEmail":e});
      }
});

Template.companyContact.rendered = function(){}

Template.companyContact.helpers({

  linkRepresentative: function(e) {
    Meteor.subscribe('UserProfiles');
        return UserProfiles.findOne({"loginEmail":e});
      }
});

Template.companyVideo.rendered = function(){
  // var video = Popcorn.youtube('#youtube-video', 'http://www.youtube.com/embed/lSAKFkxq4jA');

  var video = Popcorn.youtube('#youtube-video', this.data.company.youtubeLink);
  ;}

  
Template.companyLocation.rendered = function(){
	Session.set('LatLng', false);
	Meteor.call("getLatLngfromAddress", this.data.company.loc, function(error, result){
				   if(error){
					console.log("error");
					Session.set('LatLng', false);
					console.log(error);
				   }

				   Session.set('LatLng', result);
			});
}
  
Template.companyLocation.helpers({

	lonLat: function(e) {
		return Session.get('LatLng')
	},
	
});