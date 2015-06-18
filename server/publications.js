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

Meteor.publish("Admin1", function () {
  return Admin1.find();
});
Meteor.publish("Admin2", function () {
  return Admin2.find();
});
Meteor.publish("Admin3", function () {
  return Admin3.find();
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
      },
      {
        find: function(reqs){
          return Companies.find({employees: {$in: [''+reqs.from] }});
        }
      }

    ]
  }
});
