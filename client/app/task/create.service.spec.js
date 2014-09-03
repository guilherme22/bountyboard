'use strict';

describe('Service: Task', function () {

  // load the service's module
  beforeEach(module('jobApplicationApp'));

  // instantiate service
  var create;
  beforeEach(inject(function (_create_) {
    create = _create_;
  }));

  it('should do something', function () {
    expect(!!create).toBe(true);
  });

});
