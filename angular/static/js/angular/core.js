var app = angular.module("bdc-app", []);

app.controller("bdcController", function($scope, $http) {

    $scope.loading = true;

    $scope.showQuestionnaire = false;

    $scope.showQuestionnaireButton = function() {
        console.log("hi");
        $scope.showQuestionnaire = true;
    };

});