var options = {
  // keepHistory: 1000 * 60 * 5,
  // localSearch: true
};
var fields = ['title', 'desc'];

var searchActive = false;

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

  // projectSearch.search('');
  projectSearch.cleanHistory();
};

Template.search.events({
  "keyup #search-box": _.throttle(function(e) {
    var text = $(e.target).val().trim();
    projectSearch.search(text);
  }, 200)
});


//-------------------

Template.searchResult2.helpers({
  getProjects: function() {

    return projectSearch.getData({
      transform: function(matchText, regExp) {
        return matchText.replace(regExp, "$&")
      },
      sort: {isoScore: -1}
    });
  }

  // isLoading: function() {
  //   return projectSearch.getStatus().loading;
  // }
});


Template.searchResult2.rendered = function() {

  // projectSearch.search('');
};

Template.searchMenu2.events({
  "keyup #search-box2": _.throttle(function(e) {
    var text = $(e.target).val().trim();
    projectSearch.search(text);
  }, 200)
});
