app.directive('suggest', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/suggest.html',
    link: function(scope, element, attrs) {
      
      scope.title = 'Title';
      scope.creator = 'Creator Name';
      scope.medium = 'Medium (e.g. Music, Film)';
      
      addFormNav('.suggest-field'); // listen for keyboard events in form fields (/static/ui.js)
      
      scope.submitSuggestion = function() {
        var formData = new Map();
        $('.suggest-field').each(function() {
          formData.set($(this).attr('id'), $(this).val());
        });
        
        getOrCreate(formData);
      }
      
      function getOrCreate(formMap) {
        for (var [key, value] of formMap) {
          firebase.firestore().collection('suggestion_' + key)
            .where('name', '==', value).limit(1).get().then(function(snapshot) {
            if (!snapshot.empty) {
              incrementFrequency(snapshot.docs[0].ref);
            } else {
              createSuggestion(key, formMap);
            }
          });
        }
      }
      
      function createSuggestion(key, formMap) {
        var data = {frequency: 1, name: formMap.get(key)};
        if (field == 'title') {
          getOrCreate('creator', formMap);
          getOrCreate('medium', formMap);
        }
        firebase.firestore().collection('suggestion_' + key).add(data).then(function(doc) {
          if (key == 'title' || key == 'medium') {
            assignToTitle(key, doc.ref, formMap.get('title'));
          }
        });
      }
      
      function incrementFrequency(ref) {
        ref.get().then(function(doc) {
          var freq = doc.data().frequency + 1;
          ref.update({'frequency': freq});
        });
      }
      
      function assignToTitle(key, docRef, title) {
        firebase.firestore().collection('suggestion_title').where('name', '==', title)
          .get().then(function(snapshot) {
            snapshot.docs[0].update({key: docRef});
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
      
      scope.fetchSuggestions = function(field) {
        var suggestions = {}; // {docId: fieldValue}
        var values = []; // store values to prevent duplicates
        var input = $('#' + field).val().toLowerCase();
        
        // increment final char of input to create query bound. based on icktoofay's answer at
        // https://stackoverflow.com/questions/2256607/how-to-get-the-next-letter-of-the-alphabet-in-javascript
        var bound = input.slice(0, -1) + String.fromCharCode(input.charCodeAt(input.length - 1) + 1)
        
        firebase.firestore().collection('suggestion_' + field)
          .where('name', '>=', input).where('name', '<', bound).limit(5)
          .get().then(function(docs) {
            docs.forEach(function(doc) {
              var value = doc.data().name;
              if (!values.includes(value)) { // if value is unique
                suggestions[doc.id] = value;
                values.push(value);
              }
            });
            return autocomplete(field, suggestions);
        }).catch(function(error) {
          console.log(error);
        });
      }
      
      function autocomplete(field, suggestions) {
        $('.autocomplete').empty();
        if (field == 'title') {
          createFormWidget(suggestions);
        } else {
          createFieldWidget(field, suggestions);
        }
      }
      
      function createFormWidget(suggestions) {
        for (var s in suggestions) {
          $('#title-autocomplete').append(
            '<div class="item" onclick="fillForm(\'' + s + '\')"><span>'
              + suggestions[s] + 
            '</span></div>'
          );
        }
      }
      
      function createFieldWidget(field, suggestions) {
        for (var s in suggestions) {
          $('#' + field + '-autocomplete').append(
            '<div class="item" onclick="fillField(\'' + field + '\',\'' + suggestions[s] + '\')"></span>'
              + suggestions[s] + 
            '</span></div>'
          );
        }
      }
      
    }
  };
});

function fillForm(docId) {
  firebase.firestore().collection('suggestion_title').doc(docId)
    .get().then(function(doc) {
      var data = doc.data();
      $('#title').val(data.name);
      resolveReference('#creator', data.creator); // set data from referenced docs
      resolveReference('#medium', data.medium);
      $('.autocomplete').empty();
    });
}

function resolveReference(field, ref) {
  ref.get().then(function(doc) {
    if (doc.exists) {
      $(field).val(doc.data().name);
    }
  });
}

function fillField(field, value) {
  $('#' + field).val(value);
  $('.autocomplete').empty();
}
