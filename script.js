function getFormvalue() {
    //Write your code here
	var form = document.getElementById('form1');

	var firstname = form.elements["fname"].value;
	var lastname = form.elements["lname"].value;
	alert(firstname + " " + lastname);
}
