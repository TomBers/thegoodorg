/*  Institution object collections   */
Companies = new Mongo.Collection("companies");
Projects = new Mongo.Collection("projects");


/*  Classification object collections   */
Categories = new Mongo.Collection("categories");


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

Companies.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


Companies.attachSchema(new SimpleSchema({
  cid: {type: String,label: "Id of Company", max: 200 },
  title: {type: String,label: "Name of Company", max: 200 },
  desc: {type: String, min: 5, max: 1000, autoform: {rows: 5}},
  // img: {type: String,label: "Image Url",  },
  // url: {type: String, label: "URL", regEx: SimpleSchema.RegEx.Url, autoform: {type: "url"}},
 //  categories: {type: [String], optional: true,
 //    autoform: {type: "select-multiple",
 //      options: function () {
 //        var opts = [];
 //        var cats = Categories.find().fetch();
 //
 //        if(cats == []){return null;}
 //        else{
 //          cats.forEach(function(c){
 //            opts.push({label:c.cat,value:c.cat});
 //          });
 //        return opts;
 //       }
 //     }
 //   }
 // }
}));

Projects.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


Projects.attachSchema(new SimpleSchema({
  ownerId:{
    type: String,
    optional: true,
    label: "ID of Owning company",
    max: 200
  },
  title: {
    type: String,
    optional: true,
    label: "Name of Startup",
    max: 200
  },
  desc: {
      type: String,
      optional: true,
      min: 20,
      max: 1000,
      autoform: {
         rows: 5
      }
   },
   img: {
     type: String,
     optional: true,
     label: "URL of image"
   },
   link: {
    type: String,
    optional: true,
    label: "URL",
    regEx: SimpleSchema.RegEx.Url,
    autoform: {
       type: "url"
    }
 },
 categories: {
   type: [String],
   optional: true,
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
 interactions: {
   type: [String],
   optional: true,
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



  // projects: {type: Array, optional: true, maxCount:5},
  //    "projects.$": {type: Object, optional: true },
  //    "projects.$.Name": {type: String, label: "Project Name"},
  //    "projects.$.URL": {type: String, label: "Project URL"},
  //    "projects.$.SubCategory": {type: String, label: "Sub Category"},
  //
  //    "projects.$.Requirements": {type: Array, optional: true },
  //    "projects.$.Requirements.$": {type: Object, label: "Requirement", optional: true },
  //    "projects.$.Requirements.$.Type": {type: String, label: "Type",
  //       allowedValues:[
  //         "Capital",
  //         "Time",
  //         "Resources"        ]},
  //    "projects.$.Requirements.$.Amount": {type: String, label: "Amount",
  //       allowedValues:[
  //         "1 Day",
  //         "3 Days",
  //         "7 Days",
  //         "£100",
  //         "£1000",
  //         "£10000",
  //         "Software",
  //         "Hardware",
  //         "Construction Materials"          ]},
  //    "projects.$.Requirements.$.TimeFrame": {type: String, label: "TimeFrame",
  //       allowedValues:[
  //         "1 Week",
  //         "2 Weeks",
  //         "4 Weeks",
  //         "2 Months",
  //         "3 Months"]},
  //
  // level1: {type: Array, optional: true },
  // "level1.$": {type: Object, optional: true },
  // "level1.$.level2a": {type: String, label: "Title"},
  // "level1.$.level2b": {type: Array, label: "Requirement", optional: true },
  // "level1.$.level2b.$": {type: Object, label: "Requirement2", optional: true }
  // "level1.$.level2b.$.level3a": {
  //    label: "What",
  //    type: [String],
  //    optional: true,
  //    autoform: {
  //      type: "select-multiple",
  //      options: function () {
  //
  //        var opts = [];
  //        var reqs = Req_Types.find().fetch();
  //        if(reqs == []){return null;}
  //        else{
  //          reqs.forEach(function(c){
  //            opts.push({label:c.type,value:c.type});
  //          });
  //          return opts;
  //        }
  //      }
  //    }
  //
  // },
  // "level1.$.level2b.$.level3b": {
  //    type: String,
  //    label: "Amount"
  // },
  // "level1.$.level2b.$.level3c": {
  //    type: String,
  //    label: "When"
  // }

// }));
