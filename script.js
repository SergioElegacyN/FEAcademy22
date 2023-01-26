
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
	pic.src = data.picture.medium;
	name.textContent = data.name.first + ' ' + data.name.last;
	phone.textContent = data.phone;
	email.textContent = data.email;
	country.textContent = data.location.country;
}

// we want a single data when the page is open
document.addEventListener('DOMContentLoaded', generateUser);

// and we want generate another user data when
// the "NEXT CANDIDATE" button is press
nextc.addEventListener('click', generateUser);

