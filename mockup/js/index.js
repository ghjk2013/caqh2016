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
  myApp.config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.parseDate = function(dateString) {
	  	var m = moment(dateString, 'll', true);
	    return m.isValid() ? m.toDate() : new Date(NaN);
	  };
	  $mdDateLocaleProvider.formatDate = function(date) {
	    return moment(date).format('ll');
	  };
	});
    
  myApp.factory('PersonalInfoData', function () {
  	
	var personalInfoData = {
		first_name : 'John',
		middle_name : '',
		last_name : 'Doe',
		suffix : '',
		postalCode : '20001',
		email : 'john_koshy@hotmail.com',
		address_line1 : '23 Main St. Washington DC',
		address_line2 : 'DC-12345',
		ssn : '2432-29-5789',
		b_date : new Date('04 Jan 1980'),
		npin : '1234507890',
		p_city : 'Washington',
		p_state : 'DC',
		city : '',
		cityies : ['City1', 'City2' , 'City3'],
		state : '',
		states : ['State1', 'State2', 'State3'],
		b_gender : '',
		genders : ['Male', 'Female'],
		countrys : ['Country1', 'Country2', 'Country3'],
		b_race : 4 ,
		b_races : new GlobalEthnicity().types,
		upin : '',
		fnin : '',
		fnin_country : '',
		langs : new GlobalLangs().g_langs,
    	selectedLangs : [{"code": "en","name": "English"},{"code": "eo","name": "Esperanto"}]
		
		
		
	}; 

    return personalInfoData;
  });
  
  myApp.controller('PersonalInfo', function($scope, PersonalInfoData) {
      $scope.personalInfoData = PersonalInfoData;
    $scope.selectedItem = null;
    $scope.searchText = null;
      $scope.querySearch =  function(query) {
	      var results = query ? $scope.personalInfoData.langs.filter(function filterFn(lang) {
	        return (lang.name.toLowerCase().indexOf(query.toLowerCase()) === 0);
	      } ) : [];
	      return results;
	    }
     
		    
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
		pro_licence_state : 'Alabama',
		pro_licence_states : new GlobalStates().state(),
		pro_licence_no : 'xxxxxxxxxxx1',
		pro_same_state : '',		
		pro_licence_status : 'Active',
		licencestatustypes : new GlobalLicenceStatus().status,
		pro_licence_expire_date : new Date('04 Jan 2070'),
		pro_licence_type : 'MD',
		licencetypes: new GlobalLicenceType().types,
		licencecategoery : 'CType2',
		licencecategories: ['CType1', 'CType2', 'CType3']
		
	}; 
	var licenceData1 = {
		pro_licence_state : 'Alabama',
		pro_licence_states : new GlobalStates().state(),
		pro_licence_no : 'xxxxxxxxxxx1',
		pro_same_state : '',		
		pro_licence_status : 'Active',
		licencestatustypes : new GlobalLicenceStatus().status,
		pro_licence_expire_date : new Date('04 Jan 2070'),
		pro_licence_type : 'MD',
		licencetypes: new GlobalLicenceType().types,
		licencecategoery : 'CType2',
		licencecategories: ['CType1', 'CType2', 'CType3']
		
	}; 
	var licenceDataArray = [licenceData,licenceData1];
    return licenceDataArray;
  });
  
  myApp.controller('Licence', function($scope, LicenceData) {
      $scope.licenceData =LicenceData;
      
  });
  
  myApp.factory('DEAData', function () {
  	
	var dEAData = {
		pro_dea_state : 'State2',
		pro_dea_states : ['State1', 'State2', 'State3'],
		pro_dea_no : '6769870980',
		pro_dea_issue_date: new Date('02 Feb 2015'),
		pro_dea_expire_date : new Date('02 Feb 2020')
				
	}; 
	var dEAData1 = {
		pro_dea_state : 'State2',
		pro_dea_states : ['State1', 'State2', 'State3'],
		pro_dea_no : '6769870980',
		pro_dea_issue_date: new Date('02 Feb 2015'),
		pro_dea_expire_date : new Date('02 Feb 2020')
				
	}; 
	var dEADataArray = [dEAData, dEAData1];
    return dEADataArray;
  });
  
  myApp.controller('DEA', function($scope, DEAData) {
      $scope.dEAData = DEAData;
      
  });
  myApp.factory('CDSData', function () {
  	
	var cDSData = {
		pro_cds_state : 'State2',
		pro_cds_states : ['State1', 'State2', 'State3'],
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
    	time6 : false,
    	time7 : false,
    	pl_type : 'Group Primary Care',
    	pl_types : new GlobalPracticeType().types,
    	pl_name : 'ABC Pediatrics',
		pl_postalCode : '20001',
		pl_email : 'john_koshy@hotmail.com',
		pl_address_line1 : '23 Main',
		pl_address_line2 : 'DC-12345',
		pl_city : 'Washington',
		pl_state : 'DC',
		pl_cityies : [],
		pl_states : [],
		pl_txid : 'acbdd',
		pl_ndi : '48957934',
		pl_gmedicare : '',
		pl_gmedicart : '',
		pl_taxid_type : '',
		pl_taxidtypes : ['Group','Individual'],
		pl_nameasng : '',
		pl_haccessibility : '',
		pl_haccessibilities : ['Building Access','Parking Access','Restroom Access','Wheelchair Access'],
		pl_ptaccessibility : '',
		pl_ptaccessibilities : ['Bus Transportation','Subway','Train'],
		pl_daccessibility : '',
		pl_daccessibilities : ['Text Telephony (TTL)','American Sign Language','Mental/Physical Impairment Services']
	};
	 var practicelocationData1 = {
		time1 : true,
    	time2 : true,
    	time3 : true,
    	time4 : true,
    	time5 : true,
    	time6 : false,
    	time7 : false,
    	pl_type : 'Group Primary Care',
    	pl_types : new GlobalPracticeType().types,
    	pl_name : 'XYZ Pediatrics',
		pl_postalCode : '20001',
		pl_email : 'john_koshy@hotmail.com',
		pl_address_line1 : '23 Main',
		pl_address_line2 : 'DC-12345',
		pl_city : 'Washington',
		pl_state : 'DC',
		pl_cityies : [],
		pl_states : [],
		pl_txid : 'kjdssfsddfs',
		pl_ndi : '34858ewd',
		pl_here : true,
		pl_startdate : new Date('02 Feb 2014'),
		pl_enddate : new Date('01 Feb 2016'),
		pl_pni : '',
		pl_gmedicare : '',
		pl_gmedicart : '',
		pl_taxid_type : '',
		pl_taxidtypes : ['Group','Individual'],
		pl_nameasng : '',
		pl_haccessibility : '',
		pl_haccessibilities : ['Building Access','Parking Access','Restroom Access','Wheelchair Access'],
		pl_ptaccessibility : '',
		pl_ptaccessibilities : ['Bus Transportation','Subway','Train'],
		pl_daccessibility : '',
		pl_daccessibilities : ['Text Telephony (TTL)','American Sign Language','Mental/Physical Impairment Services']
	}; 
var practicelocationDataArray = [practicelocationData,practicelocationData1]; 
    return practicelocationDataArray;
  });
  
  myApp.controller('Practicelocation', function($scope, $compile, $http, PracticelocationData) {
      $scope.practicelocationData = PracticelocationData;
      $scope.practicelocationtmp = {
		time1 : true,
    	time2 : true,
    	time3 : true,
    	time4 : true,
    	time5 : true,
    	time6 : false,
    	time7 : false,
    	pl_type : '',
    	pl_types : new GlobalPracticeType().types,
    	pl_name : '',
		pl_postalCode : '',
		pl_email : '',
		pl_address_line1 : '',
		pl_address_line2 : '',
		pl_city : '',
		pl_state : '',
		pl_cityies : [],
		pl_states : [],
		pl_txid : '',
		pl_ndi : '',
		pl_here : true,
		pl_startdate : new Date(),
		pl_enddate : new Date(),
		pl_pni : '',
		pl_gmedicare : '',
		pl_gmedicart : '',
		pl_taxid_type : '',
		pl_taxidtypes : ['Group','Individual'],
		pl_nameasng : '',
		pl_haccessibility : '',
		pl_haccessibilities : ['Building Access','Parking Access','Restroom Access','Wheelchair Access'],
		pl_ptaccessibility : '',
		pl_ptaccessibilities : ['Bus Transportation','Subway','Train'],
		pl_daccessibility : '',
		pl_daccessibilities : ['Text Telephony (TTL)','American Sign Language','Mental/Physical Impairment Services']
	}; 
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
	  $scope.updatesliderfn("time-range6", false);
	  $scope.updatesliderfn("time-range7", false);
      $scope.updatesliderfn("time-range16", false);
      $scope.updatesliderfn("time-range17",false );
      $scope.action =  function(act){
      	Locale = 'en';
        if(act == "add")
    	{
    		datatmp = $.param({ StreetAddress: $scope.practicelocationtmp.pl_address_line1 + ", " + $scope.practicelocationtmp.pl_address_line2,
	                City: $scope.practicelocationtmp.pl_city,
	                PostalCode: $scope.practicelocationtmp.pl_postalCode,
	                State: $scope.practicelocationtmp.pl_state,
	                CountryCode: "us",
	                Locale: Locale,
	                APIKey: 'uv-facee3692d6e49b335bd4b80586469ac'});
    	}else if(act == "edit1"){
    		datatmp = $.param({ StreetAddress: $scope.practicelocationData[1].pl_address_line1 + ", " + $scope.practicelocationData[1].pl_address_line2,
	                City: $scope.practicelocationData[1].pl_city,
	                PostalCode: $scope.practicelocationData[1].pl_postalCode,
	                State: $scope.practicelocationData[1].pl_state,
	                CountryCode: "us",
	                Locale: Locale,
	                APIKey: 'uv-facee3692d6e49b335bd4b80586469ac'});
    	}
    	else if(act == "edit"){
    		datatmp = $.param({ StreetAddress: $scope.practicelocationData[0].pl_address_line1 + ", " + $scope.practicelocationData[0].pl_address_line2,
	                City: $scope.practicelocationData[0].pl_city,
	                PostalCode: $scope.practicelocationData[0].pl_postalCode,
	                State: $scope.practicelocationData[0].pl_state,
	                CountryCode: "us",
	                Locale: Locale,
	                APIKey: 'uv-facee3692d6e49b335bd4b80586469ac'});
    	}
      	
	    $http({
	       	url: 'http://api.address-validator.net/api/verify',
	        method: "POST",
	        data: datatmp,
	        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
	    })
	    .then(function(responce) {
		    	console.log("HHHHH" + JSON.stringify(responce));
		    	json = responce.data;
		    	console.log("HHHHH" + JSON.stringify(json));
		    	console.log("HHHHH" + JSON.stringify(json.status));
	        	// check API result
	            if (typeof(json.status) != "undefined") {
	                status = json.status;
	                formattedaddress = json.formattedaddress;
	                if(status == "VALID")
	                {
	                	alert("Your address validation is done.");
	                	if(act == "add")
	                	{
	                		process();
	                	}else if(act == "edit1"){
	                		save('practice_location1_boxclose');
	                	}
	                	else if(act == "edit"){
	                		save('practice_location_boxclose');
	                	}
	                }else{
	                	var r = confirm("Address validation has failed. Do you want to varify you address again?");
	                	if (r == true) {
						    //Nothing to Do;
						} else {
							if(act == "add")
	                		{
		                		process();
		                	}else if(act == "edit1"){
		                		save('practice_location1_boxclose');
		                	}
		                	else if(act == "edit"){
		                		save('practice_location_boxclose');
		                	}
						} 
	                }
	                
	                
	            }
	    }, 
	    function(response) { // optional
	            // failed
	    });
	  };
	  function process(){
	    alert($scope.practicelocationData.length);
      	index = $scope.practicelocationData.length;
      	$scope.practicelocationData[index] = angular.copy($scope.practicelocationtmp);
      	tmp = p_location_tmp.replace(/practicelocationData\[0\]/g , 'practicelocationData['+ index +']' );
      	tmp = tmp.replace(/p_location1/g , 'p_location'+ (index + 1));
      	// alert(tmp);
		var linkFn = $compile(tmp);
		var content = linkFn($scope);
        $('#p_location'+ index).after(content);
		buildviewpage();
		save('practice_locationadd_boxclose');
		
		
	  }
  });
  
  myApp.factory('SpecialityData', function () {
  var specialityData = {
  	    speciality : 'Allergy and Immunology',
    	sub_speciality : 'No Subspecialties',
		specialities : new GlobalSpeciality().speciality(),
    	sub_specialities_filtered : ['First Select Speciality'],
    	sub_specialities : new GlobalSpeciality().subspeciality,
    	board_cert: true,
    	board_cert_name: 'American Board of Allergy and Immunology',
    	board_cert_names: ['xxxxyyyzzz','dsadasdasda'],
    	cert_issue_date: new Date('02 Feb 2014'),
    	cert_expire_date: new Date('02 Feb 2024')
	}; 
  var specialityData1 = {
  	    speciality : 'Allergy and Immunology',
    	sub_speciality : 'No Subspecialties',
		specialities : new GlobalSpeciality().speciality(),
    	sub_specialities_filtered : ['First Select Speciality'],
    	sub_specialities : new GlobalSpeciality().subspeciality,
    	board_cert: true,
    	board_cert_name: 'American Board of Allergy and Immunology',
    	board_cert_names: ['xxxxyyyzzz','dsadasdasda'],
    	cert_issue_date: new Date('02 Feb 2014'),
    	cert_expire_date: new Date('02 Feb 2024')
	}; 
  var specialityDataArray = [specialityData,specialityData1];
    // console.log("HHHHH" + JSON.stringify(specialityDataArray[0].specialities));
    return specialityDataArray;
  });
  
  myApp.controller('Speciality', function($scope, SpecialityData, $filter) {
      $scope.specialityData = SpecialityData;
      $scope.filterspeciality = function(speciality_id, index) {
      	// console.log("HHHHH" + speciality_id);
      	// console.log("HHHHH" + JSON.stringify(new GlobalSpeciality().g_speciality[speciality_id].sub));
      	$scope.specialityData[index].sub_specialities_filtered = new GlobalSpeciality().g_speciality[speciality_id].sub;
        $scope.specialityData[index].board_cert_name = new GlobalSpeciality().g_speciality[speciality_id].board;
      }  
      
  });
  
  
  myApp.factory('MedicareData', function () {
	var medicareData = {
		medicare_state : 'State2',
		medicare_states : ['State1', 'State2', 'State3'],
		medicare_no : 'xxxxxxxxxxx'
	}; 

    return medicareData;
  });
  
  myApp.controller('Medicare', function($scope, MedicareData) {
      $scope.medicareData = MedicareData;
      
  });
  
  myApp.factory('MedicaidData', function () {
	var medicaidData = {
		medicaid_state : 'State2',
		medicaid_states : ['State1', 'State2', 'State3'],
		medicaid_no : 'xxxxxxxxxxxid'
	}; 

    return medicaidData;
  });
  
  myApp.controller('Medicaid', function($scope, MedicaidData) {
      $scope.medicaidData = MedicaidData;
      
  });
  
myApp.factory('EmployementData', function () {
  	
	var employementData = {
		employement_name : 'Employer A',
		employement_change_reason : 'Departure Reason A.',
		employement_start_date: new Date('04 Feb 2016'),
		employement_end_date : new Date()
				
	}; 
	var employementData1 = {
		employement_name : 'Employer B',
		employement_change_reason : 'Departure Reason B.',
		employement_start_date: new Date('03 Feb 2014'),
		employement_end_date : new Date('03 Apr 2015')
				
	}; 
	var employementData2 = {
		employement_name : 'Employer C',
		employement_change_reason : 'Departure Reason C.',
		employement_start_date: new Date('03 Sep 2015'),
		employement_end_date : new Date('03 Nov 2015')
				
	}; 
	var employementDataArray = [employementData2,employementData1,employementData];
	employementDataArray.sort(function(a, b){return a.employement_start_date<b.employement_start_date});
	var employementGap = [];
	for (i = 0; i < employementDataArray.length-1; i++) {
		var diff = employementDataArray[i].employement_start_date - employementDataArray[i+1].employement_end_date;
		if(diff > ((1000 * 60 * 60 * 24  * 90))){
			employementDatatmp1 = {
				employement_name : 'Employment Gap',
				employement_change_reason : "- Select Reason -",
				employement_start_date: new Date(employementDataArray[i+1].employement_end_date).setDate(employementDataArray[i+1].employement_end_date.getDate() + 1),
				employement_end_date : employementDataArray[i].employement_start_date - 1,
				display: "none",
				color: "#ae0303",
				employement_change_reasons : ["- Select Reason -", "Gap Reason 1", "Gap Reason 2", "Gap Reason 3"]	
			}; 
			employementGap[employementGap.length] = employementDatatmp1;
		}
	}
	for (i = 0; i < employementGap.length; i++) {
		employementDataArray[employementDataArray.length] = employementGap[i];
	}
	employementDataArray.sort(function(a, b){return a.employement_start_date<b.employement_start_date});
    return employementDataArray;
  });
  
  myApp.controller('Employement', function($scope, EmployementData) {
      $scope.employementData = EmployementData;
      $scope.employementDatatmp = {
			employement_name : '',
			employement_change_reason : "- Select Reason -",
			employement_start_date: new Date(),
			employement_end_date : new Date()
		}; 
	    $scope.add =  function(){
			// console.log(JSON.stringify($scope.employementDataJ));
	    	start_date = $scope.employementDatatmp.employement_start_date;
			end_date = $scope.employementDatatmp.employement_end_date;
			if(start_date > end_date)
			{
				alert("Start date should be less then end date");
				return;
			}else if(end_date > new Date()){
				alert("End date should be less then date");
				return;
			}
			for (i = 0; i < $scope.employementData.length; i++) {
				if($scope.employementData[i].employement_name == "Employment Gap"){
					// alert("tt");
					$scope.employementData.splice(i, 1);
					i--;
				}
				
			}
			console.log(JSON.stringify($scope.employementData));

	      	for (i = 0; i < $scope.employementData.length; i++) {
	      		if($scope.employementDatatmp.employement_start_date >= $scope.employementData[i].employement_start_date
	      			&& $scope.employementDatatmp.employement_start_date <= $scope.employementData[i].employement_end_date){
	      				alert("Start date ( "+ $scope.employementDatatmp.employement_start_date.toDateString().slice(4, 15)  +" ) is overlaping with "+ $scope.employementData[i].employement_name + " employer ( " + $scope.employementData[i].employement_start_date.toDateString().slice(4, 15)  +" - " + $scope.employementData[i].employement_end_date.toDateString().slice(4, 15) + " ).");
	      				return;
	      		}
	      		if($scope.employementDatatmp.employement_end_date >= $scope.employementData[i].employement_start_date
	      			&& $scope.employementDatatmp.employement_end_date <= $scope.employementData[i].employement_end_date){
	      				alert("End date ( "+ $scope.employementDatatmp.employement_end_date.toDateString().slice(4, 15)  +" ) is overlaping with "+ $scope.employementData[i].employement_name + " employer ( " + $scope.employementData[i].employement_start_date.toDateString().slice(4, 15)  +" - " + $scope.employementData[i].employement_end_date.toDateString().slice(4, 15) + " ).");
	      				return;
	      		}
	      	}
	        $scope.employementData[$scope.employementData.length] = angular.copy($scope.employementDatatmp);
	      	$scope.employementData.sort(function(a, b){return a.employement_start_date<b.employement_start_date});
	      	var employementGap = [];
			for (i = 0; i < $scope.employementData.length-1; i++) {
				var diff = $scope.employementData[i].employement_start_date - $scope.employementData[i+1].employement_end_date;
				if(diff > ((1000 * 60 * 60 * 24  * 90))){
					employementDatatmp1 = {
						employement_name : 'Employment Gap',
						employement_change_reason : '',
						employement_start_date: new Date($scope.employementData[i+1].employement_end_date).setDate($scope.employementData[i+1].employement_end_date.getDate() + 1),
						employement_end_date : $scope.employementData[i].employement_start_date - 1,
						display: "none",
						color: "#ae0303",
						employement_change_reasons : ["- Select Reason -", "Gap Reason 1", "Gap Reason 2", "Gap Reason 3"]	
					}; 
					employementGap[employementGap.length] = employementDatatmp1;
				}
			}
			for (i = 0; i < employementGap.length; i++) {
				$scope.employementData[$scope.employementData.length] = employementGap[i];
			}
			$scope.employementData.sort(function(a, b){return a.employement_start_date<b.employement_start_date});
	      	save('employee_boxclose');
	   };
	   $scope.deleteme =  function(index1){
	   		// console.log(JSON.stringify($scope.employementData));
	   		$scope.employementData.splice(index1, 1);
	   		// console.log(JSON.stringify($scope.employementData));
	   		for (i = 0; i < $scope.employementData.length; i++) {
	   			// alert($scope.employementData[i].employement_name);
				if($scope.employementData[i].employement_name == "Employment Gap"){
					// alert("tt");
					$scope.employementData.splice(i, 1);
					i--;
				}
				
			}
			$scope.employementData.sort(function(a, b){return a.employement_start_date<b.employement_start_date});
			// console.log(JSON.stringify($scope.employementData));
			var employementGap = [];
			for (i = 0; i < $scope.employementData.length-1; i++) {
				var diff = $scope.employementData[i].employement_start_date - $scope.employementData[i+1].employement_end_date;
				if(diff > ((1000 * 60 * 60 * 24  * 90))){
					// alert(i);
					employementDatatmp1 = {
						employement_name : 'Employment Gap',
						employement_change_reason : "- Select Reason -",
						employement_start_date: new Date($scope.employementData[i+1].employement_end_date).setDate($scope.employementData[i+1].employement_end_date.getDate() + 1),
						employement_end_date : $scope.employementData[i].employement_start_date - 1,
						display: "none",
						color: "#ae0303",
						employement_change_reasons : ["- Select Reason -", "Gap Reason 1", "Gap Reason 2", "Gap Reason 3"]	
					}; 
					employementGap[employementGap.length] = employementDatatmp1;
				}
			}
			for (i = 0; i < employementGap.length; i++) {
				$scope.employementData[$scope.employementData.length] = employementGap[i];
			}
			$scope.employementData.sort(function(a, b){return a.employement_start_date<b.employement_start_date});
	   };
	 });
	  myApp.controller('Login', function($scope, $location) {
      $scope.usertmp = {username : "", pwd : ""};
      $scope.user = {username : "caqh2016", pwd : "1234"};
      $scope.authenticate =  function(){
	      	if($scope.usertmp.username == $scope.user.username && $scope.usertmp.pwd == $scope.user.pwd)
	      	{
	      		// document.cookie = "user=John;exp="+new Date();
	      		// document.referrer = "tttt";
	      		window.location.href = "home.htm";
	      		
	      	}
	      	else
	      	{
	      		$('#acct').removeClass("error");
	      		$('#password').removeClass("error");
	      		if($scope.usertmp.username != $scope.user.username)
	      		{
	      			$('#acct').addClass("error");
	      		}
	      		if($scope.usertmp.pwd != $scope.user.pwd)
	      		{
	      			$('#password').addClass("error");
	      		}
	      		$('#box').addClass("animate");
	      		setTimeout(function() {
					$('#box').removeClass("animate");
				}, 500);
	      		
	      		
	      	}
	  };
	  
	   
  });


