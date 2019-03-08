app.directive('login', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/login.html',
    link: function(scope, element, attrs) {
          
      scope.signup = function() {
        var email = $('#email-input').val();
        var password = $('#password-input').val();
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
          if (error) {
            $('#login-error').text(error.message);
            $('.login-form').each(function() {
              $(this).css('border', '0.25em solid #990033');
            });
          }
        });
      }
      
      scope.login = function() {
        var email = $('#email-input').val();
        var password = $('#password-input').val();
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          if (error) {
            $('#login-error').text(error.message);
            $('.login-form').each(function() {
              $(this).css('border', '0.25em solid #990033');
            });
          }
        });
      }
      
    },
  };
});
