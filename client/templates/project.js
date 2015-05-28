

Template.project.rendered = function(){
	Session.set('showContactClicked',false);
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
	return Companies.find(); //TODO return companies based on current user
}


});