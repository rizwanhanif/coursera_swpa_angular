(function(){
  'use strick';
  angular.module('MyFirstApp', [] )

  .controller('MyFirstContrller', function( $scope ) {

    $scope.name = "test name";
    $scope.sayHellow = function()
    {
      return "Hello";
    };
  });
}
)();
