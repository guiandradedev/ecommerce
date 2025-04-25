import { SmallBanner } from "./types"

export const base = {
    company_name: "E-Commerce"
}

export const local_storage_key = "@ecommerce/"

export const small_banner: SmallBanner = {
    title: "Super Promoção",
    subtitle: "Preços Baixissimos até 23h59",
    cta: {
        label: "Compre já",
        href: "/promo"
    }
}