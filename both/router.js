// router code - defines paths etc

Router.configure({
// layoutTemplate:'splash',
layoutTemplate: 'layout',
templateNameConverter: "upperCamelCase",
routeControllerNameConverter: "upperCamelCase"
// layoutTemplate: "layout"

// ,
// notFoundTemplate: "notFound",
// loadingTemplate: "loading"

});

// Router.onBeforeAction(function() {
// 	// loading indicator here
// 	if(!this.ready()) {
// 		$("body").addClass("wait");
// 	} else {
// 		$("body").removeClass("wait");
// 		this.next();
// 	}
// });

Router.map(function() {

  this.route('/', {
   path: '/',
   template: 'splash',
   waitOn:function(){
    return Meteor.subscribe("Categories");
  },
     data: function() {
     return {category:Categories.find()};
   }
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


// jd test

// this.route("home", {path: "/", controller: "HomeController"});
this.route("cool_page", {path: "/cool_page", controller: "CoolPageController"});
this.route("cool_page.sub_page_a", {path: "/cool_page/sub_page_a", controller: "CoolPageSubPageAController"});
this.route("cool_page.sub_page_b", {path: "/cool_page/sub_page_b", controller: "CoolPageSubPageBController"});
this.route("cool_page.sub_page_b.sub_page_b_1", {path: "/cool_page/sub_page_b/sub_page_b_1", controller: "CoolPageSubPageBSubPageB1Controller"});
this.route("cool_page.sub_page_b.sub_page_b_2", {path: "/cool_page/sub_page_b/sub_page_b_2", controller: "CoolPageSubPageBSubPageB2Controller"});

// <> jd test


  this.route('/search', {path: '/search',template: 'search'});
  
  this.route('/about', {path: '/about',template: 'about'});

  this.route('/map', {path: '/map',template: 'map'});
  this.route('/fll', {path: '/fll',template: 'fll'});

  this.route('/impact', {path: '/impact',template: 'impact'});

 
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
    // template: 'company',
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


	this.route('/editProfile',
    {path: '/editProfile', template: 'editProfile',
    waitOn:function(){
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
		//console.log(c);


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

    // this.route('/callbacks',
    //   {path: '/callbacks', template: 'displayCallbacks'
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

//   this.route('/messages', {path: '/messages',template: 'messages', data:
// 				function() {
// 				var my_cids = Companies.find().map(function(p) { return p.cid }); //TODO
//
//
// 					var from = Collaborations.find({corp_cid:{$in:my_cids}});
// 					var to = Collaborations.find({startup_cid:{$in:my_cids}});
//
//
// 					var fromData = [];
// 					var count = 0;
// 					from.forEach(function(row){
// 						var newRow = {
// 								collaboration:row,
// 								project:Projects.findOne({_id:row.projectId}),
// 								corp:Companies.findOne({cid:row.corp_cid}),
// 								startup:Companies.findOne({cid:row.startup_cid})
// 								};
// 						fromData[count] = newRow;
// 						count++;
// 					});
//
//
// 					var toData = [];
// 					count = 0;
// 					to.forEach(function(row){
// 						toData[count] = {
// 								collaboration:row,
// 								project:Projects.findOne({_id:row.projectId}),
// 								corp:Companies.findOne({cid:row.corp_cid}),
// 								startup:Companies.findOne({cid:row.startup_cid})
// 								};
// 						count++;
// 					});
//
// 					console.log(fromData);
// 					console.log(toData);
// 					return {from:fromData,to:toData}
//
//                 }
// 			});
//
