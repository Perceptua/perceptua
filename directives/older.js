app.directive('older', function() { 
  return { 
    restrict: 'E', 
    scope: {
      creator: '=',
    }, 
    templateUrl: 'directives/creator.html',
    link: function(scope, element, attrs) {
      $('#older').click(function() {
        $('#older-container').fadeIn('slow');
      });
      scope.hideOlder = function() {
        $('#older-container').fadeOut('slow');
      }
    }
  };
});
