var axios = require('axios');
const apiKey = '650580624bdb48a38a2371a2dc56e41b';

module.exports = {
  fetchNewsSources: function(language){
    var encodedURI = window.encodeURI('https://newsapi.org/v1/sources?language='+language);
    return axios.get(encodedURI)
        .then(function(response){
          return response.data.sources;
        });
  },

  fetchArticles: function(source){
    var encodedURI = window.encodeURI('https://newsapi.org/v1/articles?source='+source+'&apiKey='+apiKey);
    return axios.get(encodedURI)
        .then(function(response){
          return response.data.articles;
        });
  }
}