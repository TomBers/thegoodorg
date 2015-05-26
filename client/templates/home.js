Session.set('cause','');
Session.set('subcause','');
Session.set('interaction','');
var interactions = ['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites'];
Template.home.rendered = function(){
Meteor.subscribe('Projects');

Session.setDefault('opts',[]);


}

Template.home.events({
  'click .cause' :function(e,template){
    template.$( ".cause.checked" ).removeClass( "checked" );
    Session.set('cause',e.currentTarget.innerText);
    e.currentTarget.className = 'cause checked';
  },
  'click .subcause' :function(e,template){
    template.$( ".subcause.checked" ).removeClass( "checked" );
    Session.set('subcause',[e.currentTarget.innerText]);
    e.currentTarget.className = 'subcause checked';
  },
  'click .interaction' :function(e,template){
    template.$( ".interaction.checked" ).removeClass( "checked" );
    Session.set('interaction',[e.currentTarget.innerText]);
    e.currentTarget.className = 'interaction checked';
  },
  'click .display' :function(e,template){
    template.$( ".display.checked" ).removeClass( "checked" );
    Session.set('display',e.currentTarget.innerText);
    e.currentTarget.className = 'display checked';
  }
});

Template.home.helpers({
  visibleProjects: function(){
    if(Session.get('subcause') != '' && Session.get('interaction') != ''){
      return Projects.find({categories:{$in:Session.get('subcause')},interactions:{$in:Session.get('interaction')}})
    }else{
      return null;
    }
},
visibleProjectRollups: function(){
  if(Session.get('subcause') != '' && Session.get('interaction') != ''){
    return Companies.find({cid:
      Projects.find({
        categories:{$in:Session.get('subcause')},
        interactions:{$in:Session.get('interaction')}
        }).ownerId
        })
  }else{
    return null;
  }
},
showSubCause : function(){
  return (Session.get('cause') == '') ? false : true;
},
subcat: function(){
  return Categories.findOne({cat:Session.get('cause')}).subcat;
},
showInteractions : function(){
  return (Session.get('subcause') == '') ? false : true;
},
interaction: function(){
  return interactions;
}

});
