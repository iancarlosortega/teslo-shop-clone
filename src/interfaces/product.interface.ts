export interface Product {
	id: string;
	description: string;
	images: string[];
	inStock: number;
	price: number;
	sizes: ProductSize[];
	slug: string;
	tags: string[];
	title: string;
	type: ProductType;
	gender: ProductCategory;
}

export interface CartProduct {
	id: string;
	title: string;
	slug: string;
	price: number;
	quantity: number;
	inStock: number;
	size: ProductSize;
	image: string;
}

export type ProductCategory = 'men' | 'women' | 'kid' | 'unisex';
export type ProductSize = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type ProductType = 'shirts' | 'pants' | 'hoodies' | 'hats';
