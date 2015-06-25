this.CoolPageSubPageBSubPageB2Controller = RouteController.extend({
	template: "CoolPage",
	

	yieldTemplates: {
		'CoolPageSubPageBSubPageB2': { to: 'CoolPageSubPageBSubcontent'},
		'CoolPageSubPageB': { to: 'CoolPageSubcontent'}
		
	},

	onBeforeAction: function() {
		/*BEFORE_FUNCTION*/
		this.next();
	},

	action: function() {
		if(this.isReady()) { this.render(); } else { this.render("CoolPage"); this.render("loading", { to: "CoolPageSubcontent" });}
		/*ACTION_FUNCTION*/
	},

	isReady: function() {
		

		var subs = [
		];
		var ready = true;
		_.each(subs, function(sub) {
			if(!sub.ready())
				ready = false;
		});
		return ready;
	},

	data: function() {
		

		return {
			params: this.params || {}
		};
		/*DATA_FUNCTION*/
	},

	onAfterAction: function() {
	}
});