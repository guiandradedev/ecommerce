"use client"
import { Button } from "@/components/ui/button";
import { Product } from "@/constants/types";
import { useFavorite } from "@/contexts/favorite-context";
import { twMerge } from 'tailwind-merge'
import { Heart } from "lucide-react";

interface BaseButtonProps {
    product: Product,
    className?: string
}

export default function ButtonToggleFavorite({ className, product }: BaseButtonProps) {
    const { toggleFavorite, isInFavorites, favorites } = useFavorite();
    console.log(isInFavorites(product.id), favorites);

    const handleToggleFavorite = () => {
        toggleFavorite({ id: product.id, name: product.name, price: product.price, thumbnail: product.thumbnail, product });
    };

    return (
        <Button
            className={twMerge(`mt-4 w-full py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer
                ${isInFavorites(product.id) && "bg-red-500 hover:bg-red-600"}
                `, className)}
            onClick={handleToggleFavorite}
        >
            <Heart className="h-4 w-4" />
        </Button>
    );
}