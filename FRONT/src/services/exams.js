import axios from '../configs/axios';
import ErrorHandler from '../utils/ErrorHandler';

async function getExamData({ type = '' }) {
	try {
		const response = await axios.get(
			'/exams',
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

export { getExamData };
