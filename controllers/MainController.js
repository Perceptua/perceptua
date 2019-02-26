app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Delta-Lyceum';
  $scope.philosophers = [
    {
      id: '0',
      name: "Socrates",
      born: 'c. 470 BC',
      died: '399 BC',
      taught: "Plato",
      img: "images/socrates.jpg",
      studentImg: "images/plato-2.jpg"
    },
    {
      id: '1',
      name: "Plato",
      born: 'c. 428 BC',
      died: 'c. 348 BC',
      taught: "Aristotle",
      img: "images/plato-2.jpg",
      studentImg: "images/1200px-Aristotle_Altemps_Inv8575.jpg"
    },
    {
      id: '2',
      name: "Aristotle",
      born: '384 BC',
      died: '322 BC',
      taught: "Alexander",
      img: "images/1200px-Aristotle_Altemps_Inv8575.jpg",
      studentImg: "images/alexander-the-great-3.jpg"
    }
  ]
}]);
