import { notFound } from 'next/navigation';
import { ProductSlideshow, QuantitySelector, SizeSelector } from '@/components';
import { titleFont } from '@/config/fonts';
import { initialData } from '@/seed/seed';

interface Props {
	params: {
		slug: string;
	};
}

const getProductBySlug = (slug: string) => {
	const product = initialData.products.find(product => product.slug === slug);
	return product;
};

export default function ProductPage({ params }: Props) {
	const { slug } = params;

	const product = getProductBySlug(slug);

	if (!product) return notFound();

	return (
		<div className='mt-5 mb-20 grid md:grid-cols-3 gap-3'>
			{/* Slideshow */}
			<div className='col-span-1 md:col-span-2'>
				<ProductSlideshow title={product.title} images={product.images} />
			</div>

			{/* Details */}
			<div className='col-span-1 px-5'>
				<h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
					{product.title}
				</h1>
				<p className='text-lg mb-5'>${product.price}</p>

				{/* Sizes selector */}
				<SizeSelector
					selectedSize={product.sizes[0]}
					availableSizes={product.sizes}
				/>
				{/* Quantity selector */}
				<QuantitySelector quantity={1} maxQuantity={product.inStock} />

				<button className='btn-primary my-5'>Agregar al carrito</button>

				<h3 className='font-bold text-sm'>Descripción</h3>
				<p className='font-light'>{product.description}</p>
			</div>
		</div>
	);
}
