app.directive('featured', function() { 
  return { 
    restrict: 'E', 
    scope: {
      creator: '=',
    }, 
    templateUrl: 'directives/featured.html',
  };
});
      
