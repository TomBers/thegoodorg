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
   template: 'home'
 });

  this.route('/addStartup', {
    path: '/addStartup',
    template: 'addStartup'
  });

  this.route('/list', {
    path: '/list',
    template: 'list',
    // waitOn: function() {  },
    data: function() {
      console.log(Startups.find().fetch());
    return {startups:Startups.find()};
  }
  });

});
