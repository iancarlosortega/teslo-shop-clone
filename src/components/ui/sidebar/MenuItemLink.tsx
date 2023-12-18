import Link from 'next/link';

interface Props {
	url: string;
	icon: JSX.Element;
	text: string;
}

export const MenuItemLink = ({ url, icon, text }: Props) => {
	return (
		<Link
			href={url}
			className='flex items-center mt-10 p-2 hover:bg-gray-100 rounded transiton-all'>
			{icon}
			<span className='ml-3 text-xl'>{text}</span>
		</Link>
	);
};
