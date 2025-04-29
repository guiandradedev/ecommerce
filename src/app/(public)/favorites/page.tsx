"use client";

import { Button } from "@/components/ui/button";
import { useFavorite } from "@/contexts/favorite-context";

export default function Favorites() {
    const { favorites, clearFavorites } = useFavorite();
    return <div>{ favorites.map(favorite=>(
        <div key={favorite.id}>
            <h1>{favorite.name}</h1>
            <img src={favorite.thumbnail} alt={favorite.name} />
        </div>
    )) }
    <Button onClick={clearFavorites}>Zerar favoritos</Button>
    </div>
    // return <h1>Favoritos</h1>
}