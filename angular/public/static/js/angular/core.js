var app = angular.module("bdc-app", []);

app.controller("bdcController", function($scope, $http) {

    $scope.loading = true;

    $scope.requirementsFormData = {}

    $scope.showQuestionnaire = false;
    $scope.showCars = false;

    $scope.results = []


    $scope.showQuestionnaireButton = function() {
        $scope.showQuestionnaire = true;
    };

    $scope.showCarsButton = function() {
        $scope.showCars = true;
        console.log($scope.requirementsFormData)

        $http
        .post("http://localhost:5000/requirements", $scope.requirementsFormData)
        .success(function(results) {
            $scope.requirementsFormData = {};

            for(var i=0;i<18;i++) {
                var car = {
                    'photo': 'https://tinyurl.com/y28rotvo',
                    'model': results[i].inventory_make + ' ' + results[i].inventory_model,
                    'year': results[i].car_year,
                    'price': results[i].price
                };
                $scope.results.push(car);
            }
        });


    };


});