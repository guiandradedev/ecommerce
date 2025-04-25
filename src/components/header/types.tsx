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

export interface NavbarAction {
    label: string, //alt text if necessary
    icon: React.ElementType,
    href: string,
    badge?: {
        count: number
    }
}