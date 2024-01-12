'use client';

import Link from 'next/link';
import { useUIStore } from '@/store';

interface Props {
	url: string;
	icon: JSX.Element;
	text: string;
}

export const MenuItemLink = ({ url, icon, text }: Props) => {
	const closeSideMenu = useUIStore(state => state.closeSideMenu);

	return (
		<Link
			href={url}
			onClick={closeSideMenu}
			className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transiton-all'>
			{icon}
			<span className='ml-3 text-xl'>{text}</span>
		</Link>
	);
};
