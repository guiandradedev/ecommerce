import { Product } from "@/constants/types";
import { products } from "@/constants";
interface IProductAPI {
    getById(id: string): Promise<Product | null>
    getBySlug(slug: string): Promise<Product | null>
}

export class ProductAPI implements IProductAPI{
    async getById(id: string): Promise<Product | null> {
        const product = products.find(prod=>prod.id === id)
        if(!product) return null
        return product;
    }
    async getBySlug(slug: string): Promise<Product | null> {
        const product = products.find(prod=>prod.slug === slug)
        if(!product) return null
        return product;
    }
}