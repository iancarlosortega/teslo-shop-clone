'use client';

import { useEffect, useState } from 'react';
import { ProductMobileSlideshow } from './ProductMobileSlideshow';
import { ProductDesktopSlideshow } from './ProductDesktopSlideshow';

interface Props {
	images: string[];
	title: string;
}

export const ProductSlideshow = ({ title, images }: Props) => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			{screenWidth < 768 ? (
				<ProductMobileSlideshow title={title} images={images} />
			) : (
				<ProductDesktopSlideshow title={title} images={images} />
			)}
		</>
	);
};
