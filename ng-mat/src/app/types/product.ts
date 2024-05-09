export interface ProductWithoutAllFields {
    id: number,
    title: string,
    // description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    // images: string[],
}


export interface Product extends ProductWithoutAllFields {
    images: string[],
    description: string,
}

export interface ProductResponse {
    products: Product[]
}