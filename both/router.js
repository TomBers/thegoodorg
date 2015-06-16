// router code - defines paths etc

Router.configure({
layoutTemplate: 'layout',
});

Router.map(function() {

  this.route('/', {
   path: '/',
   template: 'home',
  //  template: 'nhome',
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
  // this.route('/nhome', {
  //  path: '/nhome',
  //  template: 'nhome',
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

  this.route('/admin', {path: '/admin',template: 'admin'});

  this.route('/impact', {path: '/impact',template: 'impact'});

  this.route('/addStartup', {
    path: '/addStartup',
    template: 'addStartup',
  });

  this.route('/addCorporate', {path: '/addCorporate',template: 'addCorporate'});

  this.route('/addCompany', {path: '/addCompany',template: 'addCompany'});

  this.route('/addFeedback', {path: '/addFeedback',template: 'addFeedback'});


  this.route('/addReq1', {path: '/addReq1',template: 'addReq1', data: function() {
                return {req_types:Req_Types.find()};}
                });

  this.route('/addReq2', {path: '/addReq2',template: 'addReq2', data: function() {
                return {req_amounts:Req_Amounts.find()};}
                });

  this.route('/addReq3', {path: '/addReq3',template: 'addReq3', data: function() {
                return {req_timeframes:Req_TimeFrames.find()};}
                });

  this.route('/addCat', {path: '/addCat',template: 'addCat', data: function() {
                return {categories:Categories.find()};}
                });

  this.route('/addSubCat', {path: '/addSubCat',template: 'addSubCat', data: function() {
                return {subcategories:SubCategories.find()};}
                });

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

  this.route('/nproject', {
    path: '/nproject/:_id',
    template: 'nproject',
    waitOn:function(){
     return Meteor.subscribe("Projects");
   },
    data: function() {
    return Projects.findOne({_id:this.params._id});
  }
  });


  this.route('/company', {
    path: '/company/:_id',
    // template: 'company',
    template: 'companyFoundry',
    waitOn:function(){
    Meteor.subscribe("Companies");
     return Meteor.subscribe("Projects");
   },
    data: function() {
    return {company:Companies.findOne({cid:this.params._id}),projects:Projects.find({ownerId:this.params._id})};
  }
  });





  this.route('/startup', {
    path: '/startup/:_id',
    template: 'startup',
    data: function() {
    return Startups.findOne({_id:this.params._id});
  }
  });



  this.route('/edit', {
    path: '/edit/:_id',
    template: 'edit',
    data: function() {
      console.log( Startups.findOne({_id:this.params._id}));
    return Startups.findOne({_id:this.params._id});
  }
  });

  // this.route('/list', {
  //   path: '/list',
  //   template: 'list',
  //   data: function() {
  //   return {startups:Startups.find()};
  // }
  // });
  //
  // this.route('/list2', {path: '/list2', template: 'list2',
  //   data: function() {
  //       return {corporates:Corporates.find()};
  //     }
  //   });

  this.route('/listCompanies',
    {path: '/listCompanies', template: 'listCompanies',
    waitOn:function(){
      return Meteor.subscribe("Companies");
    },
    data: function() {
        return {companies:Companies.find()};
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
