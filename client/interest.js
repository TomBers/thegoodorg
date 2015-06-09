Template.interest.rendered = function(){
  Meteor.subscribe("findMyReqs", this.data.cid);
}


Template.interest.helpers({
  msgs:function(){
    return ContactReqs.find();
  }
});

Template.msg.helpers({
  project:function(){
    return Projects.findOne({_id:this.project});
  }
});

Template.msg.events({
  "click .btn-success": function(event, template){
    alert('Accept Connection from : ' + template.data.from);
    console.log(template.data.from);
  },
  "click .btn-danger": function(event, template){
    alert('Reject Connection from : ' + template.data.from);
  },
});
