app.directive('access', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/access.html',
    link: function(scope, element, attrs) {
      
      scope.createUser = function(email, code) {
        firebase.auth().createUserWithEmailAndPassword(email, code);
      }
     
      scope.grantAccess = function() {
        $('footer').first().fadeOut('slow');
        $('#access-container').removeClass('viewing').fadeOut('slow', function() {
          $('#access-input').css('border', '0.25em solid #var(--dark)');
          $('#welcome').fadeIn('slow');
          setTimeout(function() {
            $('#welcome').fadeOut('slow', function() {
              $('#featured-container').addClass('viewing').fadeIn('slow');
              $('footer').first().fadeIn('slow');
            });
          }, 1500);
        });
      }
      
      scope.failAccess = function() {
        $('#access-input').css('border', '0.25em solid #990033');
        $('#error').append('<p style="font-size:0.75em;">Incorrect Access Code. Please Try Again.</p>');
      }
              
      scope.checkAccess = function() {
        $('#error').empty();
        var email = $('#email-input').val();
        var code = $('#access-input').val();
        
        firebase.auth().signInWithEmailAndPassword(email, code).catch(function(error) {
          if (error.code == 'auth/user-not-found') {
            scope.createUser(email, code);
          } else if (error) {
            scope.failAccess();
          } else {
            scope.grantAccess();
          }
        });
      }
      
      scope.showAccessHelp = function() {
        $('#access-help').fadeIn('slow');
      }
      
    } 
  }; 
});
