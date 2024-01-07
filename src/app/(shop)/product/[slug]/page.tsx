import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { titleFont } from '@/config/fonts';
import { getProductBySlug } from '@/actions';
import { ProductSlideshow } from '@/components';
import { AddToCart } from './ui/AddToCart';

export const revalidate = '604800'; // 1 week

interface Props {
	params: {
		slug: string;
	};
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = params.slug;

	const product = await getProductBySlug(slug);

	return {
		title: product?.title ?? 'Producto no encontrado',
		description: product?.description ?? '',
		openGraph: {
			title: product?.title ?? 'Producto no encontrado',
			description: product?.description ?? '',
			images: [`/products/${product?.images[1]}`],
		},
	};
}

export default async function ProductPage({ params }: Props) {
	const { slug } = params;

	const product = await getProductBySlug(slug);

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

				<AddToCart product={product} />

				<h3 className='font-bold text-sm'>Descripción</h3>
				<p className='font-light'>{product.description}</p>
			</div>
		</div>
	);
}
