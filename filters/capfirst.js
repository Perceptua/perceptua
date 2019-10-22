app.filter('capfirst', function() {
  // capitalize first letter of each word in string
  return function(string) {
    if (typeof string === 'string' || string instanceof String) {
      var words = string.split(' ');
      var capped = '';

      for (var w in words) {
        capped += words[w][0].toUppercase() + words[w].slice(1);
        if (w < words.length - 1) {
          capped += ' ';
        }
      }

      return capped;
    }
    return '';
  };
});
