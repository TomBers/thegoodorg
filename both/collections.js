Startups = new Mongo.Collection("startups");
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
