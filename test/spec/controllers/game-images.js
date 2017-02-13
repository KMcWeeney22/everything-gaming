'use strict';

describe('Controller: GameImagesCtrl', function () {

  // load the controller's module
  beforeEach(module('everythingGamingApp'));

  var GameImagesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameImagesCtrl = $controller('GameImagesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GameImagesCtrl.awesomeThings.length).toBe(3);
  });
});
