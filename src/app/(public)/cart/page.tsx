"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";
import Link from "next/link";

export default function Cart() {
    const { cart, removeFromCart, clearCart } = useCart();

    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const shippingEstimate = 5.0;
    const taxEstimate = subtotal * 0.1;
    const total = subtotal + shippingEstimate + taxEstimate;

    return (
        <div className="bg-gray-50 rounded shadow py-12 sm:py-16 mb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Carrinho</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <ul className="divide-y divide-gray-200">
                            {cart.map((item) => (
                                <li key={item.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img
                                            src={item.thumbnail}
                                            alt={item.name}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>{item.name}</h3>
                                                <p className="ml-4">R$ {item.price.toFixed(2)}</p>
                                            </div>
                                            <div>
                                                <p className="mt-1 text-sm text-gray-500">Quantidade: {item.quantity}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm">
                                            <Button
                                                variant="outline"
                                                onClick={() => removeFromCart(item.id)}
                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                Remover
                                            </Button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-lg font-medium text-gray-900">Resumo</h2>
                        <div className="mt-6 space-y-4">
                            <div className="flex justify-between text-sm text-gray-600">
                                <p>Subtotal</p>
                                <p>R$ {subtotal.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600">
                                <p>
                                    Frete
                                    <span className="ml-1 text-gray-400">(fixo)</span>
                                </p>
                                <p>R$ {shippingEstimate.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600">
                                <p>Taxas</p>
                                <p>R$ {taxEstimate.toFixed(2)}</p>
                            </div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p>Total</p>
                                <p>R$ {total.toFixed(2)}</p>
                            </div>
                        </div>
                        <div className="mt-6">
                            <Button
                                asChild
                                className="w-full bg-indigo-600 text-white py-6 px-4 rounded-lg text-md font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                            >
                                <Link
                                    href="/checkout"
                                >
                                    Checkout
                                </Link>
                            </Button>
                        </div>
                        {cart.length > 0 && (
                            <div className="mt-2">
                                <Button
                                    onClick={clearCart}
                                    className="w-full bg-red-600 text-white py-3 px-4 rounded-lg text-sm font-semibold hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
                                >
                                    Zerar Carrinho
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}