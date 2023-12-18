import Link from 'next/link';
import { titleFont } from '@/config/fonts';

export default function NewAccountPage() {
	return (
		<>
			<h1 className={`${titleFont.className} text-4xl mb-5`}>Nueva Cuenta</h1>

			<div className='flex flex-col'>
				<label htmlFor='name'>Nombre completo</label>
				<input
					id='name'
					className='px-5 py-2 border bg-gray-200 rounded mb-5'
					type='text'
				/>

				<label htmlFor='email'>Correo electrónico</label>
				<input
					id='email'
					className='px-5 py-2 border bg-gray-200 rounded mb-5'
					type='email'
				/>

				<label htmlFor='password'>Contraseña</label>
				<input
					id='password'
					className='px-5 py-2 border bg-gray-200 rounded mb-5'
					type='password'
				/>

				<button className='btn-primary'>Crear cuenta</button>

				{/* divisor l ine */}
				<div className='flex items-center my-5'>
					<div className='flex-1 border-t border-gray-500'></div>
					<div className='px-2 text-gray-800'>O</div>
					<div className='flex-1 border-t border-gray-500'></div>
				</div>

				<Link href='/auth/login' className='btn-secondary text-center'>
					Ingresar
				</Link>
			</div>
		</>
	);
}
