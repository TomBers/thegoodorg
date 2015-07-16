

Template.updateProjectForm.helpers({
	beforeRemove: function () {
    return function (collection, id) {
   //   var doc = collection.findOne(id);
      if (confirm("So you want to delete this Project?")) {
        this.remove();
        Router.go('/editProfile');
      }
    };
  }
});


Template.addNewProject.events({

  'click #addNewPro':function(){

    Meteor.subscribe('Projects');
    var ProjID = Projects.insert({headline:"new project", company_id:this.company._id});
    Router.go('/editProject/' + ProjID);
  }
});
