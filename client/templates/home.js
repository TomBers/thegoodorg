

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

    var scat = template.findAll( "input[type=checkbox]:checked.subcat");
    var scopts = [];
    scat.forEach(function(e){
      scopts.push(e.id);
    })
    Session.set('scopts',scopts);
  },
  'click .subcat' :function(e,template){
    var scat = template.findAll( "input[type=checkbox]:checked.subcat");
    var scopts = [];
    scat.forEach(function(e){
      scopts.push(e.id);
    })
    Session.set('scopts',scopts);
  }
});

Template.home.helpers({
  visibleCompanies: function(){
    if(Session.get('scopts').length > 0){
      return Startups.find({categories:{$in:Session.get('scopts')}});
    }else{
    return Startups.find();
  }
},
count :function(){
  if(Session.get('scopts').length > 0){
    return Startups.find({categories:{$in:Session.get('scopts')}}).fetch().length;
  }else{
  return Startups.find().fetch().length;
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
