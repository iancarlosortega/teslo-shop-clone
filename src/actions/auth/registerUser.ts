'use server';

export const registerUser = async (
	fullName: string,
	email: string,
	password: string
) => {
	try {
		const response = await fetch(`${process.env.BASE_API_URL}/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ fullName, email, password }),
		});

		if (response.ok === false)
			return {
				ok: false,
				message: 'No se pudo crear el usuario',
			};

		const user = await response.json();
		return {
			ok: true,
			message: 'Usuario creado correctamente',
			user,
		};
	} catch (error) {
		console.log(error);
		return {
			ok: false,
			message: 'No se pudo crear el usuario',
		};
	}
};
