(function(){
  'use strick';
  angular.module('NameCalculator', [] )

  .controller('NameCalculatorContrller', function( $scope ) {

    $scope.name = "";
    $scope.totalValue = "";

    $scope.onCalculateTotalValue = function()
    {
      var temp = calculateTotalValue($scope.name);
        $scope.totalValue = temp;
    };

    function calculateTotalValue(string)
    {
      var totalNameValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalNameValue += string.charCodeAt(i);
      }
      return totalNameValue;
    };
  });
}
)();
