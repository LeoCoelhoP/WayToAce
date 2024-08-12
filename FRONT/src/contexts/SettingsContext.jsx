import React, { createContext, useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useTranslation } from 'react-i18next';

export const SettingsContext = createContext({});

export default function SettingsProvider({ children }) {
	const { i18n } = useTranslation();

	// Initialize state from local Storage
	const [darkMode, setDarkMode] = useState(
		localStorage.getItem('theme') === 'dark',
	);
	const [autoTranslate, setAutoTranslate] = useState(() =>
		Boolean(
			(localStorage.getItem('autoTranslate') !== 'false' &&
				localStorage.getItem('autoTranslate')) ||
				false,
		),
	);

	// Apply Dark Mode And Update Local Storage
	useEffect(() => {
		document.body.classList.remove('light', 'dark');
		document.body.classList.add(darkMode ? 'dark' : 'light');
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');
	}, [darkMode]);

	// Handle Auto Translate Setting Changes From Local Storage
	useEffect(() => {
		function checkAutoTranslateData() {
			const inStorage = localStorage.getItem('autoTranslate');
			if (inStorage) setAutoTranslate(inStorage);
		}

		window.addEventListener('storage', checkAutoTranslateData);

		return () => {
			window.removeEventListener('storage', checkAutoTranslateData);
		};
	}, []);

	// Apply Auto Translate And Update Local Storage
	function toggleAutoTranslate() {
		const lng = navigator.language || navigator.userLanguage;

		setAutoTranslate((state) => {
			localStorage.setItem('lng', lng);
			localStorage.setItem('autoTranslate', !state);
			return !state;
		});

		i18n.changeLanguage(autoTranslate ? 'en' : lng);
	}

	return (
		<SettingsContext.Provider
			value={{ autoTranslate, darkMode, setDarkMode, toggleAutoTranslate }}>
			{children}
		</SettingsContext.Provider>
	);
}

SettingsProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
