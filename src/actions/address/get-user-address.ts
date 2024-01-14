'use server';

export const getUserAddress = async (userId: string) => {
	try {
		const response = await fetch(
			`${process.env.BASE_API_URL}/addresses/${userId}`
		);

		if (response.ok === false)
			throw new Error('No se pudo obtener la dirección');

		const address = await response.json();

		return {
			...address,
			country: address.country.id,
		};
	} catch (error) {
		console.log(error);
		return null;
	}
};
