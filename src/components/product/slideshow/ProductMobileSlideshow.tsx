'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css';

interface Props {
	images: string[];
	title: string;
}

export const ProductMobileSlideshow = ({ images, title }: Props) => {
	return (
		<Swiper
			style={{
				width: '100vw',
				height: '500px',
			}}
			pagination={true}
			autoplay={{
				delay: 2500,
			}}
			modules={[FreeMode, Pagination, Autoplay]}
			className='mySwiper2'>
			{images.map(image => (
				<SwiperSlide key={image}>
					<Image
						src={`/products/${image}`}
						alt={title}
						width={600}
						height={500}
						className='object-fill'
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
