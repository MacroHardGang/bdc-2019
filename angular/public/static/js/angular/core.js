var app = angular.module("bdc-app", []);

app.controller("bdcController", function($scope, $http) {

    $scope.loading = true;

    $scope.requirementsFormData = {}

    $scope.showQuestionnaire = false;
    $scope.showCars = false;

    $scope.results = [
        {
            'id': '0',
            'photo': 'https://tinyurl.com/y28rotvo',
            'model': 'Honda Civic',
            'price': '$500',
            'year': '2015'
        },
        {
            'id': '1',
            'photo': 'https://tinyurl.com/y28rotvo',
            'model': 'Honda Civic',
            'price': '$500',
            'year': '2015'
        },
        {
            'id': '2',
            'photo': 'https://tinyurl.com/y28rotvo',
            'model': 'Honda Civic',
            'price': '$500',
            'year': '2015'
        },
        {
            'id': '3',
            'photo': 'https://tinyurl.com/y28rotvo',
            'model': 'Honda Civic',
            'price': '$500',
            'year': '2015'
        }
    ]

    $scope.showQuestionnaireButton = function() {
        $scope.showQuestionnaire = true;
    };

    $scope.showCarsButton = function() {
        $scope.showCars = true;
        console.log($scope.requirementsFormData)

        $http
        .post("localhost:5000/requirements", $scope.requirementsFormData)
        .success(function(result) {
            $scope.requirementsFormData = {};
            console.log(results)
        });

    };


});