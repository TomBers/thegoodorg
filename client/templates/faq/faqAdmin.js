Template.faqadmin.helpers({

	faqlist: function(){
		Meteor.subscribe('Faq');
		var faq = Faq.find().fetch();
		return faq;
		}
	});