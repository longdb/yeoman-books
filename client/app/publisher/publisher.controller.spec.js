'use strict';

describe('Controller: PublisherCtrl', function () {
  // load the controller's module
  beforeEach(module('booksApp'));

  var PublisherCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PublisherCtrl = $controller('PublisherCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});