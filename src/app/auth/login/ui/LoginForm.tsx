'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import Link from 'next/link';
import { IoInformationCircleOutline } from 'react-icons/io5';
import clsx from 'clsx';
import { authenticate } from '@/actions';

export const LoginForm = () => {
	const [errorMessage, dispatch] = useFormState(authenticate, undefined);

	useEffect(() => {
		if (errorMessage === 'Success') {
			window.location.replace('/');
		}
	}, [errorMessage]);

	return (
		<form action={dispatch} className='flex flex-col'>
			<label htmlFor='email'>Correo electrónico</label>
			<input
				id='email'
				name='email'
				className='px-5 py-2 border bg-gray-200 rounded mb-5'
				type='email'
			/>

			<label htmlFor='password'>Contraseña</label>
			<input
				id='password'
				name='password'
				className='px-5 py-2 border bg-gray-200 rounded mb-5'
				type='password'
			/>

			<div
				className='flex h-8 items-end space-x-1 mb-2'
				aria-live='polite'
				aria-atomic='true'>
				{errorMessage === 'CredentialsSignin' && (
					<>
						<IoInformationCircleOutline className='h-5 w-5 text-red-500' />
						<p className='text-sm text-red-500'>
							Verifique las credenciales ingresadas.
						</p>
					</>
				)}
			</div>

			<LoginButton />

			{/* divisor line */}
			<div className='flex items-center my-5'>
				<div className='flex-1 border-t border-gray-500'></div>
				<div className='px-2 text-gray-800'>O</div>
				<div className='flex-1 border-t border-gray-500'></div>
			</div>

			<Link href='/auth/new-account' className='btn-secondary text-center'>
				Crear una nueva cuenta
			</Link>
		</form>
	);
};

function LoginButton() {
	const { pending } = useFormStatus();

	return (
		<button
			type='submit'
			disabled={pending}
			className={clsx('btn-primary', {
				'!bg-gray-400 cursor-wait': pending,
			})}>
			Ingresar
		</button>
	);
}
