Template.interest.rendered = function(){
  Meteor.subscribe("findMyReqs", this.data._id);

}


Template.interest.helpers({
  msgs:function(){
    return ContactReqs.find();
  }
});

Template.msg.helpers({
  project:function(){
    return Projects.findOne({_id:this.project});
  },
  company:function(){
    return Companies.findOne({employees: {$in : [''+this.from]}});
  }
});

Template.msg.events({
  "click .btn-success": function(event, template){
    var me = Meteor.user().emails[0].address;
    console.log(template);

    Meteor.call('sendMeetingEmail',me,template.data.from, function(e,d){
      console.log(e);
      console.log(d);
      console.log("sent");
    });
  },
  "click .btn-danger": function(event, template){
    alert('Reject Connection from : ' + template.data.from);
    Meteor.call('rejectIntro',template.data._id, function(e,d){
      console.log("deleted");
    });
  },
});
