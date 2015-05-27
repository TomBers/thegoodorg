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
  // logo:{type: String,label: "Logo", max: 200 },
  // headline: {type: String,label: "Headline", max: 200 ,optional:true  },
  desc: {type: String,label: "Description", max: 1000 ,optional:true},
  // url:{type: String,label: "Website", max: 200 },
  representative:{type: String,label: "Company representative", max: 200, optional:true },
  // type:{type: String,label: "Company type", max: 200 }
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
  ownerId:{    type: String,    optional: true,    label: "ID of Owning company",    max: 200  },
  title: {    type: String,    optional: true,    label: "Name of Startup",    max: 200  },
  headline: {    type: String,    optional: true,    label: "Headline",    max: 200  },
  desc: {      type: String,      optional: true,      min: 20,      max: 1000,
    autoform: {     rows: 5      }   },
  img: {     type: String,     optional: true,     label: "URL of image"   },
  link: {    type: String,    optional: true,    label: "URL",    regEx: SimpleSchema.RegEx.Url,
    autoform: {       type: "url"    } },
  categories: {type: [String],   optional: true,
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
 interactions: {   type: [String],   optional: true,
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
