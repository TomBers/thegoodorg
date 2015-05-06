Session.setDefault('opts',[]);

Template.home.rendered = function(){
Meteor.subscribe('Startups');
}

Template.home.events({
  'click .opt' :function(e,template){
    var selected = template.findAll( "input[type=checkbox]:checked");
    var opts = [];
    selected.forEach(function(e){
      opts.push(e.id);
    })
    Session.set('opts',opts);


  }
});

Template.home.helpers({
  visibleCompanies: function(){
    return Startups.find({categories:{$in:Session.get('opts')}});
  }
});
