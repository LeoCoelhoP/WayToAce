import React, { createContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

export const UserContext = createContext({});

export default function UserProvider({ children }) {
	const [user, setUser] = useState(false);

	useEffect(() => {
		//Todo User service
		setUser(true);
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

UserProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
