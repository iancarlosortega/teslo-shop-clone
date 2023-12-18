'use client';

import { useState } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
	quantity: number;
	maxQuantity: number;
}

export const QuantitySelector = ({ quantity, maxQuantity }: Props) => {
	const [count, setCount] = useState(quantity);

	const onQuantityChange = (value: number) => {
		if (count + value < 1 || count + value > maxQuantity) return;
		setCount(count + value);
	};

	return (
		<div className='flex '>
			<button onClick={() => onQuantityChange(-1)}>
				<IoRemoveCircleOutline size={30} />
			</button>
			<div className='w-20 mx-3 px-5 bg-gray-100 text-center rounded flex items-center justify-center'>
				<span>{count}</span>
			</div>
			<button onClick={() => onQuantityChange(+1)}>
				<IoAddCircleOutline size={30} />
			</button>
		</div>
	);
};
