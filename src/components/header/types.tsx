export interface Link {
    label: string,
    href: string,
    icon?: string,
    description: string
}

export interface NavbarLink extends Omit<Link, "icon" | "description"> {
    extends?: {
        items?: Link[],
        cta?: Omit<Link, "description">[]
    }
}