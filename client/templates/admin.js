
Template.admin.rendered = function(){
  Meteor.subscribe('Companies');
}
// Template.cause.events({
//   'click .cause' :function(e,template){
//     Session.set('cause',[template.data.cat]);
//
//   },
// })

// Template.subcause.events({
//   'click .subcause' :function(e,template){
//     Session.set('subcause',[template.data]);
//   },
// })

// Template.interaction.events({
//   'click .interaction' :function(e,template){
//
//     var tmp = Session.get('interaction');
//
//     if(template.$( ".interaction.checked" ).length > 0){
//       template.$( ".interaction.checked" ).removeClass( "checked" );
//       Session.set('interaction',_.without(tmp,template.data));
//     }else{
//       tmp.push(template.data);
//       Session.set('interaction',tmp);
//       e.currentTarget.className = 'interaction checked';
//     }
//
//   },
// })



Template.admin.helpers({
  myCompanies: function(){
      // varUserID = Meteor.user().emails[0].address
      // return Companies.find({rep_email:varUserID})
    }
  });
