/*
//const loginForm = document.querySelector('#login-form'); // why are these elements selected differently?
const loginbutton = document.getElementById('.login-button.sc-bwzfXH.clwmhu'); // why is the button element camelcase and the form element kebob case?
const createForm = document.querySelector('#create-form'); // why is this variable kabob case,
const createbutton = document.getElementById('createButton'); // and this one is lowercase?
const logoutbutton = document.getElementById('logoutButton');
const consolecreds = document.getElementById('consoleCreds');
var credential;
var user;

//console.log (loginForm);
console.log (loginbutton);


//loginForm.addEventListener('submit', e => {
//	 e.preventDefault();
//}) 

loginbutton.addEventListener('click', e => {
	const email = loginForm['login-email'].value;
	const password = loginForm['login-password'].value;
	console.log("from button listener")
	console.log(email,password)
	const promise = auth.signInWithEmailAndPassword(email, password).then(cred => {
		console.log(cred);
		userInfo = cred.user;
		console.log(userInfo);
		user = firebase.auth().currentUser;
	})
	promise.catch(e => console.log(e.message));
})

createForm.addEventListener('submit', e => {
	 e.preventDefault();
}) 

createbutton.addEventListener('click', e => {
	const email2 = createForm['signup-email'].value;
	const password2 = createForm['signup-password'].value;
	const promise = auth.createUserWithEmailAndPassword(email2, password2);
	promise.catch(e => console.log(e.message));
})

logoutbutton.addEventListener('click', e => {
	e.preventDefault();
	auth.signOut();
})

consolecreds.addEventListener('click', e => {
	console.log (credential)
	console.log (user.uid)
})
*/