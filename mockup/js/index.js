angular
  .module('MyApp',['ngMaterial'])
  .controller('DemoCtrl', function($scope) {
      $scope.first_name = 'John';
	  $scope.last_name = 'M Doe';
      $scope.email = 'john_koshy@hotmail.com';
      $scope.address_line1 = '23 Main St. Washington DC, DC-12345';
      $scope.dateofbirth = '04 Jan 1980';
      $scope.fax = 'xxx-xx-1111';
      $scope.m_daytime_phone = '(123) - 450 - 7890';
      $scope.city = 'Select a City';
      $scope.cityies = ['city1','city2','city3'];
      $scope.state = 'Select a State';
      $scope.states = ['state1','state2','state3'];
      $scope.b_gender = '';
      $scope.genders = ['Male', 'Female'];
	  $scope.countrys = ['country1','country2','country3'];
      
  });


