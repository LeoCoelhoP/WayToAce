import React from 'react';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import { I18nextProvider } from 'react-i18next';
import i18n from './configs/i18n';

export default function App() {
	return (
		<I18nextProvider i18n={i18n}>
			<MainLayout>
				<Home />
			</MainLayout>
		</I18nextProvider>
	);
}
