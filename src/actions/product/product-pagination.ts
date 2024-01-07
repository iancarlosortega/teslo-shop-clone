'use server';

import { Product } from '@/interfaces';

interface PaginationOptions {
	page?: number;
	take?: number;
	gender?: string;
}

interface PaginatedProducts {
	products: Product[];
	totalPages: number;
	currentPage: number;
}

export const getPaginatedProductsWithImages = async ({
	page = 1,
	take = 12,
	gender = '',
}: PaginationOptions): Promise<PaginatedProducts> => {
	if (isNaN(Number(page))) page = 1;
	if (page < 1) page = 1;

	try {
		const data = await fetch(
			`${process.env.BASE_API_URL}/products?` +
				new URLSearchParams({
					page: page.toString(),
					take: take.toString(),
					gender,
				})
		);
		const result = await data.json();
		return result;
	} catch (error) {
		console.log(error);
		return {
			products: [],
			totalPages: 0,
			currentPage: 1,
		};
	}
};
