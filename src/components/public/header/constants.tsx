import { NavbarAction, NavbarLink } from "./types";
import { ShoppingCartIcon, HeartIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid'

export const navbar_links: NavbarLink[] = [
    {
        label: "Departamentos",
        href: "/departments",
        extends: {
            items: [
                {
                    label: "Hardware",
                    description: "As melhores opções de hardware",
                    href: "/departments/hardware"
                },
                {
                    label: "Periféricos",
                    description: "Os melhores periféricos",
                    href: "/departments/peripherals"
                },
                {
                    label: "Mobile",
                    description: "Os tablet's e celulares mais procurados do momento",
                    href: "/departments/mobile"
                },
            ],
            cta: [
                { label: 'Watch demo', href: '#' },
                { label: 'Contact sales', href: '#' },
            ]
        }
    },
    {
        label: "Cupons",
        href: "/coupoms"
    },
    {
        label: "Blog",
        href: "/blog"
    }
]

export const navbar_actions: NavbarAction[] = [
    {
        label: "Suporte",
        icon: QuestionMarkCircleIcon,
        href: "/support",
    },
    {
        label: "Favoritos",
        icon: HeartIcon,
        href: "/favorites",
        badge: {
            key: "favoritesCount",
        }
    },
    {
        label: "Carrinho",
        icon: ShoppingCartIcon,
        href: "/cart",
        badge: {
            key: "cartCount", 
        }
    },
]