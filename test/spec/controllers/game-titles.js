'use strict';

describe('Controller: GameTitlesCtrl', function () {

  // load the controller's module
  beforeEach(module('everythingGamingApp'));

  var GameTitlesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameTitlesCtrl = $controller('GameTitlesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GameTitlesCtrl.awesomeThings.length).toBe(3);
  });
});
