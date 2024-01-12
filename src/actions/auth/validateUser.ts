'use server';

import { User } from '@/interfaces';

export const validateUser = async (
	email: string,
	password: string
): Promise<User | null> => {
	try {
		const response = await fetch(`${process.env.BASE_API_URL}/auth/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});

		if (response.ok === false) return null;

		const user = await response.json();
		return user;
	} catch (error) {
		console.log(error);
		return null;
	}
};
