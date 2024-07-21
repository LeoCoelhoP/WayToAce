import React, { lazy, Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './configs/i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

const Home = lazy(() => import('./pages/Home'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
	return (
		<I18nextProvider i18n={i18n}>
			<Router>
				<Suspense fallback={<Loading />}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/*' element={<NotFound />} />
					</Routes>
				</Suspense>
			</Router>
		</I18nextProvider>
	);
}
