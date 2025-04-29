"use client";

import { Button } from "@/components/ui/button";
import { useFavorite } from "@/contexts/favorite-context";
import Link from "next/link";

export default function Favorites() {
    const { favorites, clearFavorites } = useFavorite();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Meus Favoritos</h1>

            {favorites.length > 0 ? (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {favorites.map((favorite) => (
                            <div
                                key={favorite.id}
                                className="border rounded-lg shadow-sm overflow-hidden bg-white"
                            >
                                <Link
                                    href={`/product/${favorite.product?.slug}`}
                                    className="block"
                                >
                                <img
                                    src={favorite.thumbnail}
                                    alt={favorite.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        {favorite.name}
                                    </h2>
                                    <p className="text-gray-600 mt-2">{favorite.product?.description}</p>
                                    <p className="text-indigo-600 font-bold mt-4">
                                        R$ {favorite.price.toFixed(2)}
                                    </p>
                                </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <Button
                            onClick={clearFavorites}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
                        >
                            Zerar Favoritos
                        </Button>
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <h2 className="text-xl font-semibold text-gray-700">
                        Você ainda não tem itens favoritos.
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Explore nossos produtos e adicione seus favoritos aqui!
                    </p>
                </div>
            )}
        </div>
    );
}