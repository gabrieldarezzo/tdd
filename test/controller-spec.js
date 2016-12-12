/* jasmine specs for controllers go here */
describe('Karma Test Controllers', function() {

  beforeEach(module('app'));

  describe('MainCtrl', function(){
    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('MainCtrl', {$scope: scope});
    }));


    it('should create initialed message', function() { 
      expect(scope.message).toEqual("Hello World");      
    });
  });


  describe('ShowCtrl', function(){
    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
      
       scope = $rootScope.$new();
      ctrl = $controller('ShowCtrl', {$scope: scope});
    }));
    
    it('should create initialed message', function() { 
      expect(scope.message).toEqual("Show The World");      
    });

  });
  
  
  describe('CustomerCtrl', function(){
    var scope, ctrl;


    beforeEach(inject(function($rootScope, $controller) {      
       scope = $rootScope.$new();       

      ctrl = $controller('CustomerCtrl', {$scope: scope});
    }));
    
    it('should create initialed message', function() { 
      
      expect(scope.custumerName).toEqual("Bob's Burgers");      
    });

  });
  
});