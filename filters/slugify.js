app.filter('slugify', function() {
  return function(string) {
    var words = string.split(' ');
    var slug = '';

    for (var w in words) {
      slug += words[w];
      if (w < words.length - 1) {
        slug += '_';
      }
    }

    return slug;
  };
});