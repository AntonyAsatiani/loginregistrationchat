$(function()
	{
$("form[name='reg']").validate({
	rules:
	{
		firstname: "required",
		lastname: "required",
		email: {
			required: true,
			email:true
		},
		password: {
			required: true,
			minlength: 6
		},
		mobile: {
			required: true,
			minlength: 9
		},
		personalnumber: {
			required: true,
			minlength: 11
		}
	},
	messages: {
		firstname: "Please enter your firstname",
		lastname: "Please enter your lastname",
		email: "Please enter your email",
		password: {
			required: "Please provide a password",
			minlength: "Your password must be at least 6 characters long"
		},
		mobile: {
			required: "Please enter phonenumber",
			minlength: "phonenumber must be at least 9 characters long"
		},
		personalnumber: {
			required: "Please enter your personal number",
			minlength: "Personal number must be at least 11 characters long"
		}
	},
	submitHandler: function(form)
	{
		form.submit();
	}
});

});