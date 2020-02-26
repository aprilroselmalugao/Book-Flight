function checkComplete(){
	var fname=document.forms["myform"]["fname"];
	var lname=document.forms["myform"]["lname"];
	var gender=document.forms["myform"]["gender"];
	var email_ad=document.forms["myform"]["email_ad"];
	var origin=document.forms["myform"]["origin"];
	var destination=document.forms["myform"]["destination"];
	var departure=document.getElementById("departure").value;
	var return_d=document.getElementById("return_d").value;


	if(fname.value==""){
		window.alert("Please enter your first name.");
		fname.focus();
	}

	if(lname.value==""){
		window.alert("Please enter your last name.");
		lname.focus();
	}

	if(gender.value==""){
		window.alert("Please select gender.");
		gender.focus();
	}

	if(email_ad.value==""){
		window.alert("Please enter your email address.");
		email_ad.focus();
	}
	else{
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myform.email_ad.value)){
 		}
 		else{
    		window.alert("You have entered an invalid email address!");
    		email_ad.focus();
    	}
	}

	if(origin.value==""){
		window.alert("Please enter origin location.");
		origin.focus();
	}

	if(destination.value==""){
		window.alert("Please enter destination.");
		destination.focus();
	}

	if(departure.value==""){
		window.alert("Please enter departure.");
		departure.focus();
	}

	if(return_d.value=""){
		window.alert("Please enter return date.");
		return_d.focus();
	}

	if(Date.parse(departure)> Date.parse(return_d))
    {
        window.alert("Invalid");
    }
    else{
    	return true;
    }

	return true; 
}