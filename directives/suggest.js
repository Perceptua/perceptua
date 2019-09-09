app.directive('suggest', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/suggest.html',
    link: function(scope, element, attrs) {
      
      scope.createSuggestion = function() {
        var data = {frequency: 1};
        $('.suggest-field').each(function() {
          var id = $(this).attr('id');
          var input = $(this).val();
          var chars = input.split('');
          
          data[id] = input;
          data[id + '_chars'] = chars; // store character array for search
        });
        
        firebase.firestore().collection('suggestions').add(data).then(function() {
          showReceived();
        });
      }
      
      scope.fetchSuggestions = function(ev) {
        var suggestions = [];
        var field = $(ev.target).attr('id');
        var input = $(ev.target).val().toLowerCase();
        var bound = input + 'a'; // create upper bound for query
        
        firebase.firestore().collection('suggestions')
          .where(field, '>=', input).where(field, '<', bound)
          .get().then(function(docs) {
            docs.forEach(function(doc) {
              suggestions.push(doc.data()[field]);
            });
          return suggestions;
        }).catch(function(error) {
          console.log(error);
        });
      }
      
      function showReceived() {
        $('#received-suggestion').fadeIn('slow', function() {
          
          $('#suggest-form').fadeOut('slow', function() {
            $('#suggest-form').find('input[type=text]').val('');
            $('#suggest-form').fadeIn('slow');
          });
          
          $('#received-suggestion').fadeOut('slow');
        });
      }
      
      $(document).ready(function() {
        $('.suggest-field').change(function(ev) {
          var suggesions = scope.fetchSuggestions(ev);
          alert(suggestions);
        });
      });
      
    }
  };
});
