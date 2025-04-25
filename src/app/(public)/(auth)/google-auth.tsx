"use client";

import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";
import axios from "axios";

export default function GoogleAuth() {
    const handleLoginSuccess = async (credentialResponse: CredentialResponse) => {
        const googleToken = credentialResponse.credential;

        if (!googleToken) {
            console.error("Token do Google não encontrado.");
            return;
        }

        try {
            const response = await axios.post<{ data: {token: {access_token: string, refresh_token: string}} }>("http://localhost:3001/api/auth/social-login", {
                token: googleToken,
                provider: "Google"
            });

            console.log(response.data.data.token.access_token)

            // localStorage.setItem("token", response.data.data.access_token);
            // localStorage.setItem("refresh_token", response.data.data.token);
            console.log("Login bem-sucedido!", response.data);
        } catch (error) {
            console.error("Erro ao fazer login:", (error as any).response?.data || error);
        }
    };

    return (
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
            <div>
                <GoogleLogin onSuccess={handleLoginSuccess} onError={() => console.error("Erro no login")} />
            </div>
        </GoogleOAuthProvider>
    );
}
