Meteor.methods({
  sendMeetingEmail: function(me,you){
    var tmp = Meteor.users.find({_id:you}).fetch();

    return  [me,tmp[0].emails[0].address];
  },
  rejectIntro: function(id){
    // Questions.update({_id:qn},{$set:{visible:show}});
    return Contract.Reqs.update({_id:id},{$set:{status:'declined'}});
  },
  getLatLngfromAddress:function(postcode){
    // return postcode;
	if(!postcode){
		return false;
	}
	
    var url = 'http://api.postcodes.io/postcodes/'+postcode;
    try{
      var res =  HTTP.call("GET", url);
      return {lat:res.data.result.latitude,lng:res.data.result.longitude};
    } catch(e){
		console.log("Error on postcode lookup for :" + postcode);
      console.log(e);
      return false;
    }
  }

});
