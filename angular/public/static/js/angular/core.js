var app = angular.module("bdc-app", []);

app.controller("bdcController", function($scope, $http) {

    $scope.loading = true;

    $scope.requirementsFormData = {}

    $scope.showQuestionnaire = false;
    $scope.showCars = false;

    $scope.showQuestionnaireButton = function() {
        $scope.showQuestionnaire = true;
    };

    $scope.showCarsButton = function() {
        $scope.showCars = true;
        console.log($scope.requirementsFormData)

        $http
        .post("http://localhost:5000/requirements", $scope.requirementsFormData)
        .success(function(result) {
            $scope.requirementsFormData = {};
            console.log(results)
        });

    };


});