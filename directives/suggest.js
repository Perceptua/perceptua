app.directive('suggest', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/suggest.html',
    link: function(scope, element, attrs) {
      
      scope.createSuggestion = function() {
        var data = {};
        $('.suggest-field').each(function() {
          data[$(this).attr('id')] = $(this).val();
        });
        
        firebase.firestore().collection('suggestions').add(data).then(function() {
          showReceived();
        });
      }
      
      function showReceived() {
        $('#received-suggestion').fadeIn('slow', function() {
          
          $('#suggest-form').fadeOut('slow', function() {
            $('#suggest-form').empty().fadeIn('slow');
          });
          
          $('#received-suggestion').fadeOut('slow');
        });
      }
      
    }
  };
});
