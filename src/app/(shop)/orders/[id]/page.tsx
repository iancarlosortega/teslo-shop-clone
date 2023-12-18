import Image from 'next/image';
import { initialData } from '@/seed/seed';
import { OrderStatus, Title } from '@/components';

const productsInCart = [
	initialData.products[0],
	initialData.products[1],
	initialData.products[2],
];

interface Props {
	params: {
		id: string;
	};
}

export default function OrderPage({ params }: Props) {
	const { id } = params;

	return (
		<div className='flex justify-center items-center mb-72 px-10 sm:px-0'>
			<div className='flex flex-col w-[1000px]'>
				<Title title={`Orden #${id}`} />

				<div className='grid sm:grid-cols-2 gap-10'>
					{/* Cart */}
					<div className='flex flex-col mt-5'>
						<OrderStatus />
						{productsInCart.map(product => (
							<div key={product.slug} className='flex mb-5'>
								<Image
									src={`/products/${product.images[0]}`}
									alt={product.title}
									width={300}
									height={300}
									className='mr-5 rounded w-[100px] h-[100px]'
								/>
								<div>
									<p>{product.title}</p>
									<p>${product.price} x 3</p>
									<p className='font-bold'>Subtotal: ${product.price * 3}</p>
								</div>
							</div>
						))}
					</div>

					{/* Summary */}
					<div className='bg-white rounded-xl shadow-xl p-7'>
						<h2 className='text-2xl font-bold mb-2'>Dirección de entrega</h2>
						<div className='mb-10'>
							<p className='text-xl'>Fernando Herrera</p>
							<p>Av. Siempre viva 123</p>
							<p>Col. Centro</p>
							<p>Alcaldía Cuauhtémoc</p>
							<p>Ciudad de México</p>
							<p>CP 129837</p>
							<p>55 1234 5678</p>
						</div>

						{/* Divider */}
						<div className='w-full h-0.5 rounded bg-gray-200 mb-10' />

						<h2 className='text-2xl font-bold mb-2'>Resumen de orden</h2>
						<div className='grid grid-cols-2'>
							<span>No. Productos</span>
							<span className='text-right'>3 artículos</span>

							<span>Subtotal</span>
							<span className='text-right'>$100</span>

							<span>Impuestos (15%)</span>
							<span className='text-right'>$100</span>

							<span className='text-2xl mt-5'>Total</span>
							<span className='text-2xl mt-5 text-right'>3 artículos</span>
						</div>

						<div className='mt-5 mb-2 w-full'>
							<OrderStatus />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
