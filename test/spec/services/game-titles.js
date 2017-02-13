'use strict';

describe('Service: gameTitles', function () {

  // load the service's module
  beforeEach(module('everythingGamingApp'));

  // instantiate service
  var gameTitles;
  beforeEach(inject(function (_gameTitles_) {
    gameTitles = _gameTitles_;
  }));

  it('should do something', function () {
    expect(!!gameTitles).toBe(true);
  });

});
