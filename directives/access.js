app.directive('access', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/access.html',
    link: function(scope, element, attrs) {
      
      // animation to display featured content
      scope.grantAccess = function(url) {
        $('#access-loader').fadeOut('slow');
        $('access').first().fadeOut('slow');
        $('#featured').fadeOut('slow', function() {
          $('#welcome').fadeIn('slow');
          
          setTimeout(function() {
            $('#welcome').fadeOut('slow', function() {
              $('#featured').load(url, function() {
                $('#featured').fadeIn('slow');
              });
            });
          }, 1500);
          
        });
      }
      
      // notify user of error/incorrect code
      scope.failAccess = function(error=false) {
        $('#access-loader').fadeOut('slow');
        if (!error) {
          var text = 'Incorrect access code. ';
        } else {
          var text = 'Something went wrong. ';
        }
        
        $('#access-input').css('border', '0.25em solid #990033');
        $('#error').append('<p style="font-size:0.75em;">' + text + 'Please try again.' + '</p>');
      }
      
      // send request with access code to firebase function endpoint
      scope.checkAccess = function() {
        $('#error').empty();
        $('#access-loader').fadeIn('slow');
        $('#access-input').css('border', '0.25em solid var(--dark)');
        var code = $('#access-input').val();
        $.ajax({
          url: 'https://us-central1-perceptua-b6ea3.cloudfunctions.net/checkAccess',
          dataType: 'json',
          data: {
            'code': code,
          },
          success: function(data) {
            if (data.access && data.url) {
              scope.grantAccess(data.url);
            } else {
              scope.failAccess();
            }
          },
          error: function(err) {
            scope.failAccess(error=true);
          },
        });
      }
      
      // show info text
      scope.showAccessHelp = function() {
        $('#access-help').fadeToggle('slow');
      }
      
    } 
  }; 
});
