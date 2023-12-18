'use client';

import {
	IoCloseOutline,
	IoLogInOutline,
	IoLogOutOutline,
	IoPeopleOutline,
	IoPersonOutline,
	IoSearchOutline,
	IoShirtOutline,
	IoTicketOutline,
} from 'react-icons/io5';
import { useUIStore } from '@/store';
import { MenuItemLink } from './MenuItemLink';
import clsx from 'clsx';

export const Sidebar = () => {
	const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
	const closeSideMenu = useUIStore(state => state.closeSideMenu);

	return (
		<div>
			{isSideMenuOpen && (
				<>
					{/* Background black */}
					<div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30' />
					{/* Background blur */}
					<div
						onClick={closeSideMenu}
						className='fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'
					/>
				</>
			)}

			{/* Sidebar */}
			<nav
				className={clsx(
					'fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300',
					{
						'translate-x-full': !isSideMenuOpen,
					}
				)}>
				<button onClick={closeSideMenu}>
					<IoCloseOutline
						size={50}
						className='absolute top-5 right-5 cursor-pointer'
					/>
				</button>

				<div className='relative mt-14'>
					<IoSearchOutline size={20} className='absolute top-2 left-2' />
					<input
						type='text'
						placeholder='Buscar'
						className='w-full bg-gray-50 rounded px-10 py-1 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500'
					/>
				</div>

				{/* Menu */}
				<MenuItemLink
					url='/'
					icon={<IoPersonOutline size={30} />}
					text='Perfil'
				/>
				<MenuItemLink
					url='/'
					icon={<IoTicketOutline size={30} />}
					text='Órdenes'
				/>
				<MenuItemLink
					url='/'
					icon={<IoLogInOutline size={30} />}
					text='Ingresar'
				/>
				<MenuItemLink
					url='/'
					icon={<IoLogOutOutline size={30} />}
					text='Salir'
				/>

				{/* Divider */}
				<div className='w-full h-px bg-gray-200 my-10 rounded' />

				{/* Menu */}
				<MenuItemLink
					url='/'
					icon={<IoShirtOutline size={30} />}
					text='Productos'
				/>
				<MenuItemLink
					url='/'
					icon={<IoTicketOutline size={30} />}
					text='Órdenes'
				/>

				<MenuItemLink
					url='/'
					icon={<IoPeopleOutline size={30} />}
					text='Usuarios'
				/>
			</nav>
		</div>
	);
};
