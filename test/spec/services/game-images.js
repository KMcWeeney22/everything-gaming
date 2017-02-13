'use strict';

describe('Service: gameImages', function () {

  // load the service's module
  beforeEach(module('everythingGamingApp'));

  // instantiate service
  var gameImages;
  beforeEach(inject(function (_gameImages_) {
    gameImages = _gameImages_;
  }));

  it('should do something', function () {
    expect(!!gameImages).toBe(true);
  });

});
