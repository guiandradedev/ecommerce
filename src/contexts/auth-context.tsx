"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { AuthAPI, AuthResponse } from "@/api/auth";
import { User, Token } from "@/types/user";
import { auth_max_age, cookies_key } from "@/constants";

interface SocialLogin {
    provider: "Google";
    token: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    socialLogin: (data: SocialLogin) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<Token | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const authAPI = new AuthAPI();

    // Função para login com email e senha
    async function login(email: string, password: string): Promise<void> {
        // setIsLoading(true);
        // try {
        //     const response = await authAPI.login(email, password);
        //     handleAuthSuccess(response);
        // } catch (error) {
        //     console.error("Erro ao fazer login:", error);
        // } finally {
        //     setIsLoading(false);
        // }
    }

    // Função para login social
    async function socialLogin({ provider, token }: SocialLogin): Promise<void> {
        setIsLoading(true);
        try {
            const response = await authAPI.social_login(provider, token);
            handleAuthSuccess(response);
        } catch (error) {
            console.error("Erro ao fazer login social:", error);
        } finally {
            setIsLoading(false);
        }
    }

    // Função para logout
    async function logout(): Promise<void> {
        setIsLoading(true);
        try {
            setUser(null);
            setToken(null);
            setIsAuthenticated(false);
            destroyCookie(null, `${cookies_key}auth_token`);
            destroyCookie(null, `${cookies_key}user`);
            await authAPI.logout();
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
        } finally {
            setIsLoading(false);
        }
    }

    // Função para lidar com sucesso na autenticação
    function handleAuthSuccess(response: AuthResponse) {
        const { token, id, attributes } = response.data;

        setToken(token);
        setUser({ id, ...attributes });
        setIsAuthenticated(true);

        // Salvar token e usuário nos cookies
        setCookie(null, `${cookies_key}auth_token`, JSON.stringify(token), {
            maxAge: auth_max_age,
            path: "/",
            sameSite: "strict",
        });
        setCookie(null, `${cookies_key}user`, JSON.stringify({ id, ...attributes }), {
            maxAge: auth_max_age,
            path: "/",
            sameSite: "strict",
        });
    }

    // Carregar estado inicial a partir dos cookies
    useEffect(() => {
        const { [`${cookies_key}auth_token`]: authToken, [`${cookies_key}user`]: userCookie } = parseCookies();

        if (authToken && userCookie) {
            try {
                const parsedToken = JSON.parse(authToken);
                const parsedUser = JSON.parse(userCookie);

                setToken(parsedToken);
                setUser(parsedUser);
                setIsAuthenticated(true);
            } catch (error) {
                console.error("Erro ao parsear cookies de autenticação:", error);
            }
        }

        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, socialLogin, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};