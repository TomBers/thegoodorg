Template.updateCompanyForm.rendered = function(){

	var x = $('.employees input');
	//console.log(x);
	
	var me = Meteor.user().emails[0].address;
	
	for (var i =0 ; i <x.length; i ++){
		if(x[i].value == me){
		//	console.log(x[i].id);
			var d = $('#'+x[i].id).parent().parent().parent();
//			d.find('button').attr('disabled','true');
//			d.find('input').attr('disabled','true');
// this results in the user being removed from the doc on save!!!!
		
			d.css('display','none');
		//	d.parent().append($("<p></p>").text(me));
			var html = '<div><div class="autoform-remove-item-wrap"><button type="button" class="btn btn-primary autoform-remove-item" disabled=true><span class="glyphicon glyphicon-minus"></span></button></div><div class="autoform-array-item-body"><div class="form-group"><input id="me_holder" type="text" class="form-control" disabled=true><span class="help-block"></span></div></div></div>'
			d.parent().append(html);
			$('#me_holder').attr('value',me);
		}
	}
	
	
//	console.log(x[0].value);

}