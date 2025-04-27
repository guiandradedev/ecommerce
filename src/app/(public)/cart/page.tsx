"use client"

import { useCart } from "@/contexts/cart-context"

export default function Cart() {
    const { cart } = useCart()
    console.log(cart)
    return <h1>Carrinho</h1>
}