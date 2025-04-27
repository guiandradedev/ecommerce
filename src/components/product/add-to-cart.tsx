"use client"
import { Button } from "@/components/ui/button";
import { Product } from "@/constants/types";
import { useCart } from "@/contexts/cart-context";
import { twMerge } from 'tailwind-merge'

interface BaseButtonProps {
    isActive: boolean;
    product: Product,
    className?: string
}

type ButtonAddToCartProps =
    | (BaseButtonProps & { content: string; children?: never })
    | (BaseButtonProps & { content?: never; children: React.ReactNode });

export default function ButtonAddToCart({ content, children, isActive, className, product }: ButtonAddToCartProps) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 });
    };

    return (
        <Button
            className={twMerge(className, "mt-4 w-full text-white py-3 px-6 rounded-lg text-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer")}
            disabled={!isActive}
            onClick={handleAddToCart}
        >
             {content || children}
        </Button>
    );
}