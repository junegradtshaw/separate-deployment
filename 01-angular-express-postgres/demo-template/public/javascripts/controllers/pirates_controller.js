app.controller('PiratesController', ['$scope', 'PiratesService', function ($scope, PiratesService) {
  PiratesService.all().then(function(pirates) {

    console.log('****', pirates);
  })
}])
