var options = {
  // keepHistory: 1000 * 60 * 5,
  // localSearch: true
};
var fields = ['title', 'desc'];

projectSearch = new SearchSource('projects', fields, options);

Template.searchResult.helpers({
  getProjects: function() {

    return projectSearch.getData({
      transform: function(matchText, regExp) {
        return matchText.replace(regExp, "<b>$&</b>")
      },
      sort: {isoScore: -1}
    });
  }

  // isLoading: function() {
  //   return projectSearch.getStatus().loading;
  // }
});


Template.searchResult.rendered = function() {

  projectSearch.search('');
};

Template.search.events({
  "keyup #search-box": _.throttle(function(e) {
    var text = $(e.target).val().trim();
    projectSearch.search(text);
  }, 200)
});
