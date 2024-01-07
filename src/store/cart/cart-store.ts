import { CartProduct } from '@/interfaces';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
	cart: CartProduct[];
	getTotalItems: () => number;
	getSummaryInformation: () => {
		total: number;
		subTotal: number;
		taxes: number;
		itemsInCart: number;
	};
	addProductToCart: (product: CartProduct) => void;
	updateProductQuantity: (product: CartProduct, quantity: number) => void;
	removeProductFromCart: (product: CartProduct) => void;
}

export const useCartStore = create<State>()(
	persist(
		(set, get) => ({
			cart: [],
			getTotalItems: () => {
				const { cart } = get();
				return cart.reduce((acc, curr) => acc + curr.quantity, 0);
			},
			getSummaryInformation: () => {
				const { cart } = get();
				const subTotal = cart.reduce(
					(acc, curr) => acc + curr.price * curr.quantity,
					0
				);
				const taxes = subTotal * 0.15;
				const total = subTotal + taxes;
				const itemsInCart = cart.reduce((acc, curr) => acc + curr.quantity, 0);

				return { total, subTotal, taxes, itemsInCart };
			},
			addProductToCart: (product: CartProduct) => {
				const { cart } = get();
				const productInCart = cart.find(
					p => p.id === product.id && p.size === product.size
				);

				if (!productInCart) return set({ cart: [...cart, product] });

				const newCart = cart.map(p => {
					if (p.id === product.id && p.size === product.size) {
						return { ...p, quantity: p.quantity + product.quantity };
					}
					return p;
				});

				return set({ cart: newCart });
			},
			updateProductQuantity: (product: CartProduct, quantity: number) => {
				const { cart } = get();
				const newCart = cart.map(p => {
					if (p.id === product.id && p.size === product.size) {
						return { ...p, quantity };
					}
					return p;
				});

				return set({ cart: newCart });
			},
			removeProductFromCart: (product: CartProduct) => {
				const { cart } = get();
				const newCart = cart.filter(
					p => !(p.id === product.id && p.size === product.size)
				);

				return set({ cart: newCart });
			},
		}),
		{
			name: 'shopping-cart',
		}
	)
);
