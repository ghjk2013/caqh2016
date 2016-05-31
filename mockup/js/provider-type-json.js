function GlobalProviderType() {
	this.p_types = [{value:1, text:'MD', description:'Medical Doctor (MD)'},
	{value:2, text:'DDS', description:'Doctor of Dental Surgery (DDS)'},
	{value:3, text:'DMD', description:'Doctor of Dental Medicine (DMD)'},
	{value:4, text:'DPM', description:'Doctor of Podiatric Medicine (DPM)'},
	{value:5, text:'DC', description:'Doctor of Chiropractic (DC)'},
	{value:6, text:'DO', description:'Osteopathic Doctor (DO)'},
	{value:7, text:'ACU', description:'Acupuncturist'},
	{value:8, text:'ADC', description:'Alcohol/Drug Counselor'},
	{value:9, text:'AUD', description:'Audiologist'},
	{value:10, text:'BT', description:'Biofeedback Technician'},
	{value:11, text:'CRNA', description:'Certified Registered Nurse Anesthetist'},
	{value:12, text:'CSP', description:'Christian Science Practitioner'},
	{value:13, text:'CNS', description:'Clinical Nurse Specialist'},
	{value:14, text:'CP', description:'Clinical Psychologist'},
	{value:15, text:'CSW', description:'Clinical Social Worker'},
	{value:16, text:'DT', description:'Dietician'},
	{value:17, text:'LPN', description:'Licensed Practical Nurse'},
	{value:18, text:'MFT', description:'Marriage/Family Therapist'},
	{value:19, text:'MT', description:'Massage Therapist'},
	{value:20, text:'ND', description:'Naturopath'},
	{value:21, text:'NEU', description:'Neuropsychologist'},
	{value:22, text:'MW', description:'Midwife'},
	{value:23, text:'NMW', description:'Nurse Midwife'},
	{value:24, text:'NP', description:'Nurse Practitioner'},
	{value:25, text:'LN', description:'Nutritionist'},
	{value:26, text:'OT', description:'Occupational Therapist'},
	{value:27, text:'OPT', description:'Optician'},
	{value:28, text:'OD', description:'Optometrist'},
	{value:29, text:'PHA', description:'Pharmacist'},
	{value:30, text:'PT', description:'Physical Therapist'},
	{value:31, text:'PA', description:'Physician Assistant'},
	{value:32, text:'PC', description:'Professional Counselor'},
	{value:33, text:'RN', description:'Registered Nurse'},
	{value:34, text:'RNFA', description:'Registered Nurse First Assistant'},
	{value:35, text:'RT', description:'Respiratory Therapist'},
	{value:36, text:'SLP', description:'Speech Pathologist'},
	{value:37, text:'AA', description:'Anesthesia Assistant'},
	{value:38, text:'ABA', description:'Applied Behavioral Analyst'},
	{value:39, text:'APN', description:'Advanced Practice Nurse'},
	{value:40, text:'AT', description:'Athletic Trainers'},
	{value:41, text:'GC', description:'Genetic Counselor'},
	{value:42, text:'SA', description:'Surgical Assistant'},
	{value:43, text:'HOS', description:'Hospitalist'}
];

this.types = function() {
		var n = [];
		var s = -1;
		for (var i = 0; i < this.p_types.length; i++) {
		    this.p_types[i];
		    n[s++] = {value: this.p_types[i].text, text: this.p_types[i].description};   
		}
		return n;
	};
}