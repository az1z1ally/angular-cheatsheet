export interface ProductWithoutImages {
    id: string,
    title: string,
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
    description: string,
}

export interface ProductResponse {
    products: Product[]
}