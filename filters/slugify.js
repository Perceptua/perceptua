app.filter('slugify', function() {
  // convert name to slug
  // captures text names & middle initials with '.'
  return function(string) {
    if (typeof string === 'string' || string instanceof String) {
      var words = string.replace('.', '').split(' ');
      var slug = '';

      for (var w in words) {
        slug += words[w].toLowerCase();
        if (w < words.length - 1) {
          slug += '_';
        }
      }

      return slug;
    }
    return '';
  };
});
