/*  Classification object collections   */


/*  Examples */
Examples = new Mongo.Collection("examples");

Examples.attachSchema(new SimpleSchema({
  firstField:{type: String},
  weirdColors:{type: String}
}));

Examples.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});






/*  Categories */
Categories = new Mongo.Collection("categories");

Categories.attachSchema(new SimpleSchema({
  cat: {type: String,label: "Category Name", max: 200 },
  subcat :{
    type: [String],
   optional: true
  }
}));

Categories.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});

/*  end Categories */


/*  UserProfiles */
UserProfiles = new Mongo.Collection("userprofiles")
UserProfiles.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});
UserProfiles.attachSchema(new SimpleSchema({
  loginEmail:   {type: String,label: "Login mail", max: 200, optional: true },
  name:   {type: String,label: "Full Name", max: 200, optional: true },

  //used on project cards
  user_employer:{type:String, label:"Your company name", optional:true, max:100},
  user_title:{type:String, label:"Your role within company", optional:true, max:100},
  user_photo:{type:String, label:"Profile photo URL", optional:true},

  registerAs:  {type: String, label: "Register As:", optional: false, defaultValue:'Individual',
              allowedValues: [
                "Individual",
                "StartUp Representative",
                "Corporate Representative"]},

	// flag for admin so can edit (administrate) anything
  is_admin:  {type: Boolean, label: "is Admin?", defaultValue: false, autoform: {omit: true} },

  contact_bool:  {type: Boolean, label: "Contact Me ?", defaultValue: true},
  contact_num:  {type: String,label: "Contact Telephone number", max: 200, optional: true },

  /*user_headline:{type:String, label:"Personal headline", optional:true, max:140, defaultValue:"...in 140 characters or less..."},*/

  // other ... added for future functionality
  mailout_monthly:  {type: Boolean, label: "Receive Monthly Mailout ?", defaultValue: false},
  mailout_updates:  {type: Boolean, label: "Receive weekly update on project matches ?", defaultValue: false},


  // CRUD...
  createdAt: {
    autoform: {omit: true},
    type: Date,
    autoValue: function() {
      if (this.isInsert) {return new Date;}
      else if (this.isUpsert) {return {$setOnInsert: new Date};}
      else {        this.unset();      }
      }
    },

    // perhaps let's not delete anything... set to inactive instead
    isActive: {type: Boolean, label: "Active ?", defaultValue: true ,autoform: {omit: true}}

}));


/*  END UserProfiles */


/* Companies*/
Companies = new Mongo.Collection("companies");
Companies.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


Companies.attachSchema(new SimpleSchema({
  name:   {type: String, label: "Company Name", max: 200, optional:false },
  cid:    {type: String, label: "Companies House Reference Number", max: 200,defaultValue:'validate this...'},

  hline:  {type: String, label: "Headline (max 200 chars)", max: 200 ,optional:true},
  about:   {type: String, label: "About (max 500 chars)", max: 500 ,optional:true, autoform: {rows: 4}},

  url:    {type: String, label: "Website", max: 200, optional:true},
  logo:   {type: String, label: "Logo", max: 400, optional:true},

/* link to UserProfiles.loginEmail*/
 employees:{
    type: [String],
    label: 'Company representatives (email)',
    optional: true,
    autoform: {
      afFieldInput: {
        type: "text",
        defaultValue:'...Email...'
      }
    }
  },


industry: {
        type: Array,
        minCount: 1,
        maxCount: 5,
        label: "Select Industry segment(s)",
        optional: true,
        defaultValue: ["TBD"],
        autoform: {
           options: [
              {label: "Financial",value: "financial"},
              {label: "Construction",value: "construction"},
              {label: "Manufacturing",value: "manufacturing"},
              {label: "Transport",value: "transport"},
              {label: "Education",value: "education"},
              {label: "(Other)",value: "other"},
            ]}
        },
     "industry.$": {
        type: String
     },

  loc:    {type: String, label: "Postcode", max: 10, optional:true},
  addr:   {type: String, label: "Address", max: 1000 ,optional:true, autoform: {rows: 5}},


  img:    {type: String, label: "Cover image for your company (URL / link)",  optional:true},
  youtubeLink: {type: String, label: "YouTube 'embed' Url",  optional:true},

  /* links to external feeds */
  twitter: {type: String, optional:true,label: 'Twitter id'},
  newslinks: {type: String, optional:true,label:'News link'},



  // CRUD...
  createdAt: {
    autoform: {omit: true},
    type: Date,
    autoValue: function() {
      if (this.isInsert) {return new Date;}
      else if (this.isUpsert) {return {$setOnInsert: new Date};}
      else {        this.unset();      }
      }
    },

    // perhaps let's not delete anything... set to inactive instead
    isActive: {type: Boolean, label: "Active ?", defaultValue: true, autoform: {omit: true}}

      // updatedAt: {
    //   type: Date,
    //   autoValue: function() {
    //     //if (this.isUpdate) { return new Date();}
    //     //else if (this.isInsert) {return new Date;}
    //     //else {}
    //     Date;
    //     },
    //   //denyInsert: false,
    //   optional: true
    // }

}));

/* END Companies */



/* Projects */
Projects = new Mongo.Collection("projects");
Projects.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


Projects.attachSchema(new SimpleSchema({
/* links to Company._id*/
  company_id:  {type: String, optional: false, label: "Company._id", autoform: {omit: true}  },

  // title:    {type: String, optional: true, label: "Project Title", max: 200 },
  hline:    {type: String, optional: true, label: "Project headline (max 200 chars)", max: 200 },
  desc:     {type: String, optional: true, label: "Project description (max 1000 chars)", max: 1000, autoform: {rows: 5}   },
  story:     {type: String, optional: true, label: "Project background / story", max: 1000, autoform: {rows: 5}   },

  img:      {type: String, optional: true, label: "URL link to project picture"},
  link:     {type: String, optional: true, label: "Link to project on your website",    regEx: SimpleSchema.RegEx.Url, autoform: {type: "url"} },

  city:   {type: String, optional: true, label: "City / Region"},
  country:   {type: String, optional: true, label: "Country"},
  postcode:   {type: String, optional: true, label: "Postcode"},


  startDate: {type: Date, optional: true, label: 'Start Date (approx)', /*odd but different format if using datepicker!*/
   /* autoform: {type: "bootstrap-datepicker"} */
	},

  endDate: {type: Date, optional: true, label: 'End Date (approx)',
 /*     autoform: {type: "bootstrap-datepicker"} */
	  },

  timeframe: {type: String, optional: true, label: "Timeframe (notes)"},


  status:   {type: String, optional: true, label: "Current Completion Level of Project" },
  // active:   {type: Boolean, label: "Active", defaultValue: true},

  // categories: {type: [String], optional: true, label:'Cause(s) your project serves : (multi-select: CTRL+SELECT)',
  categories: {type: [String], optional: true, label:'Cause(s) ',
    autoform: {
      type: "select-multiple",
  //     options: function () {
  //       var opts = [];
	// //	 console.log(Categories.find().fetch());
  //        Categories.find().forEach(function(c){
	// //	 console.log(c);
	// 	 var index;
	// 	 for (index = 0; index < c.subcat.length; index++) {
	// 		var str = c.cat + " - " + c.subcat[index]
	// 		opts.push({label:str,value:c.subcat[index]});
  //         }
	// 	});
  //       return opts;
  //     }

  options: function () {
    var tmp = [

      {label:'-- Environment --',value:''},
      {label:'Green Technology',value:'Green Technology'},
      {label:'Energy Management',value:'Energy Management'},
      {label:'Sustainable Transport',value:'Sustainable Transport'},
      {label:'Sustainable Products',value:'Sustainable Products'},
      {label:'',value:''},

      {label:'-- Health --',value:''},
      {label:'Fitness',value:'Fitness'},
      {label:'Mental Health',value:'Mental Health'},
      {label:'Rehabilitation',value:'Rehabilitation'},
      {label:'Seniors',value:'Seniors'},
      {label:'Special Needs',value:'Special Needs'},
      {label:'',value:''},

      {label:'-- Humanity --',value:''},
      {label:'Education',value:'Education'},
      {label:'Community',value:'Community'},
      {label:'Skills & Employment',value:'Skills & Employment'},
      {label:'Food & Shelter',value:'Food & Shelter'},
      {label:'Accessibility',value:'Accessibility'}

      ];
    return tmp;
  }

   }
  },


  // interactions: {type: [String],optional: true, label: 'Initiaitves(s) your project serves : (multi-select: CTRL+SELECT)',
  interactions: {type: [String],optional: true, label: 'Interaction(s)',maxCount:4,
   autoform: {
     type: "select-multiple",
     options: function () {
       var tmp = [
         {label:'Donate Materials',value:'Donate Materials'},
         {label:'Monetary Donations',value:'Monetary Donations'},
         {label:'Volunteering',value:'Volunteering'},
         {label:'Research Agreements',value:'Research Agreements'},
         {label:'Product Collaboration',value:'Product collaboration'},
         {label:'Brand Collaboration',value:'Brand Collaboration'},
         {label:'Lecturing Opportunites',value:'Lecturing Opportunites'}
         ];
       return tmp;
     }
   }
 },

  impact_e:   {type: String, optional: true, label: "Environmental Impact"},
  impact_h:   {type: String, optional: true, label: "Health Impact" },
  impact_r:   {type: String, optional: true, label: "Rights Impact" },

  // impact_how: {type: String, optional:true,label:'Impact - How ?', defaultValue:'Please explain how you will achieve the impact measures with this project',  autoform: {rows: 5}   },

   // CRUD...
  createdAt: {
    autoform: {omit: true},
    type: Date,
    autoValue: function() {
      if (this.isInsert) {return new Date;}
      else if (this.isUpsert) {return {$setOnInsert: new Date};}
      else {        this.unset();      }
      }
    },

    // perhaps let's not delete anything... set to inactive instead
    isActive: {type: Boolean, label: "Active ?", defaultValue: true ,autoform: {omit: true}}

}));

// *** OLD

// Projects.attachSchema(new SimpleSchema({
// /* links to Company._id*/
//   company_id:  {type: String, optional: false, label: "Company._id", autoform: {omit: true}  },
//
//   // title:    {type: String, optional: true, label: "Project Title", max: 200 },
//   hline:    {type: String, optional: true, label: "Headline (max 200 chars)", max: 200 },
//   desc:     {type: String, optional: true, label: "Description (min 20 chars max 1000 chars)", min: 20, max: 1000, autoform: {rows: 5}   },
//   img:      {type: String, optional: true, label: "URL link to project picture"   },
//   link:     {type: String, optional: true, label: "Link to project on your website",    regEx: SimpleSchema.RegEx.Url, autoform: {type: "url"} },
//
//   city:   {type: String, optional: true, label: "City / Region", defaultValue:'...London...'},
//   country:   {type: String, optional: true, label: "Country", defaultValue:'UK'},
//   postcode:   {type: String, optional: true, label: "Postcode", defaultValue:''},
//
//
//   startDate: {type: Date, optional: true, label: 'Start Date (approx) - YYYY-MM-DD', /*odd but different format if using datepicker!*/
//    /* autoform: {type: "bootstrap-datepicker"} */
// 	},
//
//   endDate: {type: Date, optional: true, label: 'End Date (approx) - YYYY-MM-DD',
//  /*     autoform: {type: "bootstrap-datepicker"} */
// 	  },
//
//   timeframe: {type: String, optional: true, label: "Timeframe (notes)"},
//
//
//   status:   {type: String, optional: true, label: "Current Completion Level of Project" ,defaultValue:'0%'},
//   active:   {type: Boolean, label: "Active", defaultValue: true},
//
//   categories: {type: [String], optional: true, label:'Cause(s) your project serves : (multi-select: CTRL+SELECT)',
//     autoform: {
//       type: "select-multiple",
//       options: function () {
//         var opts = [];
// 	//	 console.log(Categories.find().fetch());
//          Categories.find().forEach(function(c){
// 	//	 console.log(c);
// 		 var index;
// 		 for (index = 0; index < c.subcat.length; index++) {
// 			var str = c.cat + " - " + c.subcat[index]
// 			opts.push({label:str,value:c.subcat[index]});
//           }
// 		});
//         return opts;
//       }
//    }
//   },
//
//
//   interactions: {type: [String],optional: true, label: 'Initiaitves(s) your project serves : (multi-select: CTRL+SELECT)',
//    autoform: {
//      type: "select-multiple",
//      options: function () {
//        var tmp = [
//          {label:'Donate Materials',value:'Donate Materials'},
//          {label:'Monetary Donations',value:'Monetary Donations'},
//          {label:'Volunteering',value:'Volunteering'},
//          {label:'Research Agreements',value:'Research Agreements'},
//          {label:'Product Collaboration',value:'Product collaboration'},
//          {label:'Brand Collaboration',value:'Brand Collaboration'},
//          {label:'Lecturing Opportunites',value:'Lecturing Opportunites'}
//          ];
//        return tmp;
//      }
//    }
//  },
//
//   impact_e:   {type: String, optional: true, label: "Environmental Impact", defaultValue:'eg. How many CO2 emissions can this project help reduce, or how many trees will you help plant'},
//   impact_h:   {type: String, optional: true, label: "Health Impact", defaultValue:'eg. How many people will you be able to help with this project?'},
//   impact_r:   {type: String, optional: true, label: "Rights Impact", defaultValue:'eg. How many people will you be able to reach out to?'},
//
//   // impact_how: {type: String, optional:true,label:'Impact - How ?', defaultValue:'Please explain how you will achieve the impact measures with this project',  autoform: {rows: 5}   },
//
//    // CRUD...
//   createdAt: {
//     autoform: {omit: true},
//     type: Date,
//     autoValue: function() {
//       if (this.isInsert) {return new Date;}
//       else if (this.isUpsert) {return {$setOnInsert: new Date};}
//       else {        this.unset();      }
//       }
//     },
//
//     // perhaps let's not delete anything... set to inactive instead
//     isActive: {type: Boolean, label: "Active ?", defaultValue: true ,autoform: {omit: true}}
//
// }));

/* END Projects */



/* ContactReqs */
ContactReqs = new Mongo.Collection("contactReqs");
ContactReqs.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


ContactReqs.attachSchema(new SimpleSchema({
  about: {type: [String],optional: true,label: "Select what you'd like to talk about...",
    autoform: {
      type: "select-multiple",
      options: function () {
        var tmp = [
           {label:'Donate Materials',value:'Donate Materials'},
           {label:'Monetary Donations',value:'Monetary Donations'},
           {label:'Volunteering',value:'Volunteering'},
           {label:'Research Agreements',value:'Research Agreements'},
           {label:'Product collaboration',value:'Product collaboration'},
           {label:'Brand Collaboration',value:'Brand Collaboration'},
           {label:'Lecturing Opportunites',value:'Lecturing Opportunites'}
           ];
           return tmp;
         }
      }
    },
  message: {type: String, optional: false, label: "Message", defaultValue:'Please add a brief message...',min:10, autoform: {rows: 5}   },
  from: {type: String, optional: false, label: "From ID"}, /* UserProfiles.loginEmail */
  to: {type: String, optional: false, label: "To ID"}, /* UserProfiles.loginEmail */
  project: {type: String, optional: false, label: "Project ID"}, /* Projects._ID*/


  // status:   {type: String, label: "Status", optional: false, defaultValue:'Requested',
  //           allowedValues: [
  //             "Requested",
  //             "Accepted",
	// 		        "Rejected",
	// 		        "Cancelled"]}


	// CRUD...
	createdAt: {
    autoform: {omit: true},
    type: Date,
    autoValue: function() {
      if (this.isInsert) {return new Date;}
      else if (this.isUpsert) {return {$setOnInsert: new Date};}
      else {        this.unset();      }
      }
    }


}));
