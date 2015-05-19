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
     return {category:Categories.find().fetch()};
   }
 });

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

  this.route('/startup', {
    path: '/startup/:_id',
    template: 'startup',
    // waitOn: function() {  },
    data: function() {
      console.log(Startups.find({_id:this.params._id}).fetch());
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


  this.route('/leaderboard', {
    path: '/leaderboard',
    template: 'leaderboard',
    data: function() {
    return {collaborations:Collaborations.find()};
  }

  });

});
