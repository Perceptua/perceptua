app.filter('titlecase', function() {
  return function(string) {
    var title = '';
    var words = string.split(' ');
    
    for (var w in words) {
      title += words[w].charAt(0).toUpperCase() + words[w].slice(1);
    }
    
    return title;
  };
});
