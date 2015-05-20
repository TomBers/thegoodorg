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

/*  Action object collections   */
Collaborations = new Mongo.Collection("collaborations");
Feedbacks = new Mongo.Collection("feedbacks");
Comments = new Mongo.Collection("comments");

/*  User object collections   */
Browsers = new Mongo.Collection("browsers");
//Users = new Mongo.Collection("users");
Representatives = new Mongo.Collection("representatives");



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
    label: "Name of Startup",
    max: 200
  },
  desc: {
      type: String,
      min: 20,
      max: 1000,
      autoform: {
         rows: 5
      }
   },
   img: {
     type: String,
     label: "URL of image"
   },
   link: {
    type: String,
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
 },
 level1: {
     type: Array,
     optional: true
  },
  "level1.$": {
     type: Object,
     optional: true
  },
  "level1.$.level2a": {
     type: String
  },
  "level1.$.level2b": {
     type: Array,
     optional: true
  },
  "level1.$.level2b.$": {
     type: Object,
     optional: true
  },
  "level1.$.level2b.$.level3a": {
     type: String
  },
  "level1.$.level2b.$.level3b": {
     type: String
  }

}));

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
