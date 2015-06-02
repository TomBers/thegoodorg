Router.configure({
layoutTemplate: 'layout',
// waitOn: function() {  },
// data: function() {
//   return {debates : Debates.find().fetch()}
// }
});

Router.map(function() {

  this.route('/', {
   path: '/',
   template: 'home',
     data: function() {
     return {category:Categories.find()};
   }
 });

  this.route('/about', {path: '/about',template: 'about'});

  this.route('/admin', {path: '/admin',template: 'admin'});

  this.route('/impact', {path: '/impact',template: 'impact'});

  this.route('/addStartup', {
    path: '/addStartup',
    template: 'addStartup',
  //   data: function() {
  //   return {category:Categories.find()};
  // }
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
    // waitOn: function() {  },
    data: function() {
      // console.log(Startups.find({_id:this.params._id}).fetch());
    return Projects.findOne({_id:this.params._id});
  }
  });

  this.route('/company', {
    path: '/company/:_id',
    template: 'company',
    // waitOn: function() { return Meteor.subscribe('Companies'); },
    data: function() {
      // console.log(Startups.find({_id:this.params._id}).fetch());
    return {company:Companies.findOne({cid:this.params._id}),projects:Projects.find({ownerId:this.params._id})};
  }
  });

  this.route('/startup', {
    path: '/startup/:_id',
    template: 'startup',
    // waitOn: function() {  },
    data: function() {
      // console.log(Startups.find({_id:this.params._id}).fetch());
    return Startups.findOne({_id:this.params._id});
  }
  });



  this.route('/edit', {
    path: '/edit/:_id',
    template: 'edit',
    // waitOn: function() {  },
    data: function() {
      console.log( Startups.findOne({_id:this.params._id}));
    return Startups.findOne({_id:this.params._id});
  }
  });

  this.route('/list', {
    path: '/list',
    template: 'list',
    // waitOn: function() {  },
    data: function() {
      // console.log(Startups.find().fetch());
    return {startups:Startups.find()};
  }
  });

  this.route('/list2', {path: '/list2', template: 'list2',
    data: function() {
        return {corporates:Corporates.find()};
      }
    });

  this.route('/listCompanies',
    {path: '/listCompanies', template: 'listCompanies',
    data: function() {
        return {companies:Companies.find()};
      }
    });


    this.route('/callbacks',
      {path: '/callbacks', template: 'displayCallbacks'
      // ,
      // data: function() {
      //     return {companies:Companies.find()};
      //   }
      });



  this.route('/messages', {path: '/messages',template: 'messages', data:
				function() {
				var my_cids = Companies.find().map(function(p) { return p.cid }); //TODO



					 //     varUserID = Meteor.user().emails[0].address
					//	 Companies.find({rep_email:varUserID})
				//	var msg = Collaborations.find({$or: [{corp_cid:{$in:companyIds}} , {startup_cid:{$in:companyIds}}] });
                  //  return {messages:msg}

					var from = Collaborations.find({corp_cid:{$in:my_cids}});
					var to = Collaborations.find({startup_cid:{$in:my_cids}});


					var fromData = [];
					var count = 0;
					from.forEach(function(row){
						var newRow = {
								collaboration:row,
								project:Projects.findOne({_id:row.projectId}),
								corp:Companies.findOne({cid:row.corp_cid}),
								startup:Companies.findOne({cid:row.startup_cid})
								};
						fromData[count] = newRow;
						count++;
					});


					var toData = [];
					count = 0;
					to.forEach(function(row){
						toData[count] = {
								collaboration:row,
								project:Projects.findOne({_id:row.projectId}),
								corp:Companies.findOne({cid:row.corp_cid}),
								startup:Companies.findOne({cid:row.startup_cid})
								};
						count++;
					});

					console.log(fromData);
					console.log(toData);
					return {from:fromData,to:toData}

                }
			});

});
