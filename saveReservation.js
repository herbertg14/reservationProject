$('document').ready(function(){
	console.log("JQuery Loaded");

	$('#theButton').on('click',function(){
		var name = $('#name').val().trim();
		var phone = $('#phone').val().trim();
		var email = $('#email').val().trim();
		var unique_id = $('#unique_id').val().trim();

		var theObject = {
			name: name,
			phone: phone,
			email: email,
			unique_id: unique_id
		}
		console.log(theObject);
		return theObject;
	});//end theButton.click



});//end document.ready