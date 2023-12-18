import { ProductGrid, Title } from '@/components';
import { initialData } from '@/seed/seed';
import { ProductCategory } from '@/interfaces';
// import { notFound } from 'next/navigation';

interface Props {
	params: {
		id: ProductCategory;
	};
}

const getProductsByCategory = (id: string) => {
	const products = initialData.products.filter(
		product => product.gender === id
	);
	return products;
};

export default function CategoryPage({ params }: Props) {
	const { id } = params;
	const products = getProductsByCategory(id);
	const labels: Record<ProductCategory, string> = {
		men: 'Hombres',
		women: 'Mujeres',
		kid: 'Niños',
		unisex: 'Todos',
	};

	// if (id === 'kids') {
	// 	notFound();
	// }

	return (
		<>
			<Title
				title={`Artículos para ${labels[id]}`}
				subtitle='Todos los productos'
				className='mb-2'
			/>

			<ProductGrid products={products} />
		</>
	);
}
