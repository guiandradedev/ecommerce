import { Badge } from "@/components/ui/badge";
import { Product as ProductProps} from "@/constants/types";
import { priceFormatter } from "@/utils/formatter";

export function Product({ product }: { product: ProductProps }) {
    return <div className="group relative">
        <img
            alt={product.name}
            src={product.thumbnail}
            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
        />
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-md text-gray-700">
                    <a href={`/product/${product.slug}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                    </a>
                </h3>
                <p className="mt-1 text-md text-gray-500 gap-1 flex">
                    {product.category.map(category=>(
                        <Badge key={category}>{category.toUpperCase()}</Badge>
                    ))}
                </p>
            </div>
            <p className="text-md font-medium text-gray-900">{priceFormatter.format(product.price)}</p>
        </div>
    </div>
}