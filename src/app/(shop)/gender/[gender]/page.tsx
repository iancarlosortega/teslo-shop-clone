import { notFound } from 'next/navigation';
import { getPaginatedProductsWithImages } from '@/actions';
import { Pagination, ProductGrid, Title } from '@/components';
import { ProductCategory } from '@/interfaces';

interface Props {
	params: {
		gender: ProductCategory;
	};
	searchParams: {
		page?: string;
	};
}

export default async function CategoryPage({ params, searchParams }: Props) {
	const { gender } = params;
	const page = searchParams.page ? parseInt(searchParams.page) : 1;
	const { products, totalPages } = await getPaginatedProductsWithImages({
		gender,
		page,
	});

	const labels: Record<ProductCategory, string> = {
		men: 'Hombres',
		women: 'Mujeres',
		kid: 'Niños',
		unisex: 'Todos',
	};

	if (!Object.keys(labels).includes(gender)) {
		notFound();
	}

	return (
		<>
			<Title
				title={`Artículos para ${labels[gender]}`}
				subtitle='Todos los productos'
				className='mb-2'
			/>
			<ProductGrid products={products} />
			<Pagination totalPages={totalPages} />
		</>
	);
}
