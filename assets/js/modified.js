/*
	WhatsApp Direct Message by
	www.alkathirikhalid.com | @alkathirikhalid
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/**
* Generate year based on current year
*/
function init(){
	document.getElementsByTagName("currentyear")[0].innerHTML = new Date().getFullYear();
}

/**
* Send WhatsApp Message
*/
function contact(contactNumber){
	window.open("https://wa.me/"+contactNumber+"?text=I'm%20interested%20in%20www.amalthoib.com");
}

/**
* Send Customme Message
*/
function message(){
	// Get input values
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	// Convert text string to URLEndoded
	var urlencodedtext = name.replace(" ","%20")+", "+email.replace(" ","%20")+", "+message.replace(" ","%20");
	// Validate the input data exceed the encoded prefilled constants
	if (urlencodedtext.length > 8){
	// Open WhatsApp	
	window.open("https://wa.me/60179179304?text="+urlencodedtext);
	// Clear input values
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("message").value = "";
	} else {
		alert("Please complete filling up the form!");
	}
}