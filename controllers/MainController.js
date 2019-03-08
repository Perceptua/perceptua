app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'perceptua';
  $scope.featured = {
    name: 'Ludwig Von Beethoven',
    medium: 'Music',
  };
  $scope.upcoming = [
    {
      name: 'Johannes Brahms',
      medium: 'Music',
    }
  ];
  $scope.older = [
    {
      name: 'Maxfield Parrish',
      medium: 'Art',
    },
    {
      name: 'Stanley Kubrick',
      medium: 'Film',
    }
  ];
}]);

$(document).ready(function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      welcome();
      requireAccess();
    } else {
      showContent('#featured');
    }
  });
});

function welcome() {
  $('footer').first().fadeOut('slow');
  $('#login-container').fadeOut('slow', function() {
    $('#welcome').fadeIn('slow');
    setTimeout(function() {
      $('#welcome').fadeOut('slow', function() {
        $('#featured-container').fadeIn('slow');
        $('footer').first().fadeIn('slow');
      });
    }, 1500);
  });
}

function requireAccess() {
  $('featured').first().html('<access></access>');
}

function hideContent(ev) {
  $('footer').first().fadeOut('slow');
  var content = $(ev.target).closest('.content-container');
  content.fadeOut('slow', function() {
    content.removeClass('viewing');
    $('footer').first().fadeIn('slow');
  });
}

function showContent(content) {
  $('footer').first().fadeOut('slow');
  var viewing = $('.viewing').first();
  if (viewing.length > 0) {
    viewing.fadeOut('slow', function() {
      viewing.removeClass('viewing');
      $(content + '-container').fadeIn('slow').addClass('viewing');
      $('footer').first().fadeIn('slow');
    });
  } else {
    $(content + '-container').fadeIn('slow', function() {
      $('footer').first().fadeIn('slow');
    }).addClass('viewing');
  }
}
