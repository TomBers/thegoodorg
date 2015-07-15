

Template.addNewProject.helpers({

});


Template.addNewProject.events({

  'click #addNewPro':function(){

    Meteor.subscribe('Projects');
    var ProjID = Projects.insert({headline:"new project", company_id:this.company._id});
    Router.go('/editProject/' + ProjID);
  }
});
