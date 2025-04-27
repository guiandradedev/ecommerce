import { ProductAPI } from "@/api/product";
import ButtonAddToCart from "@/components/product/add-to-cart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProductPageProps {
    params: Promise<{
        productSlug: string;
    }>;
}

export default async function Product({ params }: ProductPageProps) {
    const { productSlug } = await params;
    const productAPI = new ProductAPI();

    try {
        const product = await productAPI.getBySlug(productSlug);

        if (!product) {
            return (
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <h1 className="text-2xl font-bold text-gray-800">Produto não encontrado</h1>
                </div>
            );
        }

        const isActive = product.active && product.stored > 0;

        return (
            <div className="bg-gray-50 rounded shadow">
                <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Imagem do Produto */}
                        <div className="flex justify-center items-center">
                            <img
                                src={product.thumbnail}
                                alt={product.name}
                                className="rounded-lg shadow-lg max-h-96 object-cover"
                            />
                        </div>

                        <div className="flex flex-col justify-center">
                            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                            <p className="mt-4 text-lg text-gray-600">{product.description}</p>
                            <p className="mt-6 text-2xl font-semibold text-indigo-600">
                                R$ {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                            </p>

                            {
                                !isActive && (
                                    <p className="mt-4 text-lg font-medium text-red-600">Produto indisponível</p>
                                )
                            }

                            <ButtonAddToCart content="Adicionar ao carrinho" isActive={isActive} product={product}/>
                        </div>
                    </div>

                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-gray-900">Detalhes do Produto</h2>
                        <ul className="mt-4 space-y-2 text-gray-600">
                            <li>
                                <strong>Categoria:</strong>
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {product.category.map((category) => (
                                        <Badge key={category} className="bg-indigo-100 text-indigo-600 " asChild>
                                            <Link href={`/categories/${category}`}>
                                                {category.toUpperCase()}
                                            </Link>
                                        </Badge>
                                    ))}
                                </div>
                            </li>
                            <li>
                                <strong>Vendido por:</strong>{" "}
                                <Link
                                    href={`/sellers/${product.seller}`}
                                    className="text-indigo-600 hover:underline"
                                >
                                    {product.seller}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Erro ao buscar o produto:", error);
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-2xl font-bold text-gray-800">Erro ao carregar o produto</h1>
            </div>
        );
    }
}