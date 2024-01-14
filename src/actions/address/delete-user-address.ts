'use server';

export const deleteUserAddress = async (userId: string) => {
	try {
		const response = await fetch(
			`${process.env.BASE_API_URL}/addresses/${userId}`,
			{
				method: 'DELETE',
			}
		);

		if (response.ok === false)
			throw new Error('No se pudo eliminar la dirección');

		await response.json();

		return {
			ok: true,
			message: 'Dirección eliminada correctamente',
		};
	} catch (error) {
		console.log(error);
		return {
			ok: false,
			message: 'No se pudo eliminar la dirección',
		};
	}
};
