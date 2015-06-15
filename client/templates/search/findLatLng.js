

Template.fll.events({
  "click #fll": function(event, template){
    console.log('Called');
     Meteor.call("getLatLngfromAddress", 'SW19 4LB', function(error, result){
       if(error){
         console.log("error", error);
       }
       if(result){
         console.log(result);
       }
     });
  }
});
