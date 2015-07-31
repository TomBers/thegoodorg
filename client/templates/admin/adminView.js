Template.adminview.usersTable = function () {
	Meteor.subscribe('UserProfiles');
    return UserProfiles;
}

Template.adminview.companiesTable = function () {
	Meteor.subscribe('Companies');
    return Companies;
}

Template.adminview.projectsTable = function () {
	Meteor.subscribe('Projects');
    return Projects;
}



Template.adminview.usersTableSettings = function () {
    return {
        rowsPerPage: 25,
        showFilter: true,
		showColumnToggles: true,
		enableRegex: true,
        showNavigation: 'auto',
        fields: [
		 { key: '_id', label: 'Edit', sortable: false, fn: function (value, object) {
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




Template.adminview.companiesTableSettings = function () {
    return {
        rowsPerPage: 25,
        showFilter: true,
		showColumnToggles: true,
		enableRegex: true,
        showNavigation: 'auto',
        fields: [
		 { key: '_id', label: 'Edit', sortable: false, fn: function (value, object) {
				return new Spacebars.SafeString('<a class="glyphicon glyphicon-edit" href="/editCompany/'+value+'" data-toggle="tooltip" title="Click to edit">');
			} 
		 },
            { key: 'name', label: 'name' },
			{ key: 'hline', label: 'Headline' },
            { key: 'logo', label: 'logo', fn: 
									function (value, object) { 
											if(value) {
												return new Spacebars.SafeString('<img src="'+value+'" class="img-circle" width="50" height="50">'); 
											}else{
												return '';
											}
									}
			},
			{ key: 'employees', label: 'employees' },
            { key: 'industry', label: 'industry' },
			{ key: 'addr', label: 'Address' },
            { key: 'loc', label: 'Postcode' },
            { key: 'img', label: 'img', fn: 
									function (value, object) { 
											if(value) {
												return new Spacebars.SafeString('<img src="'+value+'" class="img-circle" width="50" height="50">'); 
											}else{
												return '';
											}
									} 
			}
        ],
        useFontAwesome: true,
        group: 'client'
    };
}




Template.adminview.projectsTableSettings = function () {
    return {
        rowsPerPage: 25,
        showFilter: true,
		showColumnToggles: true,
		enableRegex: true,
        showNavigation: 'auto',
        fields: [
		 { key: '_id', label: 'Edit', sortable: false, fn: function (value, object) {
				return new Spacebars.SafeString('<a class="glyphicon glyphicon-edit" href="/editProject/'+value+'" data-toggle="tooltip" title="Click to edit">');
		 } },
            { key: 'hline', label: 'headline' },
            { key: 'img', label: 'Image', fn: 
									function (value, object) { 
											if(value) {
												return new Spacebars.SafeString('<img src="'+value+'" class="img-circle" width="50" height="50">'); 
											}else{
												return '';
											}
									}
			},
			{ key: 'city', label: 'city' },
            { key: 'country', label: 'country' },
			{ key: 'postcode', label: 'postcode' },
            { key: 'startDate', label: 'startDate' },
            { key: 'endDate', label: 'endDate' },
            { key: 'categories', label: 'categories' },
			{ key: 'interactions', label: 'interactions' }
        ],
        useFontAwesome: true,
        group: 'client'
    };
}

