// get the button element from html and place into the DOM - Instantiate it as a vairable
//this how we ___
const btnasvar = document.getElementById('btnLogin');

//this is how we querry elements from the DOM 
const signupForm = document.querySelector('#signup-form');
//add an event listener to the form
signupForm.addEventListener('submit', e => {
	 e.preventDefault();
	 //getuserinfo
	 const email = signupForm['signup-email'].value;
	 const password = signupForm['signup-password'].value;
	 console.log(email, password)
})



// now that we have the element, attach a click event to it.
btnasvar.addEventListener('click', e => {
	//get email and pw
//	const email = txtEmail.value;
//	const pass = txtPassword.value;

//  We ae going to use methods attached to this constant:
	const auth = firebase.auth(); //makes an auth object. Can use that object to communicate. Same as s3=boto3('s3') does.
	const db = firebase.firestore();

	console.log( e.type);
	//sign in
	const promise = auth.signInWithEmailAndPassword("aa@aa.com", "aaaaaa");
	// this returns a promise. Use this to catch errors.
	// the promise will resolve into
	promise.catch(e => console.log(e.message));

})

 
// Variables are not just a value.
 //Variables can be an instantion of the class.