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
		postalCode : '20001',
		email : 'john_koshy@hotmail.com',
		address_line1 : '23 Main St. Washington DC',
		address_line2 : 'DC-12345',
		fax : 'xxx-xx-1111',
		b_date : new Date('04 Jan 1980'),
		m_daytime_phone : '(123) - 450 - 7890',
		p_city : 'Washington',
		p_state : 'DC',
		city : '',
		cityies : ['city1', 'city2' , 'city3'],
		state : '',
		states : ['state1', 'state2', 'state3'],
		b_gender : '',
		genders : ['Male', 'Female'],
		countrys : ['country1', 'country2', 'country3'],
		b_races : ['Ethnicity1', 'Ethnicity2', 'Ethnicity3'],
		ssn : '',
		npin : '',
		upin : '',
		fnin : '',
		fnin_country : '',
		langs:['English', 'Spanish','French']
		
	}; 

    return personalInfoData;
  });
  
  myApp.controller('PersonalInfo', function($scope, PersonalInfoData) {
      $scope.personalInfoData = PersonalInfoData;
      $scope.fillbyzipfn = function(zipcode) {
      	if (zipcode != undefined && zipcode.length == 5) {
   
    // Make Ajax call, etc
    var geocoder = new google.maps.Geocoder();
	//var $this = $(this);
    //if ($this.val().length == 5) {
        geocoder.geocode({ 'address': zipcode }, function (result, status) {
            var state = "N/A";
            var city = "N/A";
            console.log(result);
            //start loop to get state from zip
            if(result.length > 0) {
            for (var component in result[0]['address_components']) {
                for (var i in result[0]['address_components'][component]['types']) {
                    if (result[0]['address_components'][component]['types'][i] == "administrative_area_level_1") {
                        state = result[0]['address_components'][component]['short_name'];
                        // do stuff with the state here!
                        console.log(state);
                       // document.getElementById("p_state").value = state;
                        // get city name
                        city = result[0]['address_components'][1]['long_name'];
                        // Insert city name into some input box
                        console.log(city);
                        //document.getElementById("p_city").value = city;
                        $scope.personalInfoData.p_city =  city;
                        $scope.personalInfoData.p_state =  state;
      					$scope.$apply();
                       
                    }
                }
            }
           }
        });
 
  }
  
  
  

       
    }
      
  });
  
  myApp.factory('LicenceData', function () {
  	
	var licenceData = {
		pro_licence_state : 'state2',
		pro_licence_states : ['state1', 'state2', 'state3'],
		pro_licence_no : 'xxxxxxxxxxx1',
		pro_same_state : '',		
		licencestatus : 'Active',
		licencestatustypes : ['Active', 'Blocked', 'Suspended'],
		pro_licence_expire_date : new Date('04 Jan 2070'),
		licencetype : 'Type2',
		licencetypes: ['Type1', 'Type2', 'Type3'],
		licencecategoery : 'CType2',
		licencecategories: ['CType1', 'CType2', 'CType3']
		
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
		pro_dea_issue_date: new Date('02 Feb 2015'),
		pro_dea_expire_date : new Date('02 Feb 2020')
				
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
		pro_cds_issue_date: new Date('02 Feb 2014'),
		pro_cds_expire_date : new Date('02 Feb 2024')
				
	}; 

    return cDSData;
  });
  
  myApp.controller('CDS', function($scope, CDSData) {
      $scope.cDSData = CDSData;
      
  });
  
  myApp.factory('IdentificationData', function () {
  var identificationData = {
		upin : '',
    	npi : ''
	}; 

    return identificationData;
  });
  
  myApp.controller('Identification', function($scope, IdentificationData) {
      $scope.identificationData = IdentificationData;
      
  });
  
  myApp.factory('PracticelocationData', function () {
  var practicelocationData = {
		time1 : true,
    	time2 : true,
    	time3 : true,
    	time4 : true,
    	time5 : true,
    	time6 : true,
    	time7 : true
	}; 

    return practicelocationData;
  });
  
  myApp.controller('Practicelocation', function($scope, PracticelocationData) {
      $scope.practicelocationData = PracticelocationData;
       $scope.updatesliderfn =  function(slider_id,time_checked){

	if(time_checked == false){
	
	$("#" + slider_id+ " *").css("pointer-events", "none");
	$("#" + slider_id+ " *").css("opacity", "0.4");
	}
	else{
		$("#" + slider_id+ " *").css("pointer-events", "auto");
		$("#" + slider_id+ " *").css("opacity", "1");
	}
}
      
  });


