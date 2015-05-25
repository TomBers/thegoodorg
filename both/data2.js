Meteor.startup(function () {

  Projects.remove({});
  Requirements.remove({});
  Resources.remove({});


Factory.define('project', Projects, {
  id: "(autogenerate)",

  parentcompany : "Company CRN / ID",
  name : "My pet project",
  subcat : "A:B",
  url : "http://my optional link",
  location : "hometown",

  is_active: "boolean",
  status: "in progress",
  date_started: "date",

  project_requirements: "[collection of req object ids]",
  project_resources: "[collection of res object ids]"
})

// 1
Factory.create('project', {
  id: "(autogenerate)",

  parentcompany : "123890 / QBot",
  name : "Robot sponsorship",
  subcat : "A:B",
  url : "http://my_company/my_project",
  location : "London,UK",

  is_active: "true",
  status: "in progress",
  date_started: "date",

  project_requirements: "[{_id:12},{_id:22},{_id:10}]",
  project_resources:"[]"
});
// 2




Factory.define('requirement', Requirements, {
  id: "(autogenerate)",
  parentid:"(autogenerate)",
  location: "optional - defaults to parent",

  type: "capital/resource/expertise",
  amount: "quantity",
  timeframe: "1W / 2W / 4W / 1M / 3M",

  completion_lvl: "0%",

  context: "why do you need this stuff?"
})

// 1
Factory.create('requirement', {
  id: "(autogenerate)",
  parentid:"(autogenerate)",
  location: "optional - defaults to parent",

  type: "capital",
  amount: "£1000",
  timeframe: "4W",

  completion_lvl: "20%",

  context: "require funds for new wheels"

});


Factory.define('resource', Resources, {
  id: "(autogenerate)",
  parentid:"(autogenerate)",
  location: "optional - defaults to parent",

  subcat: "A:A",

  type: "capital/resource/expertise",
  amount: "quantity",
  timeframe: "1W / 2W / 4W / 1M / 3M",

  exhaustion_lvl: "0%",

  context: "terms of offer"

})

// 1
Factory.create('resource', {
  id: "(autogenerate)",
  parentid:"(autogenerate)",
  location: "optional - defaults to parent",

  subcat:"A:B",

  type: "capital",
  amount: "£500",
  timeframe: "2W",

  exhaustion_lvl: "20%",

  context: "BACS payment only - contact CFO"

});



});
