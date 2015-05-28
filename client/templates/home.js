Session.set('cause',[]);
Session.set('subcause',[]);
Session.set('interaction',[]);
var interactions = ['Donate Materials','Monetary Donations','Volunteering','Research Agreements','Product collaboration','Brand Collaboration','Lecturing Opportunites'];
Template.home.rendered = function(){
  Meteor.subscribe('Projects');
}
Template.cause.events({
  'click .cause' :function(e,template){
    Session.set('cause',[template.data.cat]);

  },
})

Template.subcause.events({
  'click .subcause' :function(e,template){
    Session.set('subcause',[template.data]);
  },
})

Template.interaction.events({
  'click .interaction' :function(e,template){

    var tmp = Session.get('interaction');

    if(template.$( ".interaction.checked" ).length > 0){
      template.$( ".interaction.checked" ).removeClass( "checked" );
      Session.set('interaction',_.without(tmp,template.data));
    }else{
      tmp.push(template.data);
      Session.set('interaction',tmp);
      e.currentTarget.className = 'interaction checked';
    }

  },
})



Template.home.helpers({
  selCause: function(){return Session.get('cause');},
  selSubcat: function(){return Session.get('subcause');},
  selInteraction: function(){return Session.get('interaction');},
  visibleProjects: function(){
    if(Session.get('subcause').length > 0 && Session.get('interaction').length > 0){
      return Projects.find({categories:{$in:Session.get('subcause')},interactions:{$in:Session.get('interaction')}})
    }else{
      return null;
    }
  },
  showSubCause : function(){
    return (Session.get('cause').length == 0) ? false : true;
  },
  subcat: function(){
    try{
      return (Session.get('cause').length == 0) ? null : Categories.find({cat:{$in:Session.get('cause')}});
    }catch(e){
      return null;
    }
  },
  showInteractions : function(){
    return (Session.get('subcause').length == 0) ? false : true;
  },
  interactions: function(){
    return interactions;
},
// visibleProjectRollups: function(){
//   if(Session.get('subcause') != '' && Session.get('interaction') != ''){
//     return Companies.find({cid:
//       Projects.find({
//         categories:{$in:Session.get('subcause')},
//         interactions:{$in:Session.get('interaction')}
//         }).ownerId
//         })
//   }else{
//     return null;
//   }
// },
showSubCause : function(){
  return (Session.get('cause') == '') ? false : true;
},
subcat: function(){
  try{
  return Categories.findOne({cat:{$in:Session.get('cause')}}).subcat;
}catch(e){
  return null;
}
},
showInteractions : function(){
  return (Session.get('subcause') == '') ? false : true;
},
interactions: function(){
  return interactions;
}

});
