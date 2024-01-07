import { ProductMobileSlideshow } from './ProductMobileSlideshow';
import { ProductDesktopSlideshow } from './ProductDesktopSlideshow';

interface Props {
	images: string[];
	title: string;
}

export const ProductSlideshow = ({ title, images }: Props) => {
	return (
		<>
			<ProductMobileSlideshow title={title} images={images} />
			<ProductDesktopSlideshow title={title} images={images} />
		</>
	);
};
