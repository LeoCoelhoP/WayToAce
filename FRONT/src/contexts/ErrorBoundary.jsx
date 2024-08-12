import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withTranslation } from 'react-i18next';

import ErrorIcon from '../components/UI/icons/ErrorIcon';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.log('Error caught by Error Boundary:', error, info);
	}

	render() {
		if (this.state.hasError) {
			const { t } = this.props;

			function reloadPage() {
				window.location.reload();
			}

			return (
				<div className='p-10 text-center w-svw h-svh bg-zinc-50'>
					<div className='flex flex-col items-center justify-center gap-4 p-6 rounded-md shadow-lg'>
						<ErrorIcon className='stroke-black' size={'4rem'} />
						<h1 className='text-lg font-semibold'>
							{t('errorBoundaryMessage')}
						</h1>
						<p
							onClick={reloadPage}
							className='w-2/3 p-2 text-lg font-medium text-blue-700 rounded-md shadow-lg bg-zinc-100'>
							{t('clickToReload')}
						</p>
					</div>
				</div>
			);
		}
		return this.props.children;
	}
}

export default withTranslation()(ErrorBoundary);

ErrorBoundary.propTypes = {
	children: PropTypes.node.isRequired,
	t: PropTypes.func.isRequired,
};
