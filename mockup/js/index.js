var myApp = angular.module('MyApp',['ngMaterial']);
  // myApp.controller('DemoCtrl', function($scope) {
      // $scope.first_name = 'John1111';
	  // $scope.last_name = 'M Doe';
      // $scope.email = 'john_koshy@hotmail.com';
      // $scope.address_line1 = '23 Main St. Washington DC, DC-12345';
      // $scope.dateofbirth = '04 Jan 1980';
      // $scope.fax = 'xxx-xx-1111';
      // $scope.m_daytime_phone = '(123) - 450 - 7890';
      // $scope.city = 'Select a City';
      // $scope.cityies = ['city1','city2','city3'];
      // $scope.state = 'Select a State';
      // $scope.states = ['state1','state2','state3'];
      // $scope.b_gender = '';
      // $scope.genders = ['Male', 'Female'];
	  // $scope.countrys = ['country1','country2','country3'];
  // });
  
  myApp.factory('PersonalInfoData', function () {
  	
	var personalInfoData = {
		first_name : 'John',
		last_name : 'M Doe',
		email : 'john_koshy@hotmail.com',
		address_line1 : '23 Main St. Washington DC, DC-12345',
		dateofbirth : '04 Jan 1980',
		fax : 'xxx-xx-1111',
		m_daytime_phone : '(123) - 450 - 7890',
		city : 'Select aCity',
		cityies : ['city1', 'city2', 'city3'],
		state : 'Select a State',
		states : ['state1', 'state2', 'state3'],
		b_gender : '',
		genders : ['Male', 'Female'],
		countrys : ['country1', 'country2', 'country3']
	}; 

    return personalInfoData;
  });
  
  myApp.controller('PersonalInfo', function($scope, PersonalInfoData) {
      $scope.personalInfoData = PersonalInfoData;
      
  });
  
  // myApp.controller('OverlayCtrl2', function($scope) {
      // $scope.first_name = 'John';
	  // $scope.last_name = 'M Doe';
      // $scope.email = 'john_koshy@hotmail.com';
      // $scope.address_line1 = '23 Main St. Washington DC, DC-12345';
      // $scope.dateofbirth = '04 Jan 1980';
      // $scope.fax = 'xxx-xx-1111';
      // $scope.m_daytime_phone = '(123) - 450 - 7890';
      // $scope.city = 'Select a City';
      // $scope.cityies = ['city1','city2','city3'];
      // $scope.state = 'Select a State';
      // $scope.states = ['state19','state29','state39'];
      // $scope.b_gender = '';
      // $scope.genders = ['Male', 'Female'];
	  // $scope.countrys = ['country1','country2','country3'];
//       
  // });


