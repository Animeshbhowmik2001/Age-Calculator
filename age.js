function calculateAge() {
	var dob = document.getElementById("dob").value;
	var today = new Date();
	var birthDate = new Date(dob);
	var age = today.getTime() - birthDate.getTime();
	var years = Math.floor(age / (1000 * 60 * 60 * 24 * 365));
	var months = Math.floor(age / (1000 * 60 * 60 * 24 * 30.44)) % 12;
	var days = Math.floor(age / (1000 * 60 * 60 * 24)) % 30;
	document.getElementById("years").innerHTML = years;
	document.getElementById("months").innerHTML = months;
	document.getElementById("days").innerHTML = days;
	document.querySelector(".result").style.display = "block";
}