'use server';

import { signIn } from '@/auth.config';
import { AuthError } from 'next-auth';

export async function authenticate(
	prevState: string | undefined,
	formData: FormData
) {
	try {
		await signIn('credentials', {
			...Object.fromEntries(formData),
			redirect: false,
		});
		return 'Success';
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return 'CredentialsSignin';
				default:
					return 'UnknownError';
			}
		}
	}
}

export async function login(email: string, password: string) {
	try {
		await signIn('credentials', {
			email,
			password,
		});
		return {
			ok: true,
			message: 'Usuario logueado correctamente',
		};
	} catch (error) {
		console.log(error);
		return {
			ok: false,
			message: 'No se pudo iniciar sesión',
		};
	}
}
