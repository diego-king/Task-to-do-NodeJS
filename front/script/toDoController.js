var toDoApp = angular.module("toDo");
toDoApp.controller('toDoControl', function($scope, $http) {
    $scope.loadNames = function() {
        $http.get("/db/names").then(function(response) {
            var names = response.data;
            if (names.length > 0) {
                $scope.names = [];
                for (i=0; i < names.length; i++) {
                    $scope.names.push(names[i]);
                }
                if ($scope.names.indexOf($scope.name) == -1) 
                    $scope.name = $scope.names[0];
                $scope.findToDos();
            }
        });
    }

    $scope.findToDos = function() {
        var name = $scope.name;
        $http.get("/db/findToDos/"+name).then(function(response) {
            $scope.toDos = response.data;
            for (i = 0; i < $scope.toDos.length; i++) {
                $scope.toDos[i].id = $scope.toDos[i]._id;
            }
        });
    }

    $scope.removeToDo = function(id) {
        $http.delete("/db/todo/"+id).then(function(response) {
            if (response.data == "OK") {
                $scope.loadNames();
            }
        });
    }

    $scope.updateToDo = function(toDo) {
        toDo.isDone = !toDo.isDone;
        $http.put("/db/todo", toDo).then(function(response) {
            if (response.data == "OK") {
                $scope.findToDos();
            }
        });
    }

    $scope.createNewToDo = function() {
        var newToDo = {}
        if (isEmptyStr($scope.newToDo.name)
            || isEmptyStr($scope.newToDo.task) 
            || !$scope.newToDo.deadline)
            return;

        newToDo.deadline = formatDate($scope.newToDo.deadline);
        newToDo.name = $scope.newToDo.name;
        newToDo.task = $scope.newToDo.task;
        newToDo.isDone = false;
        $http.post("/db/todo", newToDo).then(function(response) {
            if (response.data == "OK") {
                $scope.loadNames();
                if (newToDo.name == $scope.name)
                    $scope.findToDos();
                $scope.newToDo.name = "";
                $scope.newToDo.task = "";
                $scope.newToDo.deadline = null;
            }
        });
    }
});