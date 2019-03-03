app.directive('access', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/access.html',
    link: function(scope, element, attrs) {
      
      scope.accessCode = 'premier1X';
      scope.hasAccess = false;
              
      scope.checkAccess = function() {
        var code = $('#access-input').val();
        if (!scope.hasAccess && code == scope.accessCode) {
          scope.hasAccess = true;
          $('#access-input').css('border', '0.25em solid #var(--dark)');
          $('#error').empty();
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
  $('access').first().fadeOut();
  $('#welcome').fadeIn('slow', callback=showContent);
  setTimeout(function() {
    $('#welcome').fadeOut('slow', callback=showContent);
  }, 1000);
}

function showContent() {
  $('#welcome').fadeOut('slow');
}
