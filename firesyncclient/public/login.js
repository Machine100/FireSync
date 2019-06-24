const loginForm = document.querySelector('#login-form'); // why are these elements selected differently?
const loginbutton = document.getElementById('loginButton'); // why is the button element camelcase and the form element kebob case?
const createForm = document.querySelector('#create-form'); // why is this variable camel case,
const createbutton = document.getElementById('createButton'); // and this one is lowercase?

loginForm.addEventListener('submit', e => {
	 e.preventDefault();
	 const email = loginForm['login-email'].value;
	 const password = loginForm['login-password'].value;
}) 

loginbutton.addEventListener('click', e => {
	console.log( e.type);
	const promise = auth.signInWithEmailAndPassword(email, password);
	promise.catch(e => console.log(e.message));
})

createForm.addEventListener('submit', e => {
	 e.preventDefault();
	 const email = createForm['create-email'].value;
	 const password = createForm['create-password'].value;
}) 

createbutton.addEventListener('click', e => {
	console.log( e.type);
	const promise = auth.createUserWithEmailAndPassword(email, password);
	promise.catch(e => console.log(e.message));
})
