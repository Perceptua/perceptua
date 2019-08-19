app.filter('slugify', function() {
  // convert title to slug
  return function(string) {
    if (typeof string === 'string' || string instanceof String) {
      var words = string.split(' ');
      var slug = '';

      for (var w in words) {
        slug += words[w].replace(/[\W_]+/g, '').replace('&', 'and').toLowerCase();
        if (w < words.length - 1) {
          slug += '-';
        }
      }

      return slug;
    }
    return '';
  };
});
