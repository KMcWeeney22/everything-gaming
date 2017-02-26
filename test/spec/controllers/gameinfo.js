'use strict';

describe('Controller: GameinfoCtrl', function () {

  // load the controller's module
  beforeEach(module('everythingGamingApp'));

  var GameinfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameinfoCtrl = $controller('GameinfoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GameinfoCtrl.awesomeThings.length).toBe(3);
  });
});
