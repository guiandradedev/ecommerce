import { Product, SmallBanner } from "./types"

export const base = {
    company_name: "E-Commerce",
    company_description: "A melhor loja de produtos eletrônicos",
    company_url: "https://ecommerce.com",
    // company_email: 
}

export const api = {
    base_url: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
}

export const local_storage_key = "@ecommerce/"
export const cookie_max_age = 60 * 60 * 24 // 24hs

export const small_banner: SmallBanner = {
    title: "Super Promoção",
    subtitle: "Preços Baixissimos até 23h59",
    cta: {
        label: "Compre já",
        href: "/promo"
    }
}

export const products: Product[] = [
    {
        id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
        name: "Notebook Gamer",
        description: "Notebook de alta performance com processador Intel i7 e placa de vídeo RTX 3060.",
        stored: 15,
        sold: 30,
        price: 7500,
        offer: 6999,
        slug: "notebook-gamer",
        active: false,
        seller: "seller123",
        createdAt: new Date("2023-01-15"),
        updatedAt: new Date("2023-04-01"),
        category: ["computers", "gaming"],
        thumbnail: "data:image/jpeg;base64,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",
    },
    {
        id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
        name: "Smartphone Pro",
        description: "Smartphone com câmera de 108MP, tela AMOLED e bateria de longa duração.",
        stored: 50,
        sold: 120,
        price: 4500,
        offer: 4299,
        slug: "smartphone-pro",
        active: true,
        seller: "seller456",
        createdAt: new Date("2023-02-10"),
        updatedAt: new Date("2023-03-20"),
        category: ["smartphones"],
        thumbnail: "https://m.media-amazon.com/images/I/81zLNgcvlaL._AC_SL1500_.jpg",
    },
    {
        id: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r",
        name: "Fone de Ouvido Bluetooth",
        description: "Fone de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
        stored: 100,
        sold: 200,
        price: 350,
        slug: "fone-bluetooth",
        active: true,
        seller: "seller789",
        createdAt: new Date("2023-03-01"),
        updatedAt: new Date("2023-03-25"),
        category: ["audio", "accessories"],
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVuiJoiuHQTvhh24r9sOXyDInUbQxu95Mdg&s",
    },
    {
        id: "4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r9s",
        name: "Monitor 4K",
        description: "Monitor 4K de 27 polegadas com cores vibrantes e alta taxa de atualização.",
        stored: 20,
        sold: 50,
        price: 2500,
        slug: "monitor-4k",
        active: true,
        seller: "seller321",
        createdAt: new Date("2023-01-20"),
        updatedAt: new Date("2023-04-05"),
        category: ["monitors"],
        thumbnail: "https://m.media-amazon.com/images/I/81v90JtbImL._AC_SL1500_.jpg",
    },
    {
        id: "5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s0t",
        name: "Teclado Mecânico RGB",
        description: "Teclado mecânico com iluminação RGB personalizável e switches de alta durabilidade.",
        stored: 80,
        sold: 150,
        price: 500,
        slug: "teclado-mecanico-rgb",
        active: true,
        seller: "seller654",
        createdAt: new Date("2023-02-05"),
        updatedAt: new Date("2023-03-15"),
        category: ["accessories", "gaming"],
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6hIE_fpSBDZyyXAL-ywZJJO58k_CCCEY9QQ&s",
    },
];