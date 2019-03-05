app.directive('access', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/access.html',
    link: function(scope, element, attrs) {
      
      scope.accessCode = 'premier1X';
      scope.hasAccess = false;
              
      scope.checkAccess = function() {
        $('#error').empty();
        var code = $('#access-input').val();
        if (!scope.hasAccess && code == scope.accessCode) {
          scope.hasAccess = true;
          $('#access-input').css('border', '0.25em solid #var(--dark)');
          grantAccess();
        } else {
          $('#access-input').css('border', '0.25em solid #990033');
          $('#error').append('<p style="font-size:0.75em;">Incorrect Access Code. Please Try Again.</p>');
        }
      }
    } 
  }; 
});

function grantAccess() {
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
