app.directive('login', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/login.html',
    link: function(scope, element, attrs) {
            
      scope.login = function(action) {
        var email = $('#email-input').val();
        var password = $('#password-input').val();
        
        if (action == 'login') {
          var func = firebase.auth().signInWithEmailAndPassword(email, password);
        } else if (action == 'signup') {
          var func = firebase.auth().createUserWithEmailAndPassword(email, password);
        }
        
        func.catch(function(error) {
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
