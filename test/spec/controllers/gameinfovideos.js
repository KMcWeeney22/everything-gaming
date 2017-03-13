'use strict';

describe('Controller: GameinfovideosCtrl', function () {

  // load the controller's module
  beforeEach(module('everythingGamingApp'));

  var GameinfovideosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameinfovideosCtrl = $controller('GameinfovideosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GameinfovideosCtrl.awesomeThings.length).toBe(3);
  });
});
