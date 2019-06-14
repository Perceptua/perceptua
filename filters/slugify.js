app.filter('slugify', function() {
  // replace all non-alphanumeric characters with a hyphen
  return function(string) {
    return string.replace(/[\W_]+/g, '-');
  }
});
