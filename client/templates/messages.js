

Template.messages.rendered = function(){

}


Template.messages.events({
	'click .stateChangeButton' :function(e,template){
		var id = e.currentTarget.getAttribute('collaborationId');
		var newState = e.currentTarget.getAttribute('newState');
		Collaborations.update(id, {$set :{status:newState}})
	},
})

Template.messages.helpers({

isRequestedState: function(collaboration){
	return collaboration.status === 'Requested';
}


});