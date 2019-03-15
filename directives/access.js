app.directive('access', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/access.html',
    link: function(scope, element, attrs) {
            
      scope.grantAccess = function(url) {
        $('access').first().fadeOut('slow');
        $('footer').first().fadeOut('slow');
        $('#featured-container').removeClass('viewing').fadeOut('slow', function() {
          $('#welcome').fadeIn('slow');
          
          setTimeout(function() {
            $('#welcome').fadeOut('slow', function() {
              $('#featured-container').load(url, function() {
                $('#featured-container').addClass('viewing').fadeIn('slow');
              });
              $('footer').first().fadeIn('slow');
            });
          }, 1500);
          
        });
      }
      
      scope.failAccess = function(error=false) {
        if (!error) {
          var text = 'Incorrect Access Code. ';
        } else {
          var text = 'Something Went Wrong. ';
        }
        
        $('#access-input').css('border', '0.25em solid #990033');
        $('#error').append('<p style="font-size:0.75em;">' + text + 'Please Try Again.' + '</p>');
      }
              
      scope.checkAccess = function() {
        $('#error').empty();
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
              console.log('success!');
              scope.grantAccess(data.url);
            } else {
              console.log('failure!');
              scope.failAccess();
            }
          },
          error: function(err) {
            console.log('error!');
            scope.failAccess(error=true);
          },
        });
      }
      
      scope.showAccessHelp = function() {
        $('#access-help').fadeIn('slow');
      }
      
    } 
  }; 
});
