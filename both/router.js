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

  this.route('/addStartup', {
    path: '/addStartup',
    template: 'addStartup',
  //   data: function() {
  //   return {category:Categories.find()};
  // }
  });

this.route('/addCorporate', {
    path: '/addCorporate',
    template: 'addCorporate'
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

  this.route('/list2', {
    path: '/list2',
    template: 'list2',
    // waitOn: function() {  },
    data: function() {
      // console.log(Corporates.find().fetch());
    return {corporates:Corporates.find()};
  }

  });

});
