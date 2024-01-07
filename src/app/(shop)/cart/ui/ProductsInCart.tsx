'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store';
import { QuantitySelector } from '@/components';

export const ProductsInCart = () => {
	const productsInCart = useCartStore(state => state.cart);
	const updateProductQuantity = useCartStore(
		state => state.updateProductQuantity
	);
	const removeProductFromCart = useCartStore(
		state => state.removeProductFromCart
	);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	if (!isLoaded) return <p>Loading...</p>;

	return (
		<>
			{productsInCart.map(product => (
				<div key={`${product.slug}-${product.size}`} className='flex mb-5'>
					<Image
						src={`/products/${product.image}`}
						alt={product.title}
						width={300}
						height={300}
						className='mr-5 rounded w-[100px] h-[100px]'
					/>
					<div>
						<Link className='hover:underline' href={`/product/${product.slug}`}>
							{product.size} - {product.title}
						</Link>
						<p>${product.price}</p>
						<QuantitySelector
							quantity={product.quantity}
							maxQuantity={product.inStock}
							onQuantityChanged={value => updateProductQuantity(product, value)}
						/>
						<button
							onClick={() => removeProductFromCart(product)}
							className='underline mt-3'>
							Remover
						</button>
					</div>
				</div>
			))}
		</>
	);
};
