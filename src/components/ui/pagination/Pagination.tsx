'use client';

import { redirect, usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { generatePaginationNumbers } from '@/utils';

interface Props {
	totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const currentPage = Number(searchParams.get('page') ?? 1);

	if (isNaN(currentPage) || currentPage < 1 || currentPage > totalPages) {
		redirect(pathname);
	}

	const paginationNumbers = generatePaginationNumbers(currentPage, totalPages);

	const createPageUrl = (pageNumber: number | string) => {
		const params = new URLSearchParams(searchParams);
		if (pageNumber === '...') {
			return `${pathname}?${params.toString()}`;
		}

		if (Number(pageNumber) <= 0) {
			return pathname;
		}

		if (Number(pageNumber) > totalPages) {
			return `${pathname}?${params.toString()}`;
		}

		params.set('page', pageNumber.toString());

		return `${pathname}?${params.toString()}`;
	};

	return (
		<div className='flex justify-center mt-10 mb-32'>
			<nav aria-label='Page navigation'>
				<ul className='flex items-center'>
					<li>
						<a
							className={clsx(
								'py-1.5 block px-3 border-0 outline-none bg-transparent transition-all duration-300 rounded ',
								{
									'text-gray-500 pointer-events-none': currentPage === 1,
									'text-gray-800 hover:text-gray-800 hover:bg-gray-200':
										currentPage !== 1,
								}
							)}
							href={createPageUrl(currentPage - 1)}>
							<IoChevronBackOutline size={30} />
						</a>
					</li>
					{paginationNumbers.map((pageNumber, index) => (
						<li key={index}>
							<a
								className={clsx(
									'block py-1.5 px-3 border-0 outline-none transition-all duration-300 rounded ',
									{
										'bg-blue-600 hover:bg-blue-700 text-white hover:text-white shadow-md focus:shadow-md':
											pageNumber === currentPage,
										'hover:bg-gray-200 text-gray-800 hover:text-gray-800 focus:shadow-none':
											pageNumber !== currentPage,
									}
								)}
								href={createPageUrl(pageNumber)}>
								{pageNumber}
							</a>
						</li>
					))}
					<li>
						<a
							className={clsx(
								'py-1.5 block px-3 border-0 outline-none bg-transparent transition-all duration-300 rounded',
								{
									'text-gray-500 pointer-events-none':
										currentPage === totalPages,
									'text-gray-800 hover:text-gray-800 hover:bg-gray-200':
										currentPage !== totalPages,
								}
							)}
							href={createPageUrl(currentPage + 1)}>
							<IoChevronForwardOutline size={30} />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};
