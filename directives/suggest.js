app.directive('suggest', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/suggest.html',
    link: function(scope, element, attrs) {
      
      scope.createSuggestion = function() {
        var data = {};
        $('.suggest-field').each(function(field) {
          data[field.attr('id')] = field.val();
        });
        
        firebase.firestore().collection('suggestions').add(data).then(function() {
          showReceived();
        });
      }
      
      function showReceived() {
        $('#received-suggestion').fadeIn('slow');
      }
      
    }
  };
});
