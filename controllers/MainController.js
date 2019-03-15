app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'perceptua';
  $scope.featured = {
    id: 3,
    name: 'Ludwig van Beethoven',
    medium: 'Music',
  };
  $scope.upcoming = [
    {
      id: 4,
      name: 'Johannes Brahms',
      medium: 'Music',
    }
  ];
  $scope.all = [
    {
      id: 1,
      name: 'Maxfield Parrish',
      medium: 'Art',
    },
    {
      id: 2,
      name: 'Stanley Kubrick',
      medium: 'Film',
    }
  ];
  
}]);

function hideContent(ev) {
  $('footer').first().fadeOut('slow');
  var content = $(ev.target).closest('.content-container');
  content.fadeOut('slow', function() {
    content.removeClass('viewing');
    $('footer').first().fadeIn('slow');
  });
}

function showContent(content) {
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
