export type TypeUserRoles = 'USER' | 'ADMIN'

export interface User {
    id: string,
    name: string,
    email: string,
    password?: string,
    role: TypeUserRoles,
    account_activate_at: Date | null,
    createdAt: Date,
    updatedAt: Date,
}

export interface Token {
    access_token: string,
    refresh_token: string
}