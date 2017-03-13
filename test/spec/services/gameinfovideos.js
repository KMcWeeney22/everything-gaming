'use strict';

describe('Service: gameInfoVideos', function () {

  // load the service's module
  beforeEach(module('everythingGamingApp'));

  // instantiate service
  var gameInfoVideos;
  beforeEach(inject(function (_gameInfoVideos_) {
    gameInfoVideos = _gameInfoVideos_;
  }));

  it('should do something', function () {
    expect(!!gameInfoVideos).toBe(true);
  });

});
