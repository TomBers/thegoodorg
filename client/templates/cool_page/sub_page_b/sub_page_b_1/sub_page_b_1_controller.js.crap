this.CoolPageSubPageBSubPageB1Controller = RouteController.extend({
	template: "CoolPage",

	yieldTemplates: {
		'CoolPageSubPageBSubPageB1': { to: 'CoolPageSubPageBSubcontent'},
		'CoolPageSubPageB': { to: 'CoolPageSubcontent'}
	},

	onBeforeAction: function() {
		this.next();
	},

	action: function() {
		if(this.isReady()) { this.render(); } else { this.render("CoolPage"); this.render("loading", { to: "CoolPageSubcontent" });}
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
	},

	onAfterAction: function() {
	}
});
