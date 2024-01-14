'use server';

import { Address } from '@/interfaces';

export const setUserAddress = async (address: Address, userId: string) => {
	try {
		console.log({
			...address,
			user: userId,
		});

		const response = await fetch(`${process.env.BASE_API_URL}/addresses`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...address,
				user: userId,
			}),
		});

		if (response.ok === false)
			throw new Error('No se pudo establecer la dirección');

		const data = await response.json();

		return {
			ok: true,
			message: 'Dirección establecida correctamente',
			data,
		};
	} catch (error) {
		console.log(error);
		return {
			ok: false,
			message: 'No se pudo establecer la dirección',
		};
	}
};
