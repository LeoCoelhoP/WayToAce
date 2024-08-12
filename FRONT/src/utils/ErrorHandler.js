export default function ErrorHandler(error) {
	if (error && typeof error === 'object') {
		if (error.data && typeof error.data === 'object' && error.data.message) {
			console.error('Error:', error.data.message);
		} else if (error.message) {
			console.error('Error:', error.message);
		} else {
			console.error('Unknown error occurred:', JSON.stringify(error, null, 2));
		}
	} else {
		console.error(
			'Non-object error encountered:',
			JSON.stringify(error, null, 2),
		);
	}
}
