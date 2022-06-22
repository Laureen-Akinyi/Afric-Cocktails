const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f9991028bfmsh6d7694b694d8982p103ff0jsn0dd4f83584c8',
		'X-RapidAPI-Host': 'cocktails3.p.rapidapi.com'
	}
};

fetch('https://cocktails3.p.rapidapi.com/random', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));