import type { ProductSize } from '@/interfaces';

interface Props {
	selectedSize: ProductSize;
	availableSizes: ProductSize[];
}

export const SizeSelector = ({ selectedSize, availableSizes }: Props) => {
	return (
		<div className='my-5 '>
			<h3 className='font-bold mb-4'>Tallas disponibles</h3>

			<div className='flex '>
				{availableSizes.map(size => (
					<button key={size} className='mr-3 font-bold flex flex-col '>
						{size}
						{size === selectedSize && (
							<span className='h-[3px] w-full bg-black rounded' />
						)}
					</button>
				))}
			</div>
		</div>
	);
};
