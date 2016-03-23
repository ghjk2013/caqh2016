angular
  .module('MyApp',['ngMaterial'])
  .controller('DemoCtrl', function($scope) {
      $scope = {
	      first_name: 'John',
	      last_name: 'M Doe',
	      email: 'john_koshy@hotmail.com',
	      address_line1: '23 Main St. Washington DC, DC-12345',
	      dateofbirth: '04 Jan 1980',
	      fax: 'xxx-xx-1111',
	      m_daytime_phone: '(123) - 450 - 7890',
	      city: 'Select a City',
	      cityies: ['Select a City','city1','city2','city3'],
	      state: 'Select a State',
	      states: ['Select a State','state1','state2','state3']
	      
    };
  });


