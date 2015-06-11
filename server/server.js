Meteor.methods({
  sendMeetingEmail: function(me,you){
    var tmp = Meteor.users.find({_id:you}).fetch();

    return  [me,tmp[0].emails[0].address];
  },
  rejectIntro: function(id){
    // Questions.update({_id:qn},{$set:{visible:show}});
    return Contract.Reqs.update({_id:id},{$set:{status:'declined'}});
  }

});
