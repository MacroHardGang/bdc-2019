var app = angular.module("bdc-app", []);

app.controller("bdcController", function($scope, $http) {

    $scope.loading = true;

    $scope.requirementsFormData = {}

    $scope.showQuestionnaire = false;
    $scope.showCars = false;

    $scope.results = [
        {
            'photo': 'https://tinyurl.com/y28rotvo',
            'model': 'Honda Civic',
            'price': '$500',
            'year': '2015'
        },
        {
            'photo': 'https://tinyurl.com/y28rotvo',
            'model': 'Honda Civic',
            'price': '$500',
            'year': '2015'
        },
        {
            'photo': 'https://tinyurl.com/y28rotvo',
            'model': 'Honda Civic',
            'price': '$500',
            'year': '2015'
        },
        {
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
        .post("http://localhost:5000/requirements", $scope.requirementsFormData)
        .success(function(result) {
            $scope.requirementsFormData = {};

            var results = JSON.parse(result);
            for(var i=0;i<18;i++) {
                var car = {
                    'photo': 'https://tinyurl.com/y28rotvo',
                    'model': results.inventory_make_id,
                    'year': results.car_year,
                    'price': results.price
                };
                $scope.results.push(car);
            }
        });


    };


});