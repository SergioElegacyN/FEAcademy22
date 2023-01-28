
// here I declare the data as const because 
// I dont want they change unless I request

// first of all, we declare the const with
// the data we get using fetch() in the
// function "generateUser", but first
// we declare that data as .json

const boton = document.querySelector('#nextc');
const pic = document.querySelector('#pic');
const name = document.querySelector('#name');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const profileName = document.querySelector('#profileName');
const yearsOld = document.querySelector('#yearsOld');

// we declare the "generateUser"
const generateUser = async () => {

	// we call the API
	const url = 'https://randomuser.me/api/';

	// we wait for a responses from the server
	const response = await fetch(url);

	// the response have data, we gonna check
	const { results } = await response.json();

	// and finally we save the data
	const data = results[0];

	// we save the data we want :
	// photo, full name, phone, email and country
	pic.src = data.picture.large;
	name.textContent = data.name.first + ' ' + data.name.last;
	phone.textContent = data.phone;
	email.textContent = data.email;
	country.textContent = data.location.country;
	profileName.textContent = data.name.first;
	yearsOld.textContent = data.dob.age;
}

// we want a single data when the page is open
document.addEventListener('DOMContentLoaded', generateUser);

// and we want generate another user data when
// the "NEXT CANDIDATE" button is press
nextc.addEventListener('click', generateUser);

//====================================================//

// this section is for send a email to me

// we declare the ID of the form
const $form = document.querySelector('#form');
const $buttonMailTo = document.querySelector('#fillEmail');

// we wait for a action in the "submit" button
$form.addEventListener('submit', handleSubmit);

// here I made the "handleSubmit" function
// with a event who do two things
function handleSubmit(event) {

	// (first) : prevent the refresh of the page
	// when the submit button is press
	event.preventDefault();

	const form = new FormData(this);

	// (second) : we set the attributes to the email
	// subject and body
	$buttonMailTo.setAttribute('href', 
		`mailto:nietohernansergio@gmail.com?
		subject=${form.get('formSubject')}
		&body=${form.get('formMessage')}`);
	$buttonMailTo.click();
}

//====================================================//
// we declare the 5 years variables.
const yearOne = document.querySelector('#yearOne');
const yearTwo = document.querySelector('#yearTwo');
const yearThree = document.querySelector('#yearThree');
const yearFour = document.querySelector('#yearFour');
const yearFive = document.querySelector('#yearFive');

// we declare the "generateYear"
const generateYear = (result) => {

	// we set the content of the 1st year.
	result = Math.floor(Math.random() * (2002 - 2000)) + 2020;
	yearOne.textContent = result + '-' + (result+Math.floor(Math.random()) + 2) + ' Lorem Ipsum';
	// we set the content of the 2nd year.
	result = Math.floor(Math.random() * (2004 - 2000)) + 2014;
	yearTwo.textContent = result + '-' + (result+Math.floor(Math.random()) + 3) + ' Lorem Ipsum';
	// we set the content of the 3rd year.
	result = Math.floor(Math.random() * (2003 - 2000) + 2010);
	yearThree.textContent = result + '-' + (result+Math.floor(Math.random()) + 2) + ' Lorem Ipsum';
	// we set the content of the 4th year.
	result = Math.floor(Math.random() * (2005 - 2000) + 2003);
	yearFour.textContent = result + '-' + (result+Math.floor(Math.random()) + 3) + ' Lorem Ipsum';
	// we set the content of the 5th year.
	result = Math.floor(Math.random() * (2002 - 2000) + 2000);
	yearFive.textContent = result + '-' + (result+Math.floor(Math.random()) + 2) + ' Lorem Ipsum';


}

// we want the exp years loaded when
// the page is open.
document.addEventListener('DOMContentLoaded', generateYear);
nextc.addEventListener('click', generateYear);

//====================================================//

// we declare the 4 skills variables.
const htmls = document.querySelector('.html');
const csss = document.querySelector('.css');
const jss = document.querySelector('.js');
const gits = document.querySelector('.git');

// we declare the "generateSkill"
const generateSkill = (result) => {

	// we set the skill level of html.
	result = Math.floor(Math.random() * 101 + 1);
	htmls.style.width = result+'%';
	// we set the skill level of css.
	result = Math.floor(Math.random() * 101 + 1);
	csss.style.width = result+'%';
	// we set the skill level of js.
	result = Math.floor(Math.random() * 101 + 1);
	jss.style.width = result+'%';
	// we set the skill level of git.
	result = Math.floor(Math.random() * 101 + 1);
	gits.style.width = result+'%';
}

// we want the skill level randomized
// when the page is open.
document.addEventListener('DOMContentLoaded', generateSkill);
nextc.addEventListener('click', generateSkill);

//====================================================//

// we made the function to download 
// the current cv. Because we can't
// give to the print window orders
// we made a alert with the instructions
	function generatePDF(){
		
		window.alert("More adjustments:	Papper size : [A2] / Advanced Options: Scale : Custom [110] / Header and Footer : [ON] / Background Graphics : [ON]");
		window.print();
	}

// we want download a .pdf when the
// button "DOWNLOAD CV" is clicked.
downloadcv.addEventListener('click', generatePDF);

