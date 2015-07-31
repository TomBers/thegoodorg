Template.adminview.userTable = function () {
	Meteor.subscribe('UserProfiles');
    return UserProfiles;
}

Template.adminview.userTableSettings = function () {
    return {
        rowsPerPage: 25,
        showFilter: true,
		showColumnToggles: true,
		enableRegex: true,
        showNavigation: 'auto',
        fields: [
		 { key: '_id', label: 'Edit', fn: function (value, object) {
				return new Spacebars.SafeString('<a class="glyphicon glyphicon-edit" href="/editProfile/'+value+'" data-toggle="tooltip" title="Click to edit">');
		 } },
            { key: 'loginEmail', label: 'Login mail' },
            { key: 'name', label: 'Full Name' },
			{ key: 'user_employer', label: 'Employer' },
            { key: 'user_photo', label: 'Photo', fn: 
									function (value, object) { 
											if(value) {
												return new Spacebars.SafeString('<img src="'+value+'" class="img-circle" width="50" height="50">'); 
											}else{
												return '';
											}
									}
			},
			{ key: 'is_admin', label: 'admin?' },
            { key: 'registerAs', label: 'registerAs' },
			{ key: 'contact_bool', label: 'contact_bool' },
            { key: 'contact_num', label: 'contact_num' },
            { key: 'mailout_monthly', label: 'mailout_monthly' },
            { key: 'mailout_updates', label: 'mailout_updates' }
        ],
        useFontAwesome: true,
        group: 'client'
    };
}
