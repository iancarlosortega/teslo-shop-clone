import type { ProductSize } from '@/interfaces';

interface Props {
	selectedSize?: ProductSize;
	availableSizes: ProductSize[];
	onSizeChanged: (size: ProductSize) => void;
}

export const SizeSelector = ({
	selectedSize,
	availableSizes,
	onSizeChanged,
}: Props) => {
	return (
		<div className='my-5 '>
			<h3 className='font-bold mb-4'>Tallas disponibles</h3>

			<div className='flex '>
				{availableSizes.map(size => (
					<button
						onClick={() => onSizeChanged(size)}
						key={size}
						className='h-8 mr-3 font-bold flex flex-col'>
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
