/*
var form = {
	register: document.getElementById('register'),
	email: document.getElementById('email'),
	text: document.getElementById('textarea'),
	name: document.getElementById('name')
}
//handles form submission
form.register.addEventListener('submit', submitHandler);
var confirmEmail = /^[a-z0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
function submitHandler(e) {
	var msg = "";
	if(name != ""){
		msg+= "\nyour name";
	}
	if(!confirmEmail.test(form.email.value)){
		msg+= "\nYour email address";
	}
	if(text == ""){
		msg+= "\nyou have to type a message"
	}
	else{
 		msg = "Your messag has been sent!";
 		e.preventDefault();
 	}
	alert(msg);
}

//detects change of email address
form.email.addEventListener('change', emailHandler);
function emailHandler(e){
	if(e.target.value == ""){
		alert("you forgot your email");
	}
}
*/