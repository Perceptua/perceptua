app.directive('suggest', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/suggest.html',
    link: function(scope, element, attrs) {
      
      scope.title = 'Title';
      scope.creator = 'Creator Name';
      scope.medium = 'Medium (e.g. Music, Film)';
      
      scope.createSuggestion = function() {
        var data = {frequency: 1};
        $('.suggest-field').each(function() {
          var id = $(this).attr('id');
          var input = $(this).val().toLowerCase();
          
          data[id] = input;
        });
        
        firebase.firestore().collection('suggestions').add(data).then(function() {
          showReceived();
        });
      }
      
      scope.fetchSuggestions = function(field) {
        var suggestions = [];
        var input = $('#' + field).val().toLowerCase();
        
        /* 
          increment final char of input to create query bound. based on icktoofay's answer at
          https://stackoverflow.com/questions/2256607/how-to-get-the-next-letter-of-the-alphabet-in-javascript
        */
        var bound = input.slice(0, -1) + String.fromCharCode(input.charCodeAt(input.length - 1) + 1)
                
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
      
      function autocomplete(suggestions) {
        console.log(suggestions);
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
      
    }
  };
});
