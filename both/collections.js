/*  Institution object collections   */
Companies = new Mongo.Collection("companies");
Projects = new Mongo.Collection("projects");
UserSettings = new Mongo.Collection("usersettings")

/*  Classification object collections   */
Categories = new Mongo.Collection("categories");

Collaborations = new Mongo.Collection("collaborations");


/*  Project attribute object collections   */


Categories.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


Categories.attachSchema(new SimpleSchema({
  cat: {type: String,label: "Category Name", max: 200 },
  subcat :{
    type: [String],
   optional: true
  }
}));


UserSettings.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


UserSettings.attachSchema(new SimpleSchema({
  userID:   {type: String,label: "Category Name", max: 200, optional: true },
  userType: {type:String, label: "User Type", optional:true } ,
  mailout:  {type: Boolean, label: "Receive Weekly Mailout ?", defaultValue: true}
}));




Companies.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


Companies.attachSchema(new SimpleSchema({
  cid:    {type: String, label: "Company Ref Number", max: 200, defaultValue:'...CRN: Company Reference Number...'},
  name:   {type: String, label: "Company Name", max: 200, optional:true ,defaultValue:'...Company Name...'},
  hline:  {type: String, label: "Headline", max: 200 ,optional:true, defaultValue:'(...company headline...)'},
  about:   {type: String, label: "About", max: 1000 ,optional:true, defaultValue:'(...company description...)'},
  url:    {type: String, label: "Website", max: 200, optional:true, defaultValue:'(...URL link to website...)'},
  logo:   {type: String, label: "Logo", max: 200, optional:true, defaultValue:'(...URL link to logo...)'},

  type:   {type: String, label: "Company Type", optional: false, defaultValue:'StartUp',
            allowedValues: [
              "StartUp",
              "Corporate"]},
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
              {label: "TBD",value: "tbd"}
            ]}
        },
     "industry.$": {
        type: String
     },

  loc:    {type: String, label: "Postcode", max: 10, optional:true, defaultValue:'(XXX XXXX)'},
  addr:   {type: String, label: "Address", max: 1000 ,optional:true, defaultValue:'(...company address...)'},

  rep_name:    {type: String, label: "Company representative", max: 200, optional:true,defaultValue:'(...firstname lastname...)' },
  rep_role:    {type: String, label: "contact role in company", max: 200, optional:true,defaultValue:'(... community dept rep ...)' },
  rep_email:   {type: String, label: "contact email", max: 200, optional:true,defaultValue:'(...name@company.com...)' },
  rep_tel:     {type: String, label: "contact telephone #", max: 200, optional:true,defaultValue:'(...+44 #### ### ####...)' },

  img:    {type: String, label: "Image Url",  optional:true, defaultValue:'(...URL link to company picture(s)...)'},
  projects:{type: [String], optional:true, max:10},

  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {return new Date;}
      else if (this.isUpsert) {return {$setOnInsert: new Date};}
      else {        this.unset();      }
      }
    },

    updatedAt: {
      type: Date,
      autoValue: function() {
        //if (this.isUpdate) { return new Date();}
        //else if (this.isInsert) {return new Date;}
        //else {}
        Date;
        },
      //denyInsert: false,
      optional: true
    }
}));




Projects.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


Projects.attachSchema(new SimpleSchema({
  ownerId:  {type: String, optional: true, label: "ID of Owning company", max: 200 },
  title:    {type: String, optional: true, label: "Project Title", max: 200 },
  hline:    {type: String, optional: true, label: "Headline", max: 200 },
  desc:     {type: String, optional: true, min: 20, max: 1000,
    autoform: {rows: 5}   },
  img:      {type: String, optional: true, label: "URL of image"   },
  link:     {type: String, optional: true, label: "URL",    regEx: SimpleSchema.RegEx.Url,
    autoform: {type: "url"} },

  tframe:   {type: String, optional: true, label: "Time Frame", defaultValue:'4W'},
  status:   {type: String, optional: true, label: "Status" ,defaultValue:'100%'},
  active:   {type: Boolean, label: "Active", defaultValue: true},

  categories: {type: [String], optional: true,
    autoform: {
      type: "select-multiple",
      options: function () {
        var opts = [];
        var cats = Categories.find().fetch();
        if(cats == []){return null;}
        else{
          cats.forEach(function(c){
            c.subcat.forEach(function(e){
              opts.push({label:e,value:e});
            })
          });
        return opts;
        }
      }
   }
  },
  interactions: {type: [String],optional: true,
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
 }
}));




Collaborations.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


Collaborations.attachSchema(new SimpleSchema({
  projectId: {type: String},
  corp_cid: {type: String},
  startup_cid: {type: String},
  corp_message: {type: String, optional: true},
  /*
  ,
  corp_message: {type: String},
  startup_message: {type: String},
  corp_requestedAt: {type: Date},
  startup_responceAt: {type: Date},
  */
  status:   {type: String, label: "Status", optional: false, defaultValue:'Requested',
            allowedValues: [
              "Requested",
              "Accepted",
			  "Rejected",
			  "Cancelled"]}
			  
}));

