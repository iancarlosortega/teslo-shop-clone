'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import clsx from 'clsx';
import { login, registerUser } from '@/actions';

interface FormValues {
	fullName: string;
	email: string;
	password: string;
}

export const RegisterForm = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit = async (data: FormValues) => {
		setErrorMessage('');
		const { fullName, email, password } = data;
		const response = await registerUser(fullName, email, password);

		if (!response.ok) {
			return setErrorMessage(response.message);
		}

		await login(email, password);
		window.location.replace('/');
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
			<label htmlFor='name'>Nombre completo</label>
			<input
				id='name'
				className={clsx('px-5 py-2 border bg-gray-200 rounded mb-5', {
					'border-red-500': errors.fullName,
				})}
				type='text'
				{...register('fullName', { required: true })}
			/>

			<label htmlFor='email'>Correo electrónico</label>
			<input
				id='email'
				className={clsx('px-5 py-2 border bg-gray-200 rounded mb-5', {
					'border-red-500': errors.email,
				})}
				type='email'
				{...register('email', { required: true, pattern: /^\S+@\S+$/i })}
			/>

			<label htmlFor='password'>Contraseña</label>
			<input
				id='password'
				className={clsx('px-5 py-2 border bg-gray-200 rounded mb-5', {
					'border-red-500': errors.password,
				})}
				type='password'
				{...register('password', { required: true, minLength: 6 })}
			/>

			{errorMessage && (
				<p className='text-red-500 text-center mb-5'>{errorMessage}</p>
			)}

			<button className='btn-primary'>Crear cuenta</button>

			{/* divisor line */}
			<div className='flex items-center my-5'>
				<div className='flex-1 border-t border-gray-500'></div>
				<div className='px-2 text-gray-800'>O</div>
				<div className='flex-1 border-t border-gray-500'></div>
			</div>

			<Link href='/auth/login' className='btn-secondary text-center'>
				Ingresar
			</Link>
		</form>
	);
};
