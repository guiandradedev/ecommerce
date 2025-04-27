"use client";

import { useFavorite } from "@/contexts/favorite-context";

export default function Favorites() {
    const { favorites } = useFavorite();
    return <h1>{ favorites.map(favorite=>(
        <div key={favorite.id}>
            <h1>{favorite.name}</h1>
            <img src={favorite.thumbnail} alt={favorite.name} />
        </div>
    )) }</h1>
    // return <h1>Favoritos</h1>
}