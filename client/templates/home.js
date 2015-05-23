

Template.home.rendered = function(){
Meteor.subscribe('Startups');

Session.setDefault('opts',[]);


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
    if(Session.get('opts').length > 0){
      return Startups.find({categories:{$in:Session.get('opts')}});
    }else{
    return Startups.find();
  }
},
  subCategory: function(){
    if(Session.get('opts').length > 0){
      return Categories.find({cat:{$in:Session.get('opts')}});
    }else{
    return null;
  }
  }
});
