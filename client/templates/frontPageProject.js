
Template.tmpfrontPageProject.helpers({
  'linkCompany': function() {
    return Companies.findOne({"cid":this.ownerId});
  }
});
