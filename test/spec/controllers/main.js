'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('provaApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a todo item to our LocalStoraged todo list ', function () {
    var current_items_number=0;
    if (scope.todos.length){
      current_items_number=scope.todos.length;
    }
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.todo = 'Test 1';
    scope.addTodo();
    expect(scope.todos.length).toBe(current_items_number+2);
  });

});
