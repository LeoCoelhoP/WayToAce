import React from 'react';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import { I18nextProvider } from 'react-i18next';
import i18n from './configs/i18n';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';

export default function App() {
	const router = createBrowserRouter([
		{ path: '/', element: <Home /> },
		{ path: '*', element: <NotFound /> },
	]);
	return (
		<I18nextProvider i18n={i18n}>
			<MainLayout>
				<RouterProvider router={router} />
			</MainLayout>
		</I18nextProvider>
	);
}
