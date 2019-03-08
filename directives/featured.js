app.directive('featured', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/creator.html',
    link: function(scope, element, attrs) {
      /*
      firebase.storage().ref('public/Destruction_of_Leviathan.png').getDownloadURL().then(function(url) {
        $('#leviathan').attr('src', url + '?crossorigin');
      });
      */
    }
  };
});
      
