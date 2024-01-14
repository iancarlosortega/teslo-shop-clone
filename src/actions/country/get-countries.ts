'use server';

import { Country } from '@/interfaces';

export const getCountries = async (): Promise<Country[]> => {
	try {
		const response = await fetch(`${process.env.BASE_API_URL}/countries`);

		if (!response.ok) {
			return [];
		}

		const countries = await response.json();
		return countries;
	} catch (error) {
		console.log(error);
		return [];
	}
};
