Meteor.startup(function() {
	// read environment variables from Meteor.settings
	if(Meteor.settings && Meteor.settings.env && _.isObject(Meteor.settings.env)) {
		for(var variableName in Meteor.settings.env) {
			process.env[variableName] = Meteor.settings.env[variableName];
		}
	}

	Accounts.onCreateUser(function(options, user) {
	  var userEmail = ''+user.emails[0].address;
			var userP = UserProfiles.findOne({loginEmail:userEmail});
			if(!userP){
			console.log('11- creating userProfile :' + userEmail);
				UserProfiles.insert({loginEmail:userEmail});
				userP = UserProfiles.findOne({loginEmail:userEmail});
			}else{
				console.log('11-found userProfile :' + userEmail);
			}
	  // We still want the default hook's 'profile' behavior.
	  if (options.profile)
		user.profile = options.profile;
	  return user;
	});
	
	
});

Meteor.methods({
  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  }
});