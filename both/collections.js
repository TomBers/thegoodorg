Startups = new Mongo.Collection("startups");
Corporates = new Mongo.Collection("corporates");
Comments = new Mongo.Collection("comments");
Categories = new Mongo.Collection("categories");
Wants = new Mongo.Collection("wants");
Collaborations = new Mongo.Collection("collaborations");
Feedbacks = new Mongo.Collection("feedbacks");


Startups.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});


Startups.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name of Startup",
    max: 200
  },
  description: {
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