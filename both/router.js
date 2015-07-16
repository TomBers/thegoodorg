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
    {path: '/editProfile', template: 'editProfile',
    waitOn:function(){
	    Meteor.subscribe("Projects");
	    Meteor.subscribe("Companies");
      return Meteor.subscribe("UserProfiles");
    },
    data: function() {

		var userEmail = ''+Meteor.user().emails[0].address;
		var user = UserProfiles.findOne({loginEmail:userEmail});
		if(!user){
			UserProfiles.insert({loginEmail:userEmail});
			user = UserProfiles.findOne({loginEmail:userEmail});
		}

		var c = Companies.find({employees: {$in : [userEmail]}});

		// format data to work with template:

		var cData = [];
		var count = 0;

		c.forEach(function(row){
			var newRow = {
						company:row,
						project_count:Projects.find({company_id:row._id}).count()
						};
 			cData[count] = newRow;
			count++;
		});
		//console.log(cData);
        return {user:user,companies:cData};
      }
    });

  // this.route('/editProfile', {path: '/editProfile',template: 'editProfile'});

	// this.route('/editProfile',
  //   {path: '/editProfile', template: 'editProfile',
  //   waitOn:function(){
	// // Meteor.subscribe("Projects");
	// // Meteor.subscribe("Companies");
  //     // var me = Meteor.user()
  //     // return Meteor.subscribe("UserProfiles",Meteor.Meteor.userId());
  //   return Meteor.user();
  //   },
  //   data: function() {
  //     var user;
  //     user = Meteor.user();
		// var userEmail = user.emails[0].address;
		// var user = UserProfiles.findOne({loginEmail:userEmail});
		// if(!user){
			// UserProfiles.insert({loginEmail:userEmail});
			// user = UserProfiles.findOne({loginEmail:userEmail});
		// }

		// var c = Companies.find({employees: {$in : [userEmail]}});
    //
		// // format data to work with template:
    //
		// var cData = [];
		// var count = 0;

		// c.forEach(function(row){
		// 	var newRow = {
		// 				company:row,
		// 				project_count:Projects.find({company_id:row._id}).count()
		// 				};
 	// 		cData[count] = newRow;
		// 	count++;
		// });
	// 	//console.log(cData);
  //       return {user:user};
  //     },
  //
  //     action : function () {
  //   if (this.ready()) {
  //     this.render();
  //   }
  // }
  //   });


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
