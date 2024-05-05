export interface ProductWithoutImages {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
}


export interface Product extends ProductWithoutImages {
    images: string[],
}

export interface ProductResponse {
    products: Product[]
}