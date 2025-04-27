export interface SmallBanner {
    title: string,
    subtitle: string,
    cta?: {
        label: string,
        href: string
    }
}

export interface Product {
    id: string,
    name: string,
    description: string,
    stored: number,
    sold: number,
    price: number,
    offer?: number,
    slug: string,
    active: boolean,
    seller: string, //provider id
    createdAt: Date,
    updatedAt: Date,
    category: string[] //categories id
    thumbnail: string
    //later images!
}