"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import { cookie_max_age } from "@/constants";
import { Product } from "@/constants/types";

interface FavoriteItem {
    id: string;
    name: string;
    price: number;
    thumbnail: string;
    product?: Product
}

interface FavoriteContextType {
    favorites: FavoriteItem[];
    toggleFavorite: (item: FavoriteItem) => void;
    clearFavorites: () => void;
    isInFavorites: (id: string) => boolean;
    getFavorite: (id: string) => FavoriteItem | undefined;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
    const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

    useEffect(() => {
        const { favorites: favoritesCookie } = parseCookies();
        if (favoritesCookie) {
            try {
                const parsedFavorites = JSON.parse(favoritesCookie);
                setFavorites(parsedFavorites);
            } catch (error) {
                console.error("Erro ao parsear os favoritos", error);
            }
        }
    }, []);

    useEffect(() => {
        setCookie(null, "favorites", JSON.stringify(favorites), {
            maxAge: cookie_max_age,
            path: "/",
            sameSite: "strict",
        });
    }, [favorites]);

    function toggleFavorite(item: FavoriteItem) {
        setFavorites((prevFavorites) => {
            const existingItem = prevFavorites.find((favoriteItem) => favoriteItem.id === item.id);
            if (existingItem) {
                return prevFavorites.filter((favoriteItem) => favoriteItem.id !== item.id);
            }
            return [...prevFavorites, item];
        });
    }

    function isInFavorites(id: string) {
        return favorites.some((favoriteItem) => favoriteItem.id === id);
    }
    function getFavorite(id: string) {
        return favorites.find((favoriteItem) => favoriteItem.id === id);
    }

    function clearFavorites() {
        setFavorites([]);
        destroyCookie(null, "favorites");
    }

    return (
        <FavoriteContext.Provider value={{ favorites, toggleFavorite, clearFavorites, isInFavorites, getFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorite = () => {
    const context = useContext(FavoriteContext);
    if (!context) {
        throw new Error("useFavorite must be used within a FavoriteProvider");
    }
    return context;
};