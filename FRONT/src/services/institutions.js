import axios from '../configs/axios';
import ErrorHandler from '../utils/ErrorHandler';

async function getInstitutions(type = '') {
	try {
		const response = await axios.get(
			'/institutions',
			{
				type,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		return response.data;
	} catch (error) {
		ErrorHandler(error);
	}
}

export { getInstitutions };
