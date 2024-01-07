'use client';

import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
	quantity: number;
	maxQuantity: number;
	onQuantityChanged: (quantity: number) => void;
}

export const QuantitySelector = ({
	quantity,
	maxQuantity,
	onQuantityChanged,
}: Props) => {
	const onValueChanged = (value: number) => {
		if (quantity + value < 1 || quantity + value > maxQuantity) return;
		onQuantityChanged(quantity + value);
	};

	return (
		<div className='flex '>
			<button onClick={() => onValueChanged(-1)}>
				<IoRemoveCircleOutline size={30} />
			</button>
			<div className='w-20 mx-3 px-5 bg-gray-100 text-center rounded flex items-center justify-center'>
				<span>{quantity}</span>
			</div>
			<button onClick={() => onValueChanged(+1)}>
				<IoAddCircleOutline size={30} />
			</button>
		</div>
	);
};
