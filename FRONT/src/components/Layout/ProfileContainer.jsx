import React, { useState } from 'react';
import ContainerAnimation from './ContainerAnimation';
import NoLastResults from '../UI/NoLastResults';
import PercentageIcons from '../UI/icons/PercentageIcon';
import ChevronsDownIcon from '../UI/icons/ChevronsDownIcon';
import ChevronsUpIcon from '../UI/icons/ChevronsUpIcon';
import { motion } from 'framer-motion';
import LineChart from '../UI/LineChart';
import { useTranslation } from 'react-i18next';

export default function ProfileContainer({ showProfile }) {
	const { t } = useTranslation();
	const [lastResults, setLastResults] = useState([
		// { id: '23232', examId: '4324324', result: 80, examName: 'ENEM 2018' },
		// { id: '2233232', examId: '4324324', result: 76, examName: 'ENEM 2017' },
		// { id: '2323232', examId: '4324324', result: 60, examName: 'ENEM 2016' },
		// { id: '2323232', examId: '4324324', result: 60, examName: 'ENEM 2016' },
		// { id: '2323232', examId: '4324324', result: 60, examName: 'ENEM 2012' },
	]);
	const [showAllResults, setShowAllResults] = useState(false);

	// Last Results Chart
	const labelsForENEM = ['2024-06-10', '2024-06-16', '2024-06-20'];
	const labelsForSAT = ['2023-07-10', '2023-07-16', '2023-07-20'];
	const [selectedLastResultsDataset, setSelectedLastResultsDataset] =
		useState('ENEM');

	const lastResultsChartData = {
		labels:
			selectedLastResultsDataset === 'ENEM' ? labelsForENEM : labelsForSAT,
		datasets: [
			{
				label: 'ENEM',
				data: [60, 50, 80],
				fill: true,
				cubicInterpolationMode: 'monotone',
				tension: 1,
				hidden: selectedLastResultsDataset === 'SAT',
			},
			{
				label: 'SAT',
				data: [70, 0, 85], // Example SAT data
				fill: true,
				cubicInterpolationMode: 'monotone',
				tension: 1,
				hidden: selectedLastResultsDataset === 'ENEM',
			},
		],
	};

	// Last Results By Subjects
	const lastThreeResultsDate = ['2024-06-10', '2024-06-16', '2024-06-20'];

	const [
		selectedLastResultsBySubjectDataset,
		setSelectedLastResultsBysSubjectDataset,
	] = useState('Linguagens');

	const lastResultsBySubjectChartData = {
		labels: lastThreeResultsDate,
		datasets: [
			{
				label: 'Linguagens',
				data: [60, 50, 80],
				fill: true,
				cubicInterpolationMode: 'monotone',
				tension: 1,
				hidden: selectedLastResultsBySubjectDataset !== 'Linguagens',
			},
			{
				label: 'Matemática',
				data: [70, 0, 85],
				fill: true,
				cubicInterpolationMode: 'monotone',
				tension: 1,
				hidden: selectedLastResultsBySubjectDataset !== 'Matemática',
			},
			{
				label: 'Ciências da Natureza',
				data: [65, 54, 43],
				fill: true,
				cubicInterpolationMode: 'monotone',
				tension: 1,
				hidden: selectedLastResultsBySubjectDataset !== 'Ciências da Natureza',
			},
			{
				label: 'Ciências Humanas',
				data: [44, 76, 89],
				fill: true,
				cubicInterpolationMode: 'monotone',
				tension: 1,
				hidden: selectedLastResultsBySubjectDataset !== 'Ciências Humanas',
			},
		],
	};

	return (
		<ContainerAnimation
			condition={showProfile}
			transition={{ duration: 0.4, bounce: 0 }}
			initial={{ y: -1000 }}
			animate={{ y: 0 }}
			exit={{ y: -1000 }}
			className='fixed  flex-col overflow-y-auto bg-gradient-to-b dark:from-zinc-400  pb-[5rem] dark:to-zinc-700 from-zinc-100 to-zinc-200  z-30 flex items-start justify-start w-full mt-[calc(5.5rem-10px)] shadow-lg h-full gap-6'>
			<div className='flex flex-col items-center justify-center w-full h-full gap-2 p-4 shadow-lg dark:bg-zinc-700 bg-zinc-200'>
				<h1 className='z-20 w-[101%] pt-2 text-2xl font-medium text-center dark:text-white dark:bg-zinc-700 '>
					{t('lastResults')}
				</h1>
				{!lastResults.length && <NoLastResults />}
				{!showAllResults && (
					<motion.div
						transition={{ duration: 0.4, bounce: 0 }}
						initial={{ y: -40 }}
						animate={{ y: 0 }}
						className={`flex flex-col w-full ${
							!lastResults.length ? 'h-fit' : 'h-[18rem]'
						} gap-2 overflow-y-auto pb-4`}>
						{lastResults.map((el, index) =>
							index <= 2 ? (
								<div
									key={el.id}
									className='flex items-center justify-between w-full h-20 p-6 text-2xl font-medium rounded-md shadow-lg drop-shadow-sm bg-zinc-300'>
									<h1 className=''>{el.examName}</h1>
									<div className='flex items-center justify-center font-medium'>
										<h2>{el.result}</h2>
										<PercentageIcons className={`stroke-black`} size={'2rem'} />
									</div>
								</div>
							) : null,
						)}
					</motion.div>
				)}
				{showAllResults && (
					<motion.div
						transition={{ duration: 0.4, bounce: 0 }}
						initial={{ y: -40 }}
						animate={{ y: 0 }}
						className='flex flex-col w-full h-[18rem] gap-2 overflow-y-auto pb-4'>
						{lastResults.map((el, _) => (
							<div
								key={el.id}
								className='flex items-center justify-between w-full h-20 p-6 text-2xl font-medium rounded-md shadow-lg drop-shadow-sm bg-zinc-300'>
								<h1 className=''>{el.examName}</h1>
								<div className='flex items-center justify-center font-medium'>
									<h2> {el.result}</h2>
									<PercentageIcons className={`stroke-black`} size={'2rem'} />
								</div>
							</div>
						))}
					</motion.div>
				)}

				{lastResults.length > 3 && (
					<div
						onClick={() => setShowAllResults((state) => !state)}
						className='dark:text-white'>
						{showAllResults ? (
							<div className='flex gap-2 text-lg '>
								<p>{t('showLess')}</p>
								<ChevronsUpIcon className='dark:stroke-white stroke-black' />
							</div>
						) : (
							<div className='flex gap-2 text-lg'>
								<p>{t('showMore')}</p>
								<ChevronsDownIcon className='dark:stroke-white stroke-black' />
							</div>
						)}
					</div>
				)}
			</div>
			<div className='flex flex-col items-center justify-center w-full gap-4 p-4 shadow-lg h-fit dark:bg-zinc-700 bg-zinc-200'>
				<h1 className='z-20 w-full text-2xl font-medium text-center dark:text-white '>
					{t('progress')}
				</h1>
				<LineChart
					chartData={lastResultsChartData}
					selectedDataset={selectedLastResultsDataset}
					setSelectedDataset={setSelectedLastResultsDataset}
					subTitle={'Success Rate By Exam (%)'}
				/>
				<LineChart
					chartData={lastResultsBySubjectChartData}
					selectedDataset={selectedLastResultsBySubjectDataset}
					setSelectedDataset={setSelectedLastResultsBysSubjectDataset}
					subTitle={'Success Rate By Subject (%)'}
				/>
			</div>
		</ContainerAnimation>
	);
}
