app.controller("MainController", function($scope, $http, CatService){
   // no instance variables here....
});

app.controller("CatsIndexController", function($scope, CatService){
  CatService.getCats().then(function(payload){
    $scope.cat_collection = payload.data;
  }, function(error){
  });
});

app.controller("CatsShowController", function($scope, CatService, $routeParams){
  the_id = $routeParams.id;
  CatService.getCat(the_id).then(function(payload){
    $scope.singleCat = payload.data[0];
  }, function(error){
  });
});

app.controller("CatsNewController", function($scope, CatService, $routeParams){
  $scope.cat={};
  $scope.addCat=function() {
    CatService.addCat($scope.cat).then(function(result) {
    })
  }
});
