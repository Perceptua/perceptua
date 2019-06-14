// not in use
app.directive('content', function() { 
  return { 
    restrict: 'E', 
    scope: {
      content: '=',
    }, 
    templateUrl: 'directives/content.html',
    link: function(scope, element, attrs) {
    }
  };
});
