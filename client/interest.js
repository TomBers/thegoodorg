Template.interest.rendered = function(){
  console.log(this);
  Meteor.subscribe("findMyReqs", this.data.cid);
}


Template.interest.helpers({
  msgs:function(){
    return ContactReqs.find();
  },
  project:function(){
    console.log(this);
    return Projects.findOne({_id:this.project});
  }
});

// Template.name.events({
//   "click #foo": function(event, template){
//
//   }
// });
