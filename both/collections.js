Startups = new Mongo.Collection("startups");
Corporates = new Mongo.Collection("corporates");
Comments = new Mongo.Collection("comments");


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
