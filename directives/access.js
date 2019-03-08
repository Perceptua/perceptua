app.directive('access', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/access.html',
    link: function(scope, element, attrs) {
      
      scope.hasAccess = false;
      scope.accessCode = null;
      firebase.firestore().collection('featured').doc('access').get().then(function(doc) {
        if (doc.exists) {
          scope.accessCode = doc.data().code;
          console.log(scope.accessCode);
        }
      });
      
      scope.grantAccess = function() {
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
              
      scope.checkAccess = function() {
        $('#error').empty();
        var code = $('#access-input').val();
        if (!scope.hasAccess && scope.accessCode && code == scope.accessCode) {
          scope.hasAccess = true;
          $('#access-input').css('border', '0.25em solid #var(--dark)');
          scope.grantAccess();
        } else {
          $('#access-input').css('border', '0.25em solid #990033');
          $('#error').append('<p style="font-size:0.75em;">Incorrect Access Code. Please Try Again.</p>');
        }
      }
      
      scope.showAccessHelp = function() {
        $('#access-help').fadeIn('slow');
      }
      
    } 
  }; 
});
