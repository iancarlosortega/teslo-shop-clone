'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/interfaces';

interface Props {
	product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
	const [displayImage, setDisplayImage] = useState(product.images[0]);

	const handleMouseEnter = () => {
		setDisplayImage(product.images[1]);
	};

	const handleMouseLeave = () => {
		setDisplayImage(product.images[0]);
	};

	return (
		<div className='rounded-md overflow-hidden fade-in'>
			<Link href={`/product/${product.slug}`}>
				<Image
					src={`/products/${displayImage}`}
					alt={product.title}
					className='w-full object-cover rounded'
					width={500}
					height={500}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				/>
			</Link>

			<div className='p-4 flex flex-col'>
				<Link
					className='hover:text-blue-600 transition-colors'
					href={`/product/${product.slug}`}>
					{product.title}
				</Link>
				<span className='font-bold'>${product.price}</span>
			</div>
		</div>
	);
};
