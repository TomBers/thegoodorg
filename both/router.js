// router code - defines paths etc

Router.configure({
// layoutTemplate:'splash',
layoutTemplate: 'layout',
templateNameConverter: "upperCamelCase",
routeControllerNameConverter: "upperCamelCase"

});

Router.map(function() {

  this.route('/', {
   path: '/',
   template: 'splash'
 });

 this.route('/home', {
  path: '/home',
  template: 'home',
  waitOn:function(){
   return Meteor.subscribe("Categories");
 },
    data: function() {
    return {category:Categories.find()};
  }
});

  this.route('/search', {path: '/search',template: 'search'});

  this.route('/about', {path: '/about',template: 'about'});

  this.route('/map', {path: '/map',template: 'map'});

  this.route('/fll', {path: '/fll',template: 'fll'});

  this.route('/impact', {path: '/impact',template: 'impact'});

  this.route('/test', {path: '/test',template: 'test'});
  
  this.route('/faq', {path: '/faq',template: 'faq'});
  this.route('/faqadmin', {path: '/faqadmin',template: 'faqadmin'});
  this.route('/adminview', {path: '/adminview',template: 'adminview'});

  this.route('/project', {
    path: '/project/:_id',
    template: 'project',
    waitOn:function(){
     return Meteor.subscribe("Projects");
   },
    data: function() {
    return Projects.findOne({_id:this.params._id});
  }
  });

	this.route('/company2', {
    path: '/company2/:_id',
    template: 'company2',
    waitOn:function(){
    Meteor.subscribe("Companies");
     return Meteor.subscribe("Projects");
   },
    data: function() {
    return {company:Companies.findOne({_id:this.params._id}),projects:Projects.find({company_id:this.params._id})};
  }
  });


  this.route('/editCompany', {
    path: '/editCompany/:_id',
    template: 'editCompany',
    waitOn:function(){
	Meteor.subscribe("Categories");
    Meteor.subscribe("Companies");
     return Meteor.subscribe("Projects");
   },
    data: function() {
    return {company:Companies.findOne({_id:this.params._id}),projects:Projects.find({company_id:this.params._id})};
  }
  });


  // this.route('/editProject', {path: '/editProject/:_id',template: 'editProject2'});

  this.route('/editProject', {
    path: '/editProject/:_id',
    template: 'editProject2',
    waitOn:function(){
     return Meteor.subscribe("Projects");
   },
    data: function() {
    return Projects.findOne({_id:this.params._id});
  }
  });

  this.route('/editProfile',
    {path: '/editProfile/:_id?', template: 'editProfile',
    waitOn:function(){
	    Meteor.subscribe("Projects");
	    Meteor.subscribe("Companies");
      return Meteor.subscribe("UserProfiles");
    },
    data: function() {

		var user;
		if(Meteor.user()){
			if(this.params._id){
				
				try{
					Meteor.subscribe('UserProfiles');
					var admin = Meteor.user();
					var adminmail = admin.emails[0].address;
					var adminprofile = UserProfiles.findOne({"loginEmail":adminmail});
					if(adminprofile.is_admin){
						user = UserProfiles.findOne({_id:this.params._id});
					}
				} catch(e){
				}

			}else{
				var userEmail = ''+Meteor.user().emails[0].address;
				user = UserProfiles.findOne({loginEmail:userEmail});
			}
		}
		
        return {user:user};
      }
    });

      this.route('/interest', {
        path: '/interest/',
        template: 'interest',
        waitOn:function(){
          return Meteor.subscribe("Companies");
        },
        data: function() {
          if(Meteor.user()){
        return Companies.findOne({employees: {$in : [''+Meteor.user()._id]}});
      }else{
        return null;
      }

      }
      });
    });
