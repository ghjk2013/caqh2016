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
		middle_name : '',
		last_name : 'M Doe',
		suffix : '',
		email : 'john_koshy@hotmail.com',
		address_line1 : '23 Main St. Washington DC',
		address_line2 : 'DC-12345',
		dateofbirth : '04 Jan 1980',
		fax : 'xxx-xx-1111',
		b_date : new Date('04 Jan 1980'),
		m_daytime_phone : '(123) - 450 - 7890',
		city : '',
		cityies : ['city1', 'city2', 'city3'],
		state : '',
		states : ['state1', 'state2', 'state3'],
		b_gender : '',
		genders : ['Male', 'Female'],
		countrys : ['country1', 'country2', 'country3'],
		ssn : '',
		npin : '',
		upin : '',
		fnin : '',
		fnin_country : '',
		
	}; 

    return personalInfoData;
  });
  
  myApp.controller('PersonalInfo', function($scope, PersonalInfoData) {
      $scope.personalInfoData = PersonalInfoData;
      
  });
  
  myApp.factory('LicenceData', function () {
  	
	var licenceData = {
		pro_licence_state : 'state2',
		pro_licence_states : ['state1', 'state2', 'state3'],
		pro_licence_no : 'xxxxxxxxxxx1',
		pro_same_state : '',		
		licencestatus : 'Active',
		licencestatustypes : ['Active', 'Blocked', 'Suspended'],
		pro_licence_expire_date : '04 Jan 2070',
		licencetype : 'Type2',
		licencetypes: ['Type1', 'Type2', 'Type3'],
		licencecategoery : 'CType2',
		licencecategoeries: ['CType1', 'CType2', 'CType3']
		
	}; 

    return licenceData;
  });
  
  myApp.controller('Licence', function($scope, LicenceData) {
      $scope.licenceData =LicenceData;
      
  });
  
  myApp.factory('DEAData', function () {
  	
	var dEAData = {
		pro_dea_state : 'state2',
		pro_dea_states : ['state1', 'state2', 'state3'],
		pro_dea_no : 'xxxxxxxxxxx1',
		pro_dea_issue_date: '02 Feb 2015',
		pro_dea_expire_date : '02 Feb 2020'
				
	}; 

    return dEAData;
  });
  
  myApp.controller('DEA', function($scope, DEAData) {
      $scope.dEAData = DEAData;
      
  });
  myApp.factory('CDSData', function () {
  	
	var cDSData = {
		pro_cds_state : 'state2',
		pro_cds_states : ['state1', 'state2', 'state3'],
		pro_cds_no : 'xxxxxxxxxxx',
		pro_cds_issue_date: '02 Feb 2014',
		pro_cds_expire_date : '02 Feb 2024'
				
	}; 

    return cDSData;
  });
  
  myApp.controller('CDS', function($scope, CDSData) {
      $scope.cDSData = CDSData;
      
  });


