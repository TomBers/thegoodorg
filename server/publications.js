Meteor.publish("Companies", function () {
  return Companies.find();
});

Meteor.publish("Projects", function () {
  return Projects.find();
});

Meteor.publish("Categories", function () {
  return Categories.find();
});

Meteor.publish("UserProfiles", function () {
  return UserProfiles.find();
});



Meteor.publishComposite('findMyReqs', function (comp){
  return{
    find: function(){
      return ContactReqs.find({to:comp});
    },
    children:[
      {
        find: function(reqs){
          return Projects.find({_id:reqs.project},{limit:1});
        }
      }
    ]
  }
});



// Meteor.publish("findMyReqs", function (me) {
//   var company = Companies.findOne({employees: {$in : [''+me]}});
//   var reqs = ContactReqs.find({to:company.cid});
//   var tpid = reqs.project;
//   var project = Projects.findOne({_id:tpid});
//
//   return ContactReqs.find({to:company.cid});
// });
