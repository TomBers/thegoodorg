

Template.project.rendered = function(){
	Session.set('showContactClicked',false);
	Session.set('from_id','');
	Session.set('to_id','');
	Session.set('project_id','');
	Meteor.subscribe('UserProfiles');
	Meteor.subscribe('Companies');
}


Template.project.events({
	'click #contact_btn':function(e,template){
	//	console.log('click');
		Session.set('showContactClicked',true);
	},

	'click #collaboration_send_btn':function(e,template){
		console.log('send');
		var var_projectID = Template.currentData()._id ;
		var var_startup_cid = Template.currentData().ownerId ;
		var msg = template.$('#collaboration_message').val();
		var var_corp_cid = template.$('#collaboration_from').val();
		console.log(var_corp_cid);
	console.log(var_projectID);

		Collaborations.insert({
		projectId:var_projectID,
		corp_cid:var_corp_cid,
		startup_cid:var_startup_cid,
		corp_message:msg,
		corp_requestedAt:new Date(),
		status:'Requested'
		});
	}
})

Template.project.helpers({


	showContactForm: function(){

		var var_projectID = Template.currentData()._id ;

		var my_cids = Companies.find().map(function(p) { return p.cid }); //TODO

		x = Collaborations.find({
			projectId:var_projectID,
			corp_cid: {$in:my_cids}
		}).count();

		return Session.get('showContactClicked') && x === 0;
	},

	showMessagesLink: function(){

		var var_projectID = Template.currentData()._id ;


		var my_cids = Companies.find().map(function(p) { return p.cid }); //TODO

		x = Collaborations.find({
			projectId:var_projectID,
			corp_cid: {$in:my_cids}
		}).count();

		return Session.get('showContactClicked') && x !== 0;
	},

	myCompanies: function(){
		var user = Meteor.user();
		var mail = UserProfiles.findOne({loginID:user.emails[0].address});
		return Companies.find({rep_email:mail.contact_mail}); //TODO -done- return companies based on current user
	},

	linkCompany: function() {
		var user = Meteor.user();
    return Companies.findOne({"cid":this.ownerId});
	},

	isOwned: function(){
		var user = Meteor.user();
		var mail = UserProfiles.findOne({loginID:user.emails[0].address});
		var cmpy = Companies.find({cid:this.ownerId});
		if (cmpy.rep_email == mail.contact_mail)
		{return true;}
		else
		{return false;}
	}
	,
	isRegistered: function(){
		var user = Meteor.user();
		Session.set('from_id', user.emails[0].address);
		Session.set('to_id', Companies.findOne({"cid":this.ownerId}).rep_email);
		Session.set('project_id', this._id);
		try{
			return UserProfiles.findOne({loginID:user.emails[0].address});
		}catch(e){
			return null;
		}

	}

});


var postHooks = {
  before: {
    insert: function(doc) {

      doc.from_id = Session.get('from_id');
      doc.to_id = Session.get('to_id');
      doc.projectId = Session.get('project_id');
      doc.status = 'Requested';
      //console.log(doc);
      return doc;
    }
  },
  onSuccess: function(operation, result, template) {
    // alert('Thank you for your inquiry! We will get back to you shortly.');
  }
}


AutoForm.addHooks('makeContactReq', postHooks);
