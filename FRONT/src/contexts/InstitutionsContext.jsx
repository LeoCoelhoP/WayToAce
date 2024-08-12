import React, { createContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

import { getInstitutions } from '../services/institutions';

export const InstitutionsContext = createContext({});

export default function InstitutionsProvider({ children }) {
	const [institutions, setInstitutions] = useState(null);

	useEffect(() => {
		async function fetchInstitutions() {
			const { institutions } = await getInstitutions();
			setInstitutions(institutions);
		}
		fetchInstitutions();
	}, []);

	return (
		<InstitutionsContext.Provider value={{ institutions, setInstitutions }}>
			{children}
		</InstitutionsContext.Provider>
	);
}

InstitutionsProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
