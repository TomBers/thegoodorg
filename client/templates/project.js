

Template.project.rendered = function(){
	Session.set('showContactClicked',false);
}


Template.project.events({
	'click #contact_btn':function(e,template){
	//	console.log('click');
		Session.set('showContactClicked',true);
	},
	
	'click #send_btn':function(e,template){
		console.log('send');
		var var_projectID = Template.currentData()._id ;
	
	console.log(var_projectID);
	
		Collaborations.insert({
		projectId:var_projectID,
		corp_cid:'1', //TODO 
		status:'Request'
		});
	}
})

Template.project.helpers({


showContactForm: function(){

	var var_projectID = Template.currentData()._id ;
	
	console.log(var_projectID);
	
	x = Collaborations.find({
		projectId:var_projectID,
		corp_cid:'1' //TODO 
	}).count();

	return Session.get('showContactClicked') && x === 0;
},

getCorpId: function(){
	return '1'; //TODO return company id based on current user
}


});