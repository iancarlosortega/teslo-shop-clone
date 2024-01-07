'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store';
import { currencyFormat } from '@/utils';

export const OrderSummary = () => {
	const { itemsInCart, subTotal, taxes, total } = useCartStore(state =>
		state.getSummaryInformation()
	);
	const [isLoaded, setIsLoaded] = useState(false);
	const router = useRouter();

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	useEffect(() => {
		if (itemsInCart === 0 && isLoaded) {
			router.replace('/cart/empty');
		}
	}, [itemsInCart, isLoaded, router]);

	if (!isLoaded) return <p>Cargando...</p>;

	return (
		<div className='grid grid-cols-2'>
			<span>No. Productos</span>
			<span className='text-right'>
				{itemsInCart} {itemsInCart > 1 ? 'artículos' : 'artículo'}
			</span>

			<span>Subtotal</span>
			<span className='text-right tabular-nums'>
				{currencyFormat(subTotal)}
			</span>

			<span>Impuestos (15%)</span>
			<span className='text-right tabular-nums'>{currencyFormat(taxes)}</span>

			<span className='text-2xl mt-5 font-semibold'>Total</span>
			<span className='text-2xl mt-5 font-semibold text-right tabular-nums'>
				{currencyFormat(total)}
			</span>
		</div>
	);
};
