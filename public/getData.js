$.ajax({
	url: 'https://www.google.com/flights',
	data: {},
	type: 'GET',
	success: (data) => {
		console.log(data);
	},
	error: (data, e) => {
		console.log("error");
		console.log(data);
		console.log(e);
	}
});
