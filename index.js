var fetch = require('node-fetch');

'use strict';
const myError = (response) => {
	if (!response.ok) {
		throw Error('something went wrong...');
	}
	return response;
}

const api = (str) => {
	return new fetch(str, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			'Accept': 'application/json',
			'X-Mashape-Key': 'PfWVDMPoLBmshAa5Imt1S1qVdXdwp1z73uCjsnOFhrH4V97hsa'
		}
	})
}

const fetchJoke = (str) => {
	return async() => {
		console.log('LOADING...')
		let response = await api(str)
			.then(myError)
			.then(data => data.json())
			.catch(e => e);
		return (response.message)? console.log(response.message) && false : response
	}
}

const foo = fetchJoke('https://api.chucknorris.io/jokes/random1');
foo().then((data) => {
	if(data) console.log(data.value);
})