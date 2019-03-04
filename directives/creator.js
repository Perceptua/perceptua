app.directive('creator', function() { 
  return { 
    restrict: 'E', 
    scope: {
      creator: '=',
    }, 
    templateUrl: 'directives/creator.html',
    link: function(scope, element, attrs) {
      scope.hideContent = function(ev) {
        $(ev.target).nearest('.content-container').fadeOut('slow');
      }
    }
  };
});
