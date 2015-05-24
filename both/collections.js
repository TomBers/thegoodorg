/*  Institution object collections   */
Companies = new Mongo.Collection("companies");
Startups = new Mongo.Collection("startups");
Corporates = new Mongo.Collection("corporates");

/*  Classification object collections   */
Categories = new Mongo.Collection("categories");
SubCategories = new Mongo.Collection("subcategories");

/*  Project attribute object collections   */
Wants = new Mongo.Collection("wants");
Assets = new Mongo.Collection("assets");

Req_Types = new Mongo.Collection("req_types");
Req_Amounts = new Mongo.Collection("req_amounts");
Req_TimeFrames = new Mongo.Collection("req_timeframes");

/*  Action object collections   */
Collaborations = new Mongo.Collection("collaborations");
Feedbacks = new Mongo.Collection("feedbacks");
Comments = new Mongo.Collection("comments");

/*  User object collections   */
Browsers = new Mongo.Collection("browsers");
//Users = new Mongo.Collection("users");
Representatives = new Mongo.Collection("representatives");


Req_Types.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


Req_Types.attachSchema(new SimpleSchema({
  type: {type: String,label: "Requirement Type", max: 200 }
}));

Req_Amounts.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


Req_Amounts.attachSchema(new SimpleSchema({
  amount: {type: String,label: "Requirement Amount", max: 200 }
}));

Req_TimeFrames.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


Req_TimeFrames.attachSchema(new SimpleSchema({
  timeframe: {type: String,label: "Requirement Timeframe", max: 200 }

  // start: {
  //     type: Date,
  //     optional: true,
  //     label: "Start Date",
  //     min: new Date("2014-01-01T00:00:00.000Z"),
  //     autoform: {
  //        value: new Date("2014-10-18T00:00:00.000Z")
  //     },
  //
  // start: {
  //        type: Date,
  //        optional: true,
  //        label: "Start Date",
  //        min: new Date("2014-01-01T00:00:00.000Z"),
  //        autoform: {
  //           value: new Date("2014-10-18T00:00:00.000Z")
  //        },
  //  }

}));

SubCategories.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


SubCategories.attachSchema(new SimpleSchema({
  cat: {
    label: "Category Name",
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
            opts.push({label:c.cat,value:c.cat});
          });
          return opts;
        }
      }
    }
  },
  subcat: {type: String,label: "Sub Category Name", max: 200 },
}));

Categories.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


Categories.attachSchema(new SimpleSchema({
  cat: {type: String,label: "Category Name", max: 200 },
}));

Companies.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


Companies.attachSchema(new SimpleSchema({
  title: {type: String,label: "Name of Company", max: 200 },
  desc: {type: String, min: 20, max: 1000, autoform: {rows: 5}},
  img: {type: String,label: "Image Url",  },
  url: {type: String, label: "URL", regEx: SimpleSchema.RegEx.Url, autoform: {type: "url"}},
  categories: {type: [String], optional: true,
    autoform: {type: "select-multiple",
      options: function () {

        var opts = [];
        var cats = Categories.find().fetch();

        if(cats == []){return null;}
        else{
          cats.forEach(function(c){
            opts.push({label:c.cat,value:c.cat});
          });
        return opts;
       }
     }
   }
 }

}));





Startups.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


Startups.attachSchema(new SimpleSchema({
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
           opts.push({label:c.cat,value:c.cat});
         });
         return opts;
       }
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

Corporates.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});

Corporates.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name of Corporate",
    max: 200
  },
  summary: {
      type: String,
      min: 10,
      max: 140,
      autoform: {
         rows: 2
      }
   },
  detail: {
      type: String,
      min: 20,
      max: 1000,
      autoform: {
         rows: 5
      }
   },
   url: {
    type: String,
    label: "URL",
    regEx: SimpleSchema.RegEx.Url,
    autoform: {
       type: "url"
    }
 }

}));

Collaborations.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});

Collaborations.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Collaboration Reference",
    max: 200
  },
  id_us: {
      type: String,
      min: 1,
      max: 100,
      autoform: {
         rows: 1
      }
   },
  id_them: {
      type: String,
      min: 1,
      max: 100,
      autoform: {
         rows: 1
      }
   },
  project: {
      type: String,
      min: 1,
      max: 100,
      autoform: {
         rows: 1
      }
   },
  detail: {
      type: String,
      min: 1,
      max: 400,
      autoform: {
         rows: 1
      }
 }

}));

Feedbacks.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});

Feedbacks.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Feedback Reference",
    max: 200
  },
  id_us: {
      type: String,
      min: 1,
      max: 100,
      autoform: {
         rows: 1
      }
   },
  id_them: {
      type: String,
      min: 1,
      max: 100,
      autoform: {
         rows: 1
      }
   },
  description: {
      type: String,
      min: 1,
      max: 200,
      autoform: {
         rows: 2
      }
   },
  quote: {
      type: String,
      min: 1,
      max: 200,
      autoform: {
         rows: 2
      }
   }

}));
