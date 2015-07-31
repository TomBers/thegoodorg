Template.faq.helpers({

	faqlist: function(){
		Meteor.subscribe('Faq');
		var faq = Faq.find().fetch();
		return faq;
		}
});
	
Template.faq.events({
	"hide.bs.collapse": function(event, template){
		var faq_id = $(event.target).attr('faq_id');
		$('#faq_title_icon_'+faq_id).removeClass('glyphicon-collapse-up').addClass('glyphicon-collapse-down');
  },
  "show.bs.collapse": function(event, template){
		var faq_id = $(event.target).attr('faq_id');
		$('#faq_title_icon_'+faq_id).removeClass('glyphicon-collapse-down').addClass('glyphicon-collapse-up');
  }
  
});