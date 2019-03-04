app.directive('suggest', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/suggest.html',
    link: function(scope, element, attrs) {
      
      $('#suggest').click(function() {
        $('suggest').first().fadeIn('slow');
      });
      
      scope.hideSuggest = function() {
        $('suggest').first().fadeOut('slow');
      }
      
      scope.suggestCreator = function() {
        $('#received-suggestion').fadeIn('slow');
        setTimeout(function() {
          $('suggest').first().fadeOut('slow');
        }, 2000);
      }
      
    }
  };
});
