app.directive('access', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/access.html',
    link: function(scope, element, attrs) {
      
      scope.createUser = function(email, code) {
        firebase.auth().createUserWithEmailAndPassword(email, code);
        firebase.auth().signOut();
      }
     
      scope.grantAccess = function() {
        $('footer').first().fadeOut('slow');
        $('#featured-container').removeClass('viewing').fadeOut('slow', function() {
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
        $('#access-input').css('border', '0.25em solid var(--dark)');
        var code = $('#access-input').val();
        if (code == 'premier1X') {
          scope.grantAccess();
        } else {
          scope.failAccess();
        }
      }
      
      scope.showAccessHelp = function() {
        $('#access-help').fadeIn('slow');
      }
      
    } 
  }; 
});
