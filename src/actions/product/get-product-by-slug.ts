'use server';

import { Product } from '@/interfaces';

export const getProductBySlug = async (
	slug: string
): Promise<Product | null> => {
	try {
		const data = await fetch(`${process.env.BASE_API_URL}/products/${slug}`);
		const product = await data.json();

		if (!product) return null;

		return product;
	} catch (error) {
		console.log(error);
		return null;
	}
};
