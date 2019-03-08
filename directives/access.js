app.directive('access', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/access.html',
    link: function(scope, element, attrs) {
      
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          $('footer').first().fadeOut('slow');
          $('#featured-container').fadeOut('slow', function() {
            $('#welcome').fadeIn('slow');
            setTimeout(function() {
              $('#welcome').fadeOut('slow', function() {
                $('footer').first().fadeIn('slow');
              });
            }, 1500);
          });
        }
      });
              
      scope.checkAccess = function() {
        $('#error').empty();
        $('#access-input').css('border', '0.25em solid #var(--dark)');
        var code = $('#access-input').val();
        firebase.auth().signInWithEmailAndPassword('aherkel09@gmail.com', code).catch(function(error) {
          if (error) {
            $('#access-input').css('border', '0.25em solid #990033');
            $('#error').append('<p style="font-size:0.75em;">Incorrect Access Code. Please Try Again.</p>');
          }
        });
      }
      
      scope.showAccessHelp = function() {
        $('#access-help').fadeIn('slow');
      }
      
    } 
  }; 
});

      
