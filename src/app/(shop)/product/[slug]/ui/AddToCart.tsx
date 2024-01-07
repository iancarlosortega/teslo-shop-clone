'use client';

import { useState } from 'react';
import { QuantitySelector, SizeSelector } from '@/components';
import { CartProduct, Product, ProductSize } from '@/interfaces';
import { useCartStore } from '@/store';

interface Props {
	product: Product;
}

export const AddToCart = ({ product }: Props) => {
	const addProductToCart = useCartStore(state => state.addProductToCart);

	const [size, setSize] = useState<ProductSize | undefined>();
	const [quantity, setQuantity] = useState(1);
	const [isPosted, setIsPosted] = useState(false);

	const addToCart = () => {
		setIsPosted(true);
		if (!size) return;

		const cartProduct: CartProduct = {
			id: product.id,
			title: product.title,
			slug: product.slug,
			price: product.price,
			inStock: product.inStock,
			quantity: quantity,
			size: size,
			image: product.images[0],
		};

		addProductToCart(cartProduct);
		setIsPosted(false);
		setQuantity(1);
		setSize(undefined);
	};

	return (
		<>
			{isPosted && !size && (
				<span className='text-red-500 fade-in'>
					¡Debe de seleccionar una talla!
				</span>
			)}
			<SizeSelector
				selectedSize={size}
				availableSizes={product.sizes}
				onSizeChanged={setSize}
			/>
			<QuantitySelector
				quantity={quantity}
				maxQuantity={product.inStock}
				onQuantityChanged={setQuantity}
			/>

			<button onClick={addToCart} className='btn-primary my-5'>
				Agregar al carrito
			</button>
		</>
	);
};
