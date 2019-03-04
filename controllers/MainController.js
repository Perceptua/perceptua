app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'perceptua';
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

function hideContent(ev) {
  $(ev.target).closest('.content-container')
    .fadeOut('slow')
    .removeClass('viewing');
}

function showContent(content) {
  var viewing = $('.viewing').first();
  if (viewing.length > 0) {
    viewing.fadeOut('slow', function() {
      viewing.removeClass('viewing');
      $(content + '-container').fadeIn('slow').addClass('viewing');
    });
  } else {
    $(content + '-container').fadeIn('slow').addClass('viewing');
  }
}
