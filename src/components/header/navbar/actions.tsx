"use client"

import Link from "next/link";
import { navbar_actions } from "../constants";
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context";
import { act, useState } from "react";

export default function Actions() {
    const { cart } = useCart()
    const [favorites, setFavorites] = useState(0)

    const actions = navbar_actions.map((action) => {
        let badgeCount = 0;
        if (action.badge?.key === "cartCount") badgeCount = cart.length;
        if (action.badge?.key === "favoritesCount") badgeCount = favorites;

        return { ...action, badge: { count: badgeCount } };
    });
    
    return (
        <div className="flex gap-3">
            {actions.map(action=>(
                <Link key={action.label} className="relative cursor-pointer" href={action.href}>
                    {
                        action.badge && action.badge.count != 0 && (
                            <Badge className="absolute h-5 w-1 text-sm bg-red-500 -right-2 -top-1">{action.badge.count}</Badge>
                        )
                    }
                    <action.icon className="h-8 text-gray-600 " />
                </Link>
            ))}
        </div>
    )
}