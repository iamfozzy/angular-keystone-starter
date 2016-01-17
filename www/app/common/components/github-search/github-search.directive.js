import template from './github-search.html';

let directive = {
  restrict: 'EA',
  link: function (scope, element) {
    $('.ui.search.github', element).search({
      type: 'category',
      minCharacters: 3,
      apiSettings: {
        onResponse: function (githubResponse) {
          var
            response = {
              results: {}
            }
            ;
          // translate GitHub API response to work with search
          $.each(githubResponse.items, function (index, item) {
            var
              language = item.language || 'Unknown',
              maxResults = 8
              ;
            if (index >= maxResults) {
              return false;
            }
            // create new language category
            if (response.results[language] === undefined) {
              response.results[language] = {
                name: language,
                results: []
              };
            }
            // add result to category
            response.results[language].results.push({
              title: item.name,
              description: item.description,
              url: item.html_url
            });
          });
          return response;
        },
        url: '//api.github.com/search/repositories?q={query}'
      }
    });
  },
  template: template
};

export default function () {
  return directive;
};